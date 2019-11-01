import { create } from 'mobx-persist'
import AsyncStorage from '@react-native-community/async-storage';
import NewsStore from './newsStore';
import BookmarkStore from './bookmarkStore';



const hydrate = create({
  storage: AsyncStorage,
  jsonify: true
})

export default class RootStore {

  newsStore = new NewsStore(this);
  bookmarkStore = new BookmarkStore(this);
  constructor() {
    hydrate('@news-app-bookmarks', this.bookmarkStore).then(() => console.log("bookmark store have been hydrated"))
  }
}