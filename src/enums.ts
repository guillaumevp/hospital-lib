export type Enums = {
    [key: string]: number;
};

export enum PatientState {
    Fever = 'F',
    Healthy = 'H',
    Diabetes = 'D',
    Tuberculosis = 'T',
    Dead = 'X',
}

export enum Drug {
    Aspirin = 'As',
    Antibiotic = 'An',
    Insulin = 'I',
    Paracetamol = 'P',
}
