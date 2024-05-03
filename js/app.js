const btnShortURL = document.querySelector("#btn-shorter");
const inputLink = document.querySelector("#input-link");
const urlToCopy = document.querySelector("#url-to-copy");
const urlDiv = document.querySelector(".url");
const btnCopy = document.querySelector("#btn-copy");
const divNavMobile = document.querySelector("#div-nav-mobile");
const buttonMobile = document.querySelector("#menu-mobile");

// APIKEY

const apiKey = "sk_39da64eb09524188b348ff8e9114c30e";

btnShortURL.addEventListener("click", () => {
  const value = inputLink.value;

  if (value) {
    // Use of API
    const inputBody = { url: `${value}`, expiry: "5m" };
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": apiKey,
    };

    fetch("https://api.manyapis.com/v1-create-short-url", {
      method: "POST",
      body: JSON.stringify(inputBody),
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        const shortUrl = data.shortUrl;

        if (shortUrl == undefined) {
          return alert("Invalid URL");
        } else {
          urlDiv.classList.remove("hidden");
          urlToCopy.innerHTML = shortUrl;
        }
      })
      .catch((error) => {
        // Manejar errores
        console.error("Error al acortar la URL:", error);
      });
  } else return false;
});

btnCopy.addEventListener("click", () => {
  alert("URL copiada");
});

buttonMobile.addEventListener("click", () => {
  if (divNavMobile.style.display == "block") {
    divNavMobile.style.display = "none";
  } else {
    divNavMobile.style.display = "block";
  }
});
