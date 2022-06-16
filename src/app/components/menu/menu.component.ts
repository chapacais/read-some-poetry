import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() closeMenu = new EventEmitter();

  routeForPoem: string = '';

  routes = [
    {
      name: 'Home',
      route: ''
    },
    {
      name: `${localStorage.getItem('poemTitle') ? 'Current Poem' : ''}`,
      route: `/poem/${localStorage.getItem('poemTitle')}`
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeMenu.emit();
  }
}
