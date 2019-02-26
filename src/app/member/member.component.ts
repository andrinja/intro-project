import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  private isActive1 = false;
  private isActive2 = false;
  private isActive3 = false;

  constructor() {
  }

  ngOnInit() {
  }

  onToggle1() {
    this.isActive1 = !this.isActive1;
  }
  onToggle2() {
    this.isActive2 = !this.isActive2;
  }
  onToggle3() {
    this.isActive3 = !this.isActive3;
  }

}
