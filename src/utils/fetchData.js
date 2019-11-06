import { API_KEY } from 'react-native-dotenv'

export const getData = async (selectedCountry, rootStore) => {

  const endpoint = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=${API_KEY}`

  try {
    let response = await fetch(endpoint, {
      method: 'GET'
    }).then(res => res.json())
    await response.articles.map(article => {
      rootStore.newsStore.addArticle(article)
    })
  } catch (e) {
    console.log("error while fetching data", e)
  }

}