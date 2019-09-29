import { LandingNode } from './project.node';
export { LandingNode } from './project.node';

export class LandingDLL {
  head: any;
  tail: any;

  constructor() {
    this.head = null;
    this.tail = null;
  }
  printAllTitles() {
    let current = this.head;
    while (current != null) {
      console.log(current.titled);
      current = current.next;
    }
  }
  // makes a new dll out of a list of projects
  // almost a second contructor.
  // MUST ONLY USE ON NEW LIST.
  populateNewList(projects: LandingNode[]): void {
    // projects place must match list index to LandingNode.place
    let current = this.head;
    for (const project of projects) {
      if (this.head === null) {
        this.head = project;
        current = this.head;
        continue;
      }
      current.next = project;
      current.next.previous = current;
      current = current.next;
    }
    this.tail = current;
    this.head.previous = this.tail;
    this.tail.next = this.head;
  }

  insertByPlace(project: LandingNode): void {
    let current = this.head;

    while (current.next !== this.head) {
      // check if at the right place in list
      if (current.place === project.place) {
        // grab old references
        const previous = current.previous;

        current.previous = project;
        project.next = current;

        project.previous = previous;
        previous.next = project;

        current.place++;
      } else if (current.place > project.place) {
        current.place++;
      }
      current = current.next;
    }
  }

  getTheFirst(): LandingNode {
    return this.head;
  }
  getTheLast(): LandingNode {
    return this.tail;
  }

  private DummyProjs(): LandingNode[] {
    const projects: LandingNode[] = [];
    for (let i = 0; i < 4; i++) {
      const project: LandingNode = new LandingNode(
        i,
        i,
        `PROJECT ${i}`,
        `this is the project. here's what I did.`,
        `image${i}`,
        [`link${i}`, `link${i + 1}`, `link${i + 2}`]
      );

      projects.push(project);
    }
    return projects;
  }

  DummyDLL(): LandingDLL {
    const dll = new LandingDLL();
    dll.populateNewList(this.DummyProjs());
    return dll;
  }
}
