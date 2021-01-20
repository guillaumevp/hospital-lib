export interface PatientsRegister {
    [key: string]: number
}

enum PatientState {
    Fever = 'F',
    Healthy = 'H',
    Diabetes = 'D',
    Tuberculosis = 'T',
    Dead = 'X',
}

enum Drug {
    Aspirin = 'As',
    Antibiotic = 'An',
    Insulin = 'I',
    Paracetamol = 'P',
}
