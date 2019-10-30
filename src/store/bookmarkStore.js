import { observable } from 'mobx'
import { persist } from 'mobx-persist'

export default class BookmarkStore {
  @persist('list') @observable bookmarks = []

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