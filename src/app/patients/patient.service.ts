import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Patient } from '../patient.model';
import { MOCK_PATIENTS } from '../mock-patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Patient[] = [...MOCK_PATIENTS];

  getPatients(): Observable<Patient[]> {
    return of(this.patients);
  }

  addPatient(patient: Patient): Observable<Patient> {
    this.patients.push(patient);
    return of(patient);
  }
}
