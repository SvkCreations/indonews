let url =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=a77edea2322b46139d15ed7a8c9e2c19";
let desc = document.getElementById('desc');

const urlParams = new URLSearchParams(location.search);

for (const [key, value] of urlParams) {
    id = value;
}

let req = new Request(url);
fetch(req)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
      let title = data.articles[id].title;
      let urlToImage = data.articles[id].urlToImage;
      let author = data.articles[id].author;
      let description = data.articles[id].description;
      let url = data.articles[id].url;
      desc.innerHTML += `<img src="${urlToImage}" alt="" class="img-fluid">
      <h4 class="fw-bold pt-2">${title}</h4>
      <p class="text-muted">Author : ${author}</p>
      <p class="lead">${description} <a href="${url}">Read full news</p>`;
  });


