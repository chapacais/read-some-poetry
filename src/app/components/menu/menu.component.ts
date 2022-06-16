import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() closeMenu = new EventEmitter();

  routes = [
    {
      name: 'Home',
      route: ''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeMenu.emit();
  }
}
