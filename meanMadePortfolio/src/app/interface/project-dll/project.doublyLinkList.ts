import { ProjectNode } from './project.node';
import { ProjectsNode } from './projects.node';
export { ProjectNode } from './project.node';
export { ProjectsNode } from './projects.node';

export class ProjectsDLL {
  head: ProjectsNode;
  tail: ProjectsNode;

  constructor() {
    this.head = null;
    this.tail = null;
  }
  printAllTitles() {
    let current = this.head;
    let i = 0;
    while (i !== 3) {
      i++;
      console.log(current.place);
      current = current.next;
    }
  }
  // makes a new dll out of a list of projects
  // almost a second contructor.
  // MUST ONLY USE ON NEW LIST.
  populateNewList(projects: ProjectsNode[]): void {
    // projects place must match list index to ProjectNode.place
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
  projectPopulateList(project: ProjectNode): void {
    // projects place must match list index to ProjectNode.place
    let current = this.head;
    for (let i = 0; i < project.blurb.length; i++) {
      const node = new ProjectsNode(
        i,
        project.id,
        project.title,
        project.blurb[i],
        project.image[i],
        project.links
      );
      if (this.head === null) {
        this.head = node;
        current = this.head;
      } else {
        current.next = node;
        current.next.previous = current;
        current = current.next;
      }
    }
    this.tail = current;
    this.head.previous = this.tail;
    this.tail.next = this.head;
  }

  insertByPlace(project: ProjectsNode): void {
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

  getTheFirst(): ProjectsNode {
    return this.head;
  }
  getTheLast(): ProjectsNode {
    return this.tail;
  }

  private DummyProjs(): ProjectsNode[] {
    const projects: ProjectsNode[] = [];
    for (let i = 0; i < 4; i++) {
      const project: ProjectsNode = new ProjectsNode(
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

  DummyDLL(): ProjectsDLL {
    const dll = new ProjectsDLL();
    dll.populateNewList(this.DummyProjs());
    return dll;
  }
}
