import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public notication = new Subject();

  constructor() { }
  notification(data:any){
this.notication.next(data)
  }
}
