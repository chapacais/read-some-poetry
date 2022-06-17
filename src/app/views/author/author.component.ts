import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poem } from 'src/app/models/Poem';
import { PoetryService } from 'src/app/services/poetry.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  poems: Poem[] = [];
  authorName: string = ''

  constructor(private _poetryService: PoetryService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authorName = this._route.snapshot.paramMap.get('author') || '';
    this._poetryService.readAuthors(this.authorName).subscribe(data => {
      this.poems = data;
      console.log(data);
      console.log(this.poems)
    })
  }

}
