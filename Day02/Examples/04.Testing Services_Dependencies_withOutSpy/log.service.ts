import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() {
    console.log("Message from LogService constructor");

   }

  public log(message:string)
  {
    console.log("[Logger Service Message] : " + message);
  }
}
