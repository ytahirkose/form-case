import { Component, OnInit } from '@angular/core';
import {FormService} from "../../services/form.service";
import {Form} from "../../models/form";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.scss']
})
export class FillFormComponent implements OnInit {

  form: Form | undefined;
  fillForm: FormGroup;
  builder: any = {}

  constructor(
    private formService: FormService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.form = this.formService.getForm(params['formName'])
    });
    this.form?.fields.map(item => {
      this.builder[item.name] = ['', (item.required?Validators.required:'')]
    });
    this.createFillForm();
  }

  createFillForm() {
    this.fillForm = this.formBuilder.group(this.builder);
  }

  addFillForm() {
    if (this.fillForm.valid) {
      console.log(this.fillForm)
    }
  }
}
