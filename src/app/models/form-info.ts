export class FormInfo {


  constructor(name: string, description: string, createdAt: string) {
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
  }

  name: string;
  description: string;
  createdAt: string;
}
