import NewsStore from './newsStore';
import BookmarkStore from './bookmarkStore';
export default class RootStore {
  constructor() {
    this.newsStore = new NewsStore(this);
    this.bookmarkStore = new BookmarkStore(this);
  }
}