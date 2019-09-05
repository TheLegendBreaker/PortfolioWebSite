import { ShowNode } from './project.node';
export { ShowNode } from './project.node';

export class ShowDLL {
  head: any;
  tail: any;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  printAllTitles() {
    let current = this.head;
    while (current != null) {
      console.log(current.title);
      current = current.next;
    }
  }
  // makes a new dll out of a list of projects
  // almost a second contructor.
  // MUST ONLY USE ON NEW LIST.
  populateNewList(projects: ShowNode[]): void {
    // projects place must match list index to ShowNode.place
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
  }

  insertByPlace(project: ShowNode): void {
    let current = this.head;

    while (current.next !== null) {
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

  deleteByPlace(place: number): void {
    let current = this.head;

    while (current.next !== null) {
      if (current.place === place) {
        current.next.previous = current.previous;
        const node = current.next;
        current.next = null;
        current.previous = null;
        current = node;
        current.place--;
        continue;
      } else if (current.place > place) {
        current.place--;
      }
      current = current.next;
    }
  }
  getTheFirst(): ShowNode {
    return this.head;
  }
  getTheLast(): ShowNode {
    return this.tail;
  }
}
