import NewsStore from './newsStore';


export default class RootStore {

  newsStore = new NewsStore(this);
  constructor() {

  }
}