import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poem } from 'src/app/models/Poem';
import { PoetryService } from 'src/app/services/poetry.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedPoem: Poem = {
    title: '',
    author: '',
    lines: [],
    linecount: ''
  }

  constructor(private _poetryService: PoetryService, private _router: Router) { }

  ngOnInit(): void {
  }

  getRandomPoem() {
    this._poetryService.readRandomPoem().subscribe(data => {
      this.selectedPoem = data[0];
      this._router.navigate([`/poem/${this.selectedPoem.title}`]);
    });
  }

}
