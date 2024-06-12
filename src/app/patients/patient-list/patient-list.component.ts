import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PatientService } from '../patient.service';
import { Patient } from '../../patient.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  providers: [DatePipe] // Add DatePipe here
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  @Input() maxVisits: number | undefined;

  displayedColumns: string[] = ['name', 'dateOfBirth', 'gender', 'service', 'comments', 'visits'];
  someThresholdValue: any;

  constructor(private patientService: PatientService, private datePipe: DatePipe) { } // Inject DatePipe here

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((patients: Patient[]) => {
      this.patients = patients;
    });
  }

  // Create a method to format date of birth
  formatDateOfBirth(dateOfBirth: any): string {
    return this.datePipe.transform(dateOfBirth, 'shortDate') || '';
  }
}
