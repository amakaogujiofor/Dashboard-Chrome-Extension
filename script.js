// Declarations
const time = document.getElementById("time-slot");
const author = document.getElementById("author");

// // Displays
// const mainTime = new Date();
// console.log(mainTime);

// time.innerHTML = mainTime;

// Unsplash API Details
fetch(
  " https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=technology"
)
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    console.log(data);
    author.textContent = `Image by ${data.user.name}
    from
    ${data.location.name}`;
  });

//   Crypto API details
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => console.log(data));
