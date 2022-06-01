//Variable declaration


// 1. Fetch Api's for news and crypto
// Create/link buttons to search for various topics based on user input (Include click and enter key as submission types)
// Grab images/graphs from crypto api to display fluctuating prices for the coin
// Use local storage to save the past couple of searches from user input 
// display the previous 5 listed searches


// "coinAPIKey": "82f8a3f8adcf8fa7192f7ff08c83b12b"


let news = {

  "newsAPIKey": "3ca99191912f4d4cb2438c4ac19e4cb1",
  "cryptoApIKey": "d3452b84f4f7a2a7943c8ce004285656",

  // // q = search for specific wording, from= will dicatate the time frame to search sortby=(relevancy, popularity, publishedAt),
  // Reference this newsAPI documentation for different search parameters https://newsapi.org/docs/endpoints/everything
  fetchNews: function (term) {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://newsapi.org/v2/everything?q=' + term + '&sortBy=popularity&pageSize=5&apiKey=' + this.newsAPIKey)}`)
      .then(r => r.json())
      .then(data => {
        // the actual data from the api
        var newsContent = JSON.parse(data.contents)
        console.log(newsContent)

        const { name } = newsContent.articles[0].source
        const { author, title, url, content } = newsContent.articles[0]

        document.getElementById("articleTitle").innerText = "Title: " + title + ""
        document.getElementById("newsSource").innerText = "Published by: " + name + ""
        document.getElementById("authorSource").innerText = "Author: " + author + ""
        document.getElementById("description").innerText = "Article information: " + content + ""
        document.getElementById('url').innerHTML = url



      })
  },
  // function to search for crypto data.
  // End point are the search parameters passed in the URL for specific articles/information
  // https://coinlayer.com/documentation
  fetchCrypto: function () {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('http://api.coinlayer.com/api/live?access_key=d3452b84f4f7a2a7943c8ce004285656')}`)
      .then(response => {
        if (response.ok) return response.json()
        throw new Error('Network response was not ok.')
      })
      // Actual data from api
      .then(data => {
        var cryptoData = JSON.parse(data.contents)
        console.log(cryptoData)
      })

  }
}


  // fetch data from cryptoapi


