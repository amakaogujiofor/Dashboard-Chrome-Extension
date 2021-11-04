// Declarations
const time = document.getElementById("time");
const author = document.getElementById("author");
const cryptoData = document.getElementById("crypto-top");
const quotes = document.getElementById("quote");

// // Displays
// const mainTime = new Date();
// console.log(mainTime);

// time.innerHTML = mainTime;

// Unsplash API Details
// Quotes API:
fetch("https://quotes.rest/qod?language=en")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    quotes.textContent = `${data.contents.quotes[0].quote}`;

    // UNSplash API
    fetch(
      " https://apis.scrimba.com/unsplash/photos/random?orientation=landscape"
    )
      .then((res) => res.json())
      .then((data) => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`;
        // console.log(data);
        author.textContent = `Image by ${data.user.name}
    from
    ${data.location.name}`;
      });

    //   Time Display
    function getCurrentTime() {
      const date = new Date();
      document.getElementById("time").textContent = date.toLocaleTimeString(
        "en-us",
        { timeStyle: "medium" }
      );
    }

    setInterval(getCurrentTime, 1000);
  });

// Weather API details
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
});

//   Crypto API details
// fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Something went wrong");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     cryptoData.innerHTML = `
//       <img src="${data.image.small}" </>
//       <span>${data.name}</span>`;

//     document.getElementById("crypto").innerHTML += `
//             <p>🎯: N${data.market_data.current_price.usd}</p>
//             <p>👆: N${data.market_data.high_24h.usd}</p>
//             <p>👇: N${data.market_data.low_24h.usd}</p>
//         `;
//   })
//   .catch((err) => console.error(err));
