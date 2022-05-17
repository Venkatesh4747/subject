import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  register: unknown;
  @Input() recives = '';
  @Output() newEvent = new EventEmitter<string>();
  child = 'child to parent';
  constructor(private api: ServiceService) {}

  ngOnInit(): void {
    this.api.notication.subscribe((a) => {
      console.log('a', a);
      this.register = a;
    });
  }
  comming() {
    this.newEvent.emit(this.child);
  }
}
