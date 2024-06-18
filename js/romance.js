let url = "https://reqres.in/api/users";
const content = document.querySelector(".recreate-9f");
const content2 = document.querySelector(".recreate-9g");
const content3 = document.querySelector(".recreate-9h");
const content4 = document.querySelector(".recreate-9i");
const content5 = document.querySelector(".recreate-9j");

url = "data.json";
const hitAPI = async (url) => {
  const api = await fetch(url);
  const data = await api.json();
  // console.log(data)
  return data;
};
var stylesheetElem = document.querySelector('head link[rel="stylesheet"]');

// TOP TRENDING

document.addEventListener("DOMContentLoaded", async () => {
  // Check if the screen width is greater than 1500px
  let screenWidth = window.innerWidth;
  let limit = screenWidth > 1500 ? 10 : 5;
  let url = `https://kitsu.io/api/edge/anime?filter[categories]=romance&page[limit]=20&page[offset]=0`;

  let data = await hitAPI(url);
  data = data.data;
  console.log(data);
  let teks = "";
  data.forEach((element) => {
    let attr = element.attributes;

    if (attr.titles.en === undefined) {
      teks += `
            <div class="inside-card" style="margin: 18px 13px 10px">
              <a>
                <img class="image-card" src="${attr.posterImage.small}" />
              </a>
              <div class="box">
                <a href="" class="name-9f">${attr.titles.en_jp}</a>
                <a href="" class="description-1">Check Detail</a><br />

                <a class="description-2"
                  >Rating: <span class="rating">${attr.averageRating}</span>
                </a>
              </div>
            </div>
      `;
    } else {
      teks += `
            <div class="inside-card" style="margin: 18px 13px 10px">
              <a href="">
                <img class="image-card" src="${attr.posterImage.small}" />
              </a>
              <div class="box">
                <a href="" class="name-9f">${attr.titles.en}</a>
                <a href="" class="description-1">Check Detail</a><br />

                <a class="description-2"
                  >Rating: <span class="rating">${attr.averageRating}</span>
                </a>
              </div>
            </div>
        `;
    }

    // teks += `

    // <div class="inside-card" style="margin: 18px 13px 10px">
    //   <a>
    //     <img class="image-card" src="${attr.posterImage.small}" />
    //   </a>
    //   <div class="box">
    //     <a class="name-9f">${attr.titles.en}</a>
    //     <a class="description-1">Check Detail</a><br />

    //     <a class="description-2"
    //       >Rating: <span class="rating">${attr.averageRating}</span>
    //     </a>
    //   </div>
    // </div>

    //     `;

    //* <a class="friend-text">  ${attr.synopsis}</a>
    //* <a> ${attr.ageRating}</a>
    // teks += `<img src="${attr.posterImage.small}"></li>`
    // teks += '</div>'

    // console.log(element.name)
  });

  // add responsive css if the resolution is > 1500px then call api limit 20

  content.innerHTML = teks;
});
document.addEventListener("DOMContentLoaded", async () => {
  // Check if the screen width is greater than 1500px
  let screenWidth = window.innerWidth;
  let limit = screenWidth > 1500 ? 10 : 5;
  let url = `https://kitsu.io/api/edge/anime?filter[categories]=romance&page[limit]=20&page[offset]=40`;

  let data = await hitAPI(url);
  data = data.data;
  console.log(data);
  let teks = "";
  data.forEach((element) => {
    let attr = element.attributes;

    if (attr.titles.en === undefined) {
      teks += `
            <div class="inside-card" style="margin: 18px 13px 10px">
              <a>
                <img class="image-card" src="${attr.posterImage.small}" />
              </a>
              <div class="box">
                <a href="" class="name-9f">${attr.titles.en_jp}</a>
                <a href="" class="description-1">Check Detail</a><br />

                <a class="description-2"
                  >Rating: <span class="rating">${attr.averageRating}</span>
                </a>
              </div>
            </div>
      `;
    } else {
      teks += `
            <div class="inside-card" style="margin: 18px 13px 10px">
              <a href="">
                <img class="image-card" src="${attr.posterImage.small}" />
              </a>
              <div class="box">
                <a href="" class="name-9f">${attr.titles.en}</a>
                <a href="" class="description-1">Check Detail</a><br />

                <a class="description-2"
                  >Rating: <span class="rating">${attr.averageRating}</span>
                </a>
              </div>
            </div>
        `;
    }
  });

  content2.innerHTML = teks;
});



document.addEventListener("DOMContentLoaded", async () => {
  // Check if the screen width is greater than 1500px
  let screenWidth = window.innerWidth;
  let limit = screenWidth > 1500 ? 10 : 5;
  let url = `https://kitsu.io/api/edge/anime?filter[categories]=romance&page[limit]=20&page[offset]=80`;

  let data = await hitAPI(url);
  data = data.data;
  console.log(data);
  let teks = "";
  data.forEach((element) => {
    let attr = element.attributes;

    if (attr.titles.en === undefined) {
      teks += `
            <div class="inside-card" style="margin: 18px 13px 10px">
              <a>
                <img class="image-card" src="${attr.posterImage.small}" />
              </a>
              <div class="box">
                <a href="" class="name-9f">${attr.titles.en_jp}</a>
                <a href="" class="description-1">Check Detail</a><br />

                <a class="description-2"
                  >Rating: <span class="rating">${attr.averageRating}</span>
                </a>
              </div>
            </div>
      `;
    } else {
      teks += `
            <div class="inside-card" style="margin: 18px 13px 10px">
              <a href="">
                <img class="image-card" src="${attr.posterImage.small}" />
              </a>
              <div class="box">
                <a href="" class="name-9f">${attr.titles.en}</a>
                <a href="" class="description-1">Check Detail</a><br />

                <a class="description-2"
                  >Rating: <span class="rating">${attr.averageRating}</span>
                </a>
              </div>
            </div>
        `;
    }
  });

  content3.innerHTML = teks;
});



document.addEventListener("DOMContentLoaded", async () => {
  // Check if the screen width is greater than 1500px
  let screenWidth = window.innerWidth;
  let limit = screenWidth > 1500 ? 10 : 5;
  let url = `https://kitsu.io/api/edge/anime?filter[categories]=romance&page[limit]=20&page[offset]=120`;

  let data = await hitAPI(url);
  data = data.data;
  console.log(data);
  let teks = "";
  data.forEach((element) => {
    let attr = element.attributes;

    if (attr.titles.en === undefined) {
      teks += `
            <div class="inside-card" style="margin: 18px 13px 10px">
              <a>
                <img class="image-card" src="${attr.posterImage.small}" />
              </a>
              <div class="box">
                <a href="" class="name-9f">${attr.titles.en_jp}</a>
                <a href="" class="description-1">Check Detail</a><br />

                <a class="description-2"
                  >Rating: <span class="rating">${attr.averageRating}</span>
                </a>
              </div>
            </div>
      `;
    } else {
      teks += `
            <div class="inside-card" style="margin: 18px 13px 10px">
              <a href="">
                <img class="image-card" src="${attr.posterImage.small}" />
              </a>
              <div class="box">
                <a href="" class="name-9f">${attr.titles.en}</a>
                <a href="" class="description-1">Check Detail</a><br />

                <a class="description-2"
                  >Rating: <span class="rating">${attr.averageRating}</span>
                </a>
              </div>
            </div>
        `;
    }
  });

  content4.innerHTML = teks;
});



document.addEventListener("DOMContentLoaded", async () => {
  // Check if the screen width is greater than 1500px
  let screenWidth = window.innerWidth;
  let limit = screenWidth > 1500 ? 10 : 5;
  let url = `https://kitsu.io/api/edge/anime?filter[categories]=romance&page[limit]=20&page[offset]=160`;

  let data = await hitAPI(url);
  data = data.data;
  console.log(data);
  let teks = "";
  data.forEach((element) => {
    let attr = element.attributes;

    if (attr.titles.en === undefined) {
      teks += `
            <div class="inside-card" style="margin: 18px 13px 10px">
              <a>
                <img class="image-card" src="${attr.posterImage.small}" />
              </a>
              <div class="box">
                <a href="" class="name-9f">${attr.titles.en_jp}</a>
                <a href="" class="description-1">Check Detail</a><br />

                <a class="description-2"
                  >Rating: <span class="rating">${attr.averageRating}</span>
                </a>
              </div>
            </div>
      `;
    } else {
      teks += `
            <div class="inside-card" style="margin: 18px 13px 10px">
              <a href="">
                <img class="image-card" src="${attr.posterImage.small}" />
              </a>
              <div class="box">
                <a href="" class="name-9f">${attr.titles.en}</a>
                <a href="" class="description-1">Check Detail</a><br />

                <a class="description-2"
                  >Rating: <span class="rating">${attr.averageRating}</span>
                </a>
              </div>
            </div>
        `;
    }
  });

  content5.innerHTML = teks;
});