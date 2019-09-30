'use strict';
class LandingNode {
  // this constructor's params will change once I figure out backend
  constructor(place, id, title, blurb, image, links) {
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
class LandingDLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  printAllTitles() {
    let current = this.head;
    console.log('print all triggerd', this.head);
    while (current != null) {
      console.log('here is the title', current.title);
      current = current.next;
    }
  }
  // makes a new dll out of a list of projects
  // almost a second contructor.
  // MUST ONLY USE ON NEW LIST.
  populateNewList(projects) {
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
  }
  insertByPlace(project) {
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
  deleteByPlace(place) {
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
  getTheFirst() {
    return this.head;
  }
  getTheLast() {
    return this.tail;
  }
}

// const dll = new LandingDLL();

function landingDummyProj() {
  const projects = [];
  for (let i = 0; i < 4; i++) {
    const project = new LandingNode(
      i,
      i,
      `PROJECT ${i}`,
      `this is the project. here is what I did.`,
      `image${i}`,
      [`link${i}`, `link${i + 1}`, `link${i + 2}`]
    );
    projects.push(project);
  }
  // console.log('here is the new node', projects);
  return projects;
}
function landingDummyDLL() {
  const dll = new LandingDLL();
  dll.populateNewList(landingDummyProj());
  return dll;
}
const dll = landingDummyDLL();
dll.printAllTitles();
