import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private columns: Array<Object> = [

    { key: "datum", text: "Dátum", type: "date" },
    { key: "nev", text: "Név", type: "text" },
    { key: "fo", text: "Fő", type: "number" },
    { key: "cim", text: "Helyszín", type: "text" },
    { key: "iranyitoszam", text: "Irányítószám", type: "number" },
  ]

  constructor() { }
}
