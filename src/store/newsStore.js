import { observable } from 'mobx'
import RecentNews from './recentNews';

export default class NewsStore {
  @observable articles = []

  addArticle = (source, author, title, description, url, urlToImage, publishedAt, content) => {
    const recentNews = new RecentNews(source, author, title, description, url, urlToImage, publishedAt, content)
    this.articles.push(recentNews)
  }
}