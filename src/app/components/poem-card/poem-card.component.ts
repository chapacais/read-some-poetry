import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poem } from 'src/app/models/Poem';

@Component({
  selector: 'app-poem-card',
  templateUrl: './poem-card.component.html',
  styleUrls: ['./poem-card.component.scss']
})
export class PoemCardComponent implements OnInit {
  @Input() poem: Poem = {};
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
  }

  width: any;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.width = window.innerWidth;
  }

  goToPoemPage(title: string | undefined) {
    this._router.navigate([`poem/${title}`]);
  }

}
