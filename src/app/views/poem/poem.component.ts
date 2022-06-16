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
    this._poetryService.readPoemByTitle(title).subscribe(data => {
      this.poem = data[0];
      localStorage.setItem('poemTitle', this.poem.title || '');
    });
  }

}
