import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css'],
})
export class InputRadioComponent implements OnInit {
  @Output() handleChangeGender = new EventEmitter();
  @Input() gender: string = 'all';

  constructor() {}

  ngOnInit(): void {}

  changeFilter(gender: string) {
    this.handleChangeGender.emit(gender);
  }
}
