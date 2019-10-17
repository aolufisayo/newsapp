import { observable } from 'mobx'
import RecentNews from './recentNews';

export default class NewsStore {
  @observable articles = []

  addArticle = (articles) => {
    const recentNews = new RecentNews(articles.source, articles.author, articles.title, articles.description, articles.url, articles.urlToImage, articles.publishedAt, articles.content)
    this.articles.push(recentNews)
  }
}