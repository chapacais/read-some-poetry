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

  selectedPoemsForUser: Poem[] = [];

  constructor(private _poetryService: PoetryService, private _router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('selectedPoemsForUser') || !this.lessThanOneHourAgo(Date.now())) {
      this._poetryService.readRandomPoem(3).subscribe(data => {
        this.selectedPoemsForUser = data;
        console.log(this.selectedPoemsForUser);
        localStorage.setItem('selectedPoemsForUser', JSON.stringify(this.selectedPoemsForUser));
      })
    } else {
      this.selectedPoemsForUser = JSON.parse(localStorage.getItem('selectedPoemsForUser') || '[]');
      console.log(this.selectedPoemsForUser);
    }
    console.log(this.lessThanOneHourAgo(Date.now()))
  }

  getOneRandomPoem() {
    this._poetryService.readRandomPoem().subscribe(data => {
      this.selectedPoem = data[0];
      this._router.navigate([`/poem/${this.selectedPoem.title}`]);
    });
  }

  lessThanOneHourAgo(date: any) {
    const ONE_HOUR = 1000 * 60 * 60;
    const anHourAgo = Date.now() - ONE_HOUR;
    return date > anHourAgo;
  }

}
