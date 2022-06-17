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

  selectedPoem: Poem = {};
  selectedPoemsForUser: Poem[] = [];

  userDate: number = 0;

  constructor(private _poetryService: PoetryService, private _router: Router) { }

  ngOnInit(): void {
    this.userDate = JSON.parse(localStorage.getItem('userDate') || '0') || Date.now();
    localStorage.setItem('userDate', JSON.stringify(this.userDate));
    if (!localStorage.getItem('selectedPoemsForUser') || !this.lessThanOneHourAgo(this.userDate)) {
      this.userDate = Date.now();
      localStorage.setItem('userDate', JSON.stringify(this.userDate));
      this._poetryService.readRandomPoem(3).subscribe(data => {
        this.selectedPoemsForUser = data;
        localStorage.setItem('selectedPoemsForUser', JSON.stringify(this.selectedPoemsForUser));
      })
    } else {
      this.selectedPoemsForUser = JSON.parse(localStorage.getItem('selectedPoemsForUser') || '[]');
    }
  }

  getOneRandomPoem() {
    this._poetryService.readRandomPoem().subscribe(data => {
      this.selectedPoem = data[0];
      this._router.navigate([`/poem/${this.selectedPoem.author}/${this.selectedPoem.title}`]);
    });
  }

  lessThanOneHourAgo(date: number) {
    const ONE_HOUR = 1000 * 60 * 60;
    const anHourAgo = Date.now() - ONE_HOUR;
    return date > anHourAgo;
  }

}
