let url = "https://reqres.in/api/users";
const content = document.querySelector(".content-1");
const content2 = document.querySelector(".content-2");
const content3 = document.querySelector(".content-3");

const more = document.querySelector(".more-1")
const more2 = document.querySelector(".more-2")
const more3 = document.querySelector(".more-3")
const moreLoader = document.querySelector(".more-loading")
const moreLoader2 = document.querySelector(".more-loading-2")
const moreLoader3 = document.querySelector(".more-loading-3")

const topTrending = document.querySelector(".top-trending")
const animeCategoryTop = document.querySelector(".anime-category")
const romance = document.querySelector(".romance")
const fantasy = document.querySelector(".fantasy")

const topTitles = document.querySelector(".first");
const filterBtn = document.querySelector(".filterBtn")
const filterContent = document.querySelector(".filter")

filterBtn.addEventListener('click', () => {
    filterContent.style.display = filterContent.style.display === 'block' ? 'none' : 'block';
})

// scroll to yop
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// show when scroll
window.onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition > 20) {
        document.getElementById("scroll").style.display = "block";
    } else {
        document.getElementById("scroll").style.display = "none";
    }
};


// document.addEventListener("DOMContentLoaded", () => {
//   html += `

//   `;

//   nav.innerHTML = html;
// });

url = "data.json";
const hitAPI = async (url) => {
    const api = await fetch(url);
    const data = await api.json();
    // console.log(data)
    return data;
};


document.addEventListener("DOMContentLoaded", async () => {
    // hceck if the screen width is greater(>) than 1500px
    // let limit = screenWidth > 1500 ? 10 : 5;

    let url = `https://kitsu.io/api/edge/trending/anime`;

    let data = await hitAPI(url);
    data = data.data;
    console.log(data);
    let teks = "";
    data.forEach((element) => {
        let attr = element.attributes;

        if (attr.titles.en === undefined) {
            teks += `

                        <div class="inside-card">
                            <a href="">
                                <img class="image-card" src="${attr.posterImage.small}" />
                            </a>
                            <div class="box">
                                <a href="" class="name">${attr.titles.en_jp}</a>
                                <a class="rank">Rating Rank : <span class="rank-value">${attr.ratingRank}</span></a><br />

                                <a class="rating">Rating: <span class="rating-value">${attr.averageRating}</span>
                                </a>
                            </div>
                        </div>
      `;
        } else {
            teks += `

                        <div class="inside-card">
                            <a href="">
                                <img class="image-card" src="${attr.posterImage.small}" />
                            </a>
                            <div class="box">
                                <a href="" class="name">${attr.titles.en}</a>
                                <a class="rank">Rating Rank : <span class="rank-value">${attr.ratingRank}</span></a><br />

                                <a class="rating">Rating: <span class="rating-value">${attr.averageRating}</span>
                                </a>
                            </div>
                        </div>
        `;
        }



        content.innerHTML = teks;
    })
});

document.addEventListener("DOMContentLoaded", async () => {
    // hceck if the screen width is greater(>) than 1500px
    let screenWidth = window.innerWidth;
    let limit = screenWidth > 700 ? 8 : 4;

    let url = `https://kitsu.io/api/edge/anime?filter[status]=upcoming&page[limit]=${limit}`;

    let data = await hitAPI(url);
    data = data.data;
    console.log(data);
    let teks = "";
    data.forEach((element) => {
        let attr = element.attributes;

        if (attr.ratingRank === null && attr.averageRating == null) {
            teks += `

                        <div class="inside-card">
                            <a href="">
                                <img class="image-card" src="${attr.posterImage.small}" />
                            </a>
                            <div class="box">
                                <a href="" class="name">${attr.titles.en_jp}</a>
                                <a class="rank">Rank : <span class="rank-value">Coming Soon</span></a><br />

                                <a class="rating">Rating: <span class="rating-value">Coming Soon</span>
                                </a>
                            </div>
                        </div>
      `;
        } else {
            teks += `

                        <div class="inside-card">
                            <a href="">
                                <img class="image-card" src="${attr.posterImage.small}" />
                            </a>
                            <div class="box">
                                <a href="" class="name">${attr.titles.en}</a>
                                <a class="rank">Rating Rank : <span class="rank-value">${attr.ratingRank}</span></a><br />

                                <a class="rating">Rating: <span class="rating-value">${attr.averageRating}</span>
                                </a>
                            </div>
                        </div>
        `;
        }

        content2.innerHTML = teks;
    })
});
document.addEventListener("DOMContentLoaded", async () => {
    let screenWidth = window.innerWidth;
    let limit = screenWidth > 700 ? 8 : 4;
    let url = `https://kitsu.io/api/edge/anime?filter[status]=current&page[limit]=${limit}`;

    let data = await hitAPI(url);
    data = data.data;
    console.log(data);
    let teks = "";
    data.forEach((element) => {
        let attr = element.attributes;

        if (attr.titles.en === undefined) {
            teks += `

                        <div class="inside-card">
                            <a href="">
                                <img class="image-card" src="${attr.posterImage.small}" />
                            </a>
                            <div class="box">
                                <a href="" class="name">${attr.titles.en_jp}</a>
                                <a class="rank">Rating Rank : <span class="rank-value">${attr.ratingRank}</span></a><br />

                                <a class="rating">Rating: <span class="rating-value">${attr.averageRating}</span>
                                </a>
                            </div>
                        </div>
      `;
        } else {
            teks += `

                        <div class="inside-card">
                            <a href="">
                                <img class="image-card" src="${attr.posterImage.small}" />
                            </a>
                            <div class="box">
                                <a href="" class="name">${attr.titles.en}</a>
                                <a class="rank">Rating Rank : <span class="rank-value">${attr.ratingRank}</span></a><br />

                                <a class="rating">Rating: <span class="rating-value">${attr.averageRating}</span>
                                </a>
                            </div>
                        </div>
        `;
        }

        content3.innerHTML = teks;
    })
});


// top content "more"

// ulang/script.js
more.addEventListener('click', async () => {

    moreLoader.innerHTML = '<div class="loading-2"><div></div><div></div><div></div></div>';
    animeCategoryTop.innerHTML = `<p class="genre anime-category">Top Trending</p>`

    let url1 = `https://kitsu.io/api/edge/anime?sort=-averageRating&page[limit]=20`;
    let url2 = `https://kitsu.io/api/edge/anime?sort=-averageRating&page[limit]=20&page[offset]=20`;
    let url3 = `https://kitsu.io/api/edge/anime?sort=-averageRating&page[limit]=20&page[offset]=40`;

    try {
        let responses = await Promise.all([hitAPI(url1), hitAPI(url2), hitAPI(url3)]);
        let data1 = responses[0].data;
        let data2 = responses[1].data;
        let data3 = responses[2].data;

        let combinedData = [...data1, ...data2, ...data3];
        console.log(combinedData);

        let teks = "";
        combinedData.forEach((element) => {
            let attr = element.attributes;

            teks += `
                <div class="inside-card">
                    <a href="">
                        <img class="image-card" src="${attr.posterImage.small}" />
                    </a>
                    <div class="box">
                        <a href="" class="name">${attr.titles.en_jp}</a>
                        <a class="rank">Rating Rank : <span class="rank-value">${attr.ratingRank}</span></a><br />
                        <a class="rating">Rating: <span class="rating-value">${attr.averageRating}</span></a>
                    </div>
                </div>
            `;
        });

        content.innerHTML = teks;
    } catch (error) {
        console.error('Failed to fetch data:', error);
    } finally {
        moreLoader.innerHTML = '';
        animeCategoryTop.innerHTML = `<p class="genre anime-category">Top Trending</p>`
    }
});

more2.addEventListener('click', async () => {

    moreLoader2.innerHTML = '<div class="loading-2"><div></div><div></div><div></div></div>';


    let url1 = `https://kitsu.io/api/edge/anime?filter[status]=upcoming&page[limit]=20`;
    let url2 = `https://kitsu.io/api/edge/anime?filter[status]=upcoming&page[limit]=20&page[offset]=20`;
    let url3 = `https://kitsu.io/api/edge/anime?filter[status]=upcoming&page[limit]=20&page[offset]=40`;

    try {
        let responses = await Promise.all([hitAPI(url1), hitAPI(url2), hitAPI(url3)]);
        let data1 = responses[0].data;
        let data2 = responses[1].data;
        let data3 = responses[2].data;

        let combinedData = [...data1, ...data2, ...data3];
        console.log(combinedData);

        let teks = "";
        combinedData.forEach((element) => {
            let attr = element.attributes;

            teks += `
                        <div class="inside-card">
                            <a href="">
                                <img class="image-card" src="${attr.posterImage.small}" />
                            </a>
                            <div class="box">
                                <a href="" class="name">${attr.titles.en_jp}</a>
                                <a class="rank">Rank : <span class="rank-value">Coming Soon</span></a><br />

                                <a class="rating">Rating: <span class="rating-value">Coming Soon</span>
                                </a>
                            </div>
                        </div>
            `;
        });

        content2.innerHTML = teks;
    } catch (error) {
        console.error('Failed to fetch data:', error);
    } finally {
        moreLoader2.innerHTML = '';

    }
});

more3.addEventListener('click', async () => {

    moreLoader3.innerHTML = '<div class="loading-2"><div></div><div></div><div></div></div>';


    let url1 = `https://kitsu.io/api/edge/anime?filter[status]=current&page[limit]=20`;
    let url2 = `https://kitsu.io/api/edge/anime?filter[status]=current&page[limit]=20[offset]=20`;
    let url3 = `https://kitsu.io/api/edge/anime?filter[status]=current&page[limit]=20[offset]=40`;

    try {
        let responses = await Promise.all([hitAPI(url1), hitAPI(url2), hitAPI(url3)]);
        let data1 = responses[0].data;
        let data2 = responses[1].data;
        let data3 = responses[2].data;

        let combinedData = [...data1, ...data2, ...data3];
        console.log(combinedData);

        let teks = "";
        combinedData.forEach((element) => {
            let attr = element.attributes;

            teks += `
                <div class="inside-card">
                    <a href="">
                        <img class="image-card" src="${attr.posterImage.small}" />
                    </a>
                    <div class="box">
                        <a href="" class="name">${attr.titles.en_jp}</a>
                        <a class="rank">Rating Rank : <span class="rank-value">${attr.ratingRank}</span></a><br />
                        <a class="rating">Rating: <span class="rating-value">${attr.averageRating}</span></a>
                    </div>
                </div>
            `;
        });

        content3.innerHTML = teks;
    } catch (error) {
        console.error('Failed to fetch data:', error);
    } finally {
        moreLoader3.innerHTML = '';
    }
});



// from genre


romance.addEventListener('click', async () => {

    moreLoader.innerHTML = '<div class="loading-2"><div></div><div></div><div></div></div>';



    let url1 = `https://kitsu.io/api/edge/anime?filter[categories]=romance&page[limit]=20`;
    let url2 = `https://kitsu.io/api/edge/anime?filter[categories]=romance&page[limit]=20[offset]=20`;
    let url3 = `https://kitsu.io/api/edge/anime?filter[categories]=romance&page[limit]=20[offset]=40`;

    try {
        let responses = await Promise.all([hitAPI(url1), hitAPI(url2), hitAPI(url3)]);
        let data1 = responses[0].data;
        let data2 = responses[1].data;
        let data3 = responses[2].data;

        let combinedData = [...data1, ...data2, ...data3];
        console.log(combinedData);

        let teks = "";
        combinedData.forEach((element) => {
            let attr = element.attributes;

            teks += `
                <div class="inside-card">
                    <a href="">
                        <img class="image-card" src="${attr.posterImage.small}" />
                    </a>
                    <div class="box">
                        <a href="" class="name">${attr.titles.en_jp}</a>
                        <a class="rank">Rating Rank : <span class="rank-value">${attr.ratingRank}</span></a><br />
                        <a class="rating">Rating: <span class="rating-value">${attr.averageRating}</span></a>
                    </div>
                </div>
            `;
        });

        content.innerHTML = teks;
    } catch (error) {
        console.error('Failed to fetch data:', error);
    } finally {
        moreLoader.innerHTML = '';
        animeCategoryTop.innerHTML = `<p class="genre anime-category">Romance</p>`
    }
});

fantasy.addEventListener('click', async () => {

    moreLoader.innerHTML = '<div class="loading-2"><div></div><div></div><div></div></div>';



    let url1 = `https://kitsu.io/api/edge/anime?filter[categories]=fantasy&page[limit]=20`;
    let url2 = `https://kitsu.io/api/edge/anime?filter[categories]=fantasy&page[limit]=20[offset]=20`;
    let url3 = `https://kitsu.io/api/edge/anime?filter[categories]=fantasy&page[limit]=20[offset]=40`;

    try {
        let responses = await Promise.all([hitAPI(url1), hitAPI(url2), hitAPI(url3)]);
        let data1 = responses[0].data;
        let data2 = responses[1].data;
        let data3 = responses[2].data;

        let combinedData = [...data1, ...data2, ...data3];
        console.log(combinedData);

        let teks = "";
        combinedData.forEach((element) => {
            let attr = element.attributes;

            teks += `
                <div class="inside-card">
                    <a href="">
                        <img class="image-card" src="${attr.posterImage.small}" />
                    </a>
                    <div class="box">
                        <a href="" class="name">${attr.titles.en_jp}</a>
                        <a class="rank">Rating Rank : <span class="rank-value">${attr.ratingRank}</span></a><br />
                        <a class="rating">Rating: <span class="rating-value">${attr.averageRating}</span></a>
                    </div>
                </div>
            `;
        });

        content.innerHTML = teks;
    } catch (error) {
        console.error('Failed to fetch data:', error);
    } finally {
        moreLoader.innerHTML = '';
        animeCategoryTop.innerHTML = `<p class="genre anime-category">Fantasy</p>`
    }
});