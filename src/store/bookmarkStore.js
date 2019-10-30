import { observable } from 'mobx'

export default class BookmarkStore {
  @observable bookmarks = []

  constructor(rootStore) {
    this.rootStore = rootStore
  }
  addBookmark = (item) => {
    this.bookmarks.push(item)
  }

  getBookmarks = () => {
    return this.bookmarks;
  }
}