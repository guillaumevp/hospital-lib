

import {PatientsRegister} from './patientsRegister';

/** Class representing a quarantine. */
export class Quarantine {

    /** Class private constants */
    private static readonly NOT_IMPLEMENTED_MESSAGE = 'Work, work.';

    /**
     * Quarantine class constructor
     *
     * @param  {PatientsRegister} patients          object describing the states of the patients
     * @constructor
     */
    constructor(patients: PatientsRegister) {
        throw new Error(Quarantine.NOT_IMPLEMENTED_MESSAGE);
    }

    /**
     * Define which drugs will be given to all patients
     *
     * @param  {String[]} drugs          array of drugs
     * @return {void}
     */
    public setDrugs(drugs: Array<string>): void {
        throw new Error(Quarantine.NOT_IMPLEMENTED_MESSAGE);
    }

    /**
     * Administer the drugs to the patients
     *
     * @return {void}
     */
    public wait40Days(): void {
        throw new Error(Quarantine.NOT_IMPLEMENTED_MESSAGE);
    }

    /**
     * Return an object describing the current states of the patients, following the same format as the constructor argument.
     *
     * @return {void}
     */
    public report(): PatientsRegister {
        throw new Error(Quarantine.NOT_IMPLEMENTED_MESSAGE);
    }
}
