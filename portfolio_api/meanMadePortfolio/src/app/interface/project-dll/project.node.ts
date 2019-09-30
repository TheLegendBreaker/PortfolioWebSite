export class ProjectNode {
  // basic DLL set up
  previous?: ProjectNode;
  next?: ProjectNode;
  // this will help a met enter in new projects in a defined order;
  place: number;
  // populated by info from the db
  id: number;
  title: string;
  blurb: string[];
  image: string[];
  links: string[];

  constructor(
    place: number,
    id: number,
    title: string,
    blurb: string[],
    image: string[],
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
