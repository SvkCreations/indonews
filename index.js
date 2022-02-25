let url =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=a77edea2322b46139d15ed7a8c9e2c19";
let topNewsRow = document.getElementById("topNewsRow");
let desc = document.getElementById('desc');

let req = new Request(url);
fetch(req)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < 7; i++) {
      let title = data.articles[i].title;
      let urlToImage = data.articles[i].urlToImage;
      topNewsRow.innerHTML += `<div class="row mt-3">
         <div class="col-5">
             <img src="${urlToImage}" alt="" class="img-fluid">
         </div>
         <div class="col-7">
             <a href="newsDesc1.html?id=${i}" class="text-dark" style="text-decoration:none"><h6 class="fw-bold">${title}</h6></a>
         </div>
     </div>
     <hr>`;
    }
  });


  let generalNewsRow = document.getElementById('generalNewsRow');
  let generalUrl =
  "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a77edea2322b46139d15ed7a8c9e2c19";

  let genReq = new Request(generalUrl);
fetch(genReq)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < 5; i++) {
      let title = data.articles[i].title;
      let urlToImage = data.articles[i].urlToImage;
      generalNewsRow.innerHTML += `<div class="row mt-3">
         <div class="col-5">
             <img src="${urlToImage}" alt="" class="img-fluid">
         </div>
         <div class="col-7">
             <a href="newsDesc2.html?id=${i}" class="text-dark" style="text-decoration:none"><h6 class="fw-bold">${title}</h6></a>
         </div>
     </div>
     <hr>`;
    }
  });


  let entertainmentNewsRow = document.getElementById('entertainmentNewsRow');
  let entertainmentUrl =
  "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a77edea2322b46139d15ed7a8c9e2c19";

  let entertainmentReq = new Request(entertainmentUrl);
fetch(entertainmentReq)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < 4; i++) {
      let title = data.articles[i].title;
      let urlToImage = data.articles[i].urlToImage;
      entertainmentNewsRow.innerHTML += `<div class="row mt-3">
         <div class="col-5">
             <img src="${urlToImage}" alt="" class="img-fluid">
         </div>
         <div class="col-7">
             <a href="newsDesc3.html?id=${i}" class="text-dark" style="text-decoration:none"><h6 class="fw-bold">${title}</h6></a>
         </div>
     </div>
     <hr>`;
    }
  });
