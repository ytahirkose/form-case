import {Injectable} from '@angular/core';
import {Form} from "../models/form";
import {FormInfo} from "../models/form-info";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formInfos: FormInfo[] = [];
  forms: Form[] = [
    {
      name: 'form deneme',
      description: 'ilk form',
      createdAt: '2022-03-18',
      fields: [
        {
          name: 'ad',
          required: true,
          dataType: 'STRING'
        },
        {
          name: 'yaş',
          required: true,
          dataType: 'NUMBER'
        }
      ]
    }, {
      name: 'form2',
      description: 'ikinci form',
      createdAt: '2022-03-18',
      fields: [
        {
          name: 'ad',
          required: false,
          dataType: 'STRING'
        },
        {
          name: 'yaş',
          required: true,
          dataType: 'NUMBER'
        },
        {
          name: 'şehir',
          required: true,
          dataType: 'STRING'
        }
      ]
    }, {
      name: 'form3',
      description: 'üçüncü form',
      createdAt: '2022-03-18',
      fields: [
        {
          name: 'ad',
          required: true,
          dataType: 'STRING'
        },
        {
          name: 'soyad',
          required: true,
          dataType: 'STRING'
        },
        {
          name: 'okul',
          required: true,
          dataType: 'STRING'
        },
        {
          name: 'yaş',
          required: false,
          dataType: 'NUMBER'
        }
      ]
    }
  ]

  constructor() {
    const res = localStorage.getItem('forms')
    if (res){
      this.forms = JSON.parse(res);
    }
    this.formInfos = this.forms.map(form=>{
      return {name: form.name, createdAt: form.createdAt, description: form.description}
    });
    this.setFormsToLS()
  }

  setFormsToLS(): void {
    localStorage.setItem('forms', JSON.stringify(this.forms));
    localStorage.setItem('formInfos', JSON.stringify(this.formInfos));
  }

  addForm(form: Form): string {
    this.forms.push(form)
    this.setFormsToLS()
    return form.name
  }

  deleteForm(form: Form): void {
    this.forms = this.forms.filter(el => el !== form)
    this.setFormsToLS()
  }

  getForms(): Form[] {
    return this.forms
  }

  getFormInfos(): FormInfo[] {
    return this.formInfos
  }

  getForm(formName: string): Form | undefined {
    return this.forms.find(form => form.name == formName);
  }

}
