import { v4 as uuidv4 } from 'uuid';

class BookObj {
  constructor(title, author, category) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.id = uuidv4();
  }
}

export default BookObj;
