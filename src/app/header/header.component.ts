import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  msg="parent to child";
  raw: string|any;
  constructor(private api:ServiceService) { }

  ngOnInit(): void {``

  }
  sendData(data:any){
    console.log('23',data);

this.api.notification(data.value);
  }
  data(event:string){
console.log('event',event);
this.raw =event
  }
}
