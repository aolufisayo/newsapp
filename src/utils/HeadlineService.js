
export default class HeadlineService {

  getData = async (selectedCountry, API_KEY) => {
    const endpoint = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=${API_KEY}`
    const options = {
      method: "GET"
    }
    const response = await fetch(endpoint, options);
    const data = await response.json();
    return data;

  }
}

