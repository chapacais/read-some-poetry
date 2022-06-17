import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poem } from 'src/app/models/Poem';
import { PoetryService } from 'src/app/services/poetry.service';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.scss']
})
export class PoemComponent implements OnInit {

  poem: Poem = {};

  constructor(private _poetryService: PoetryService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const title = this._route.snapshot.paramMap.get('title');
    const author = this._route.snapshot.paramMap.get('author');
    if (!localStorage.getItem('poem') || JSON.parse(localStorage.getItem('poem') || '').title !== title) {
        this._poetryService.readPoemByAuthor(author, title).subscribe(data => {
          this.poem = data[0];
          localStorage.setItem('poem', JSON.stringify(this.poem));
          localStorage.setItem('poemTitle', this.poem.title || '');
          localStorage.setItem('poemAuthor', this.poem.author || '');
        })
    } else {
      this.poem = JSON.parse(localStorage.getItem('poem') || '');
    }
  }

}
