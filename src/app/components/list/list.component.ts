import {Component, Input, OnInit} from '@angular/core';
import {FormService} from "../../services/form.service";
import {FormInfo} from "../../models/form-info";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  formInfos: FormInfo[];
  @Input() filterArgs: string;

  constructor(formService: FormService) {
    this.formInfos = formService.getFormInfos();
  }

  ngOnInit(): void {
  }

}
