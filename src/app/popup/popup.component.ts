import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger, state} from '@angular/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @HostBinding('@state')
  state: 'opened' | 'closed' = 'closed';

  @Input()
  get message(): string {return this._message; }
  set message(message: string){
    this._message = message;
    this.state = 'opened';
  }
  private _message: string;

  @Output() closed = new EventEmitter();

}
