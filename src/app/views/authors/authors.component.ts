import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoetryService } from 'src/app/services/poetry.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  authors: any = localStorage.getItem('authors') ? JSON.parse(localStorage.getItem('authors') || '') : '';

  constructor(private _poetryService: PoetryService, private _router: Router) { }

  ngOnInit(): void {
    if (!(localStorage.getItem('authors'))) {
      this._poetryService.readAuthors().subscribe(data => {
        this.authors = data;
        localStorage.setItem('authors', JSON.stringify(this.authors));
      });
    }
  }

  openAuthorPage(author: string) {
    this._router.navigate([`authors/${author}`]);
  }

}
