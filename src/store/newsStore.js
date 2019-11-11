import { observable } from 'mobx'
import RecentNews from './recentNews';
import { API_KEY } from 'react-native-dotenv'
import HeadlineService from '../utils/HeadlineService'

export default class NewsStore {
  @observable articles = []
  @observable selectedCountry = 'gb'
  @observable refreshing = false

  constructor(rootStore) {
    this.rootStore = rootStore
    this.headlineService = new HeadlineService();
  }

  addArticle = (articles) => {
    const recentNews = new RecentNews(articles.source, articles.author, articles.title, articles.description, articles.url, articles.urlToImage, articles.publishedAt, articles.content)
    this.articles.unshift(recentNews)
  }

  chooseCountry = (country) => {
    this.selectedCountry = country
  }

  fetchHeadlines = async () => {
    this.refreshing = true;
    try {
      const data = await this.headlineService.getData(this.selectedCountry, API_KEY);
      await data.articles.map(article => {
        this.addArticle(article)
      })

    } catch (error) {

    }
    this.refreshing = false;
  }

}