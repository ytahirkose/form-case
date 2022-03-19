export class Form {


  constructor(name: string, description: string, createdAt: string, Field: Field[]) {
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.fields = Field;
  }

  name: string;
  description: string;
  createdAt: string;
  fields: Field[];
}

export class Field {


  constructor(required: boolean, name: string, dataType: string) {
    this.required = required;
    this.name = name;
    this.dataType = dataType;
  }

  required: boolean;
  name: string;
  dataType: string
}
