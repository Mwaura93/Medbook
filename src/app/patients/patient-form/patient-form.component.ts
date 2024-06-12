import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';
import { Patient } from '../../patient.model';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  patientForm: FormGroup;
  genders = ['Male', 'Female'];

  constructor(private fb: FormBuilder, private patientService: PatientService) {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      service: ['', Validators.required],
      comments: [''],
      visits: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.patientForm.valid) {
      const newPatient: Patient = this.patientForm.value;
      this.patientService.addPatient(newPatient).subscribe(() => {
        this.patientForm.reset();
      });
    }
  }
}
