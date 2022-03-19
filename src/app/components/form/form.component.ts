import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Field, Form} from "../../models/form";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  date = new Date();
  newFormContent: Field[] = [];
  newFormAddForm: FormGroup;
  newFormContentAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.createFormAddForm();
    this.createFormContentAddForm();
  }

  ngOnInit(): void {
  }

  createFormAddForm() {
    this.newFormAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      createdAt: [`${this.date.getFullYear() + '-' + (this.date.getMonth() +1) + '-' +
      this.date.getDate()}`, Validators.required],
      fields: [this.newFormContent]
    });
  }

  createFormContentAddForm() {
    this.newFormContentAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      required: ['', Validators.required],
      dataType: ['', Validators.required]
    });
  }

  addForm() {
    if (this.newFormAddForm.valid) {
      alert(`${this.formService.addForm(this.newFormAddForm.value)} Formu Eklendi`)
    }
  }

  addContent() {
    if (this.newFormContentAddForm.valid) {
      this.newFormContent.push(this.newFormContentAddForm.value);
    }
  }

}
