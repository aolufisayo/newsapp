
import NewsStore from './../../src/store/newsStore';

describe('News Store', () => {
  describe('constructor', () => {
    it('initializes an empty articles array', () => {
      const newsStore = new NewsStore()
      expect(newsStore.articles).toEqual([])
    })
  })
  describe('add articles', () => {
    it('adds new artcles to the store', () => {
      const article = {
        "source": {
          "id": null,
          "name": "Nature.com"
        },
        "author": null,
        "title": "Search-and-replace genome editing without double-strand breaks or donor DNA - Nature.com",
        "description": "Search-and-replace genome editing without double-strand breaks or donor DNA",
        "url": "https://www.nature.com/articles/s41586-019-1711-4",
        "urlToImage": "",
        "publishedAt": "2019-10-21T15:08:54Z",
        "content": "Most genetic variants that contribute to disease1 are challenging to correct efficiently and without excess byproducts25. Here we describe prime editing, a versatile and precise genome editing method that directly writes new genetic information into a specifi… [+1265 chars]"
      }
      const newsStore = new NewsStore()
      newsStore.addArticle(article)
      expect(newsStore.articles).toHaveLength(1)
    })
  })
})