//=============================================================================
// Imports
//=============================================================================

import {Drug, PatientsRegister, PatientState} from './patientsRegister';

//=============================================================================
// Exports
//=============================================================================

/** Class representing a quarantine. */
export class Quarantine {

    /** Class private constants */
    private static readonly NOT_IMPLEMENTED_MESSAGE = 'Work, work.';

    /** Class private variables */
    patients: PatientsRegister;
    drugs: Drug[];


    /**
     * Quarantine class constructor
     *
     * @param  {PatientsRegister} patients          object describing the states of the patients
     * @constructor
     */
    constructor(patients: PatientsRegister) {
        // Store patients state
        this.patients = patients;
    }

    /**
     * Define which drugs will be given to all patients
     *
     * @param  {Drug[]} drugs          array of drugs
     * @return {void}
     */
    public setDrugs(drugs: Drug[]): void {
        this.drugs = drugs;
    }

    /**
     * Administer the drugs to the patients
     *
     * @return {void}
     */
    public wait40Days(): void {
        // Init an immutable patient register
        const newPatients: PatientsRegister = {};
        // Loop through patient states
        for (const state in this.patients) {
            // Init new state number of patients if needed
            if (!newPatients[state]) newPatients[state] = 0;
            // Skip if no patients for this state
            if (!this.patients[state]) continue;
            // Calculate new patient state
            const newState = this.drugEffect(this.drugs || [], state as PatientState);
            // Init new state number of patients if needed
            if (!newPatients[newState]) newPatients[newState] = 0;
            // Increment new state number of patients
            newPatients[newState] += this.patients[state];
        }
        // Store new patient register
        this.patients = newPatients;
    }

    /**
     * Return an object describing the current states of the patients, following the same format as the constructor argument.
     *
     * @return {PatientsRegister}       current states of the patients
     */
    public report(): PatientsRegister {
        return this.patients;
    }

    /**
     * Apply a drug to a patient
     *
     * @param  {Drug[]} drugs          array of drugs
     * @param  {PatientState} patientState          current states of the patients
     *
     * @return {PatientState}       new states of the patients
     */
    private drugEffect(drugs: Drug[], patientState: PatientState): PatientState {
        // Rules causing Death take precedence over others.
        if (
          // Paracetamol kills subject if mixed with aspirin.
          (drugs.includes(Drug.Paracetamol) && drugs.includes(Drug.Aspirin))
          // Insulin prevents diabetic subject from dying, does not cure Diabetes;
          || (patientState === PatientState.Diabetes && !drugs.includes(Drug.Insulin))
        ) return PatientState.Dead;

        if (
          // Aspirin cures Fever
          // Paracetamol cures Fever
          (patientState === PatientState.Fever && drugs.some(drug => [Drug.Aspirin, Drug.Paracetamol].includes(drug)))
          // Antibiotic cures Tuberculosis
          || (patientState === PatientState.Tuberculosis && drugs.includes(Drug.Antibiotic))
        ) return PatientState.Healthy;
        // If insulin is mixed with antibiotic, healthy people catch Fever
        if (patientState === PatientState.Healthy && drugs.includes(Drug.Insulin) && drugs.includes(Drug.Antibiotic)) return PatientState.Fever;
        // A sick patient not receiving the right medicines remains sick, if not explicitly mentioned otherwise
        return patientState;
    }
}
