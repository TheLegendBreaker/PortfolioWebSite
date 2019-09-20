export class LandingNode {
  // basic DLL set up
  previous: any;
  next: any;
  // this will help a met enter in new projects in a defined order;
  place: number;
  // populated by info from the db
  id: number;
  title: string;
  blurb: string;
  image: string;
  links: string[];
  // this constructor's params will change once I figure out backend
  constructor(
    place: number,
    id: number,
    title: string,
    blurb: string,
    image: string,
    links: string[]
  ) {
    this.previous = null;
    this.next = null;

    this.place = place;

    this.id = id;
    this.title = title;
    this.blurb = blurb;
    this.image = image;
    this.links = links;
  }
}
