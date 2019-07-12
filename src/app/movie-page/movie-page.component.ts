import { Component, OnInit } from '@angular/core';
import { MovieDetail } from '../shared/movieDetail.model';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movie: MovieDetail[] = [
    new MovieDetail('Iron Man' ,'https://us.123rf.com/450wm/asmati/asmati1702/asmati170211183/72687801-sound-waves-icon-black-icon-with-flat-style-shadow-path-on-yellow-background-.jpg?ver=6', 'Iron Man is a 2008 superhero film based on the Marvel Comics superhero of the same name. It is the first installment in the Marvel Cinematic Universe and the first installment of Phase One', 'http://www.example.com/waterfall-video.ogv')
    ];
  constructor() { }

  ngOnInit() {
  }

}
