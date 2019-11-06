import { observable } from 'mobx'
import { persist } from 'mobx-persist'

export default class BookmarkStore {
  @persist('list') @observable bookmarks = []

  constructor(rootStore) {
    this.rootStore = rootStore
  }
  addBookmark = (item) => {
    if (this.bookmarks.includes(item)) {
      return;
    } else {
      this.bookmarks.push(item)
    }
  }

  getBookmarks = () => {
    return this.bookmarks;
  }

  removeBookmark = (bookmarkedArticle) => {
    this.bookmarks.filter(article => article.title !== bookmarkedArticle.title)
  }
}