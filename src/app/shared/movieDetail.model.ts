export class MovieDetail {
  public title: string;
  public poster: string;
  public description: string;
  public link: string;
 constructor(title: string, poster: string, description: string, link: string) {
   this.title = title;
   this.poster = poster;
   this.description = description;
   this.link = link;
 }
}
