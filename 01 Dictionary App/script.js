const inputText = document.querySelector("input");
const container = document.querySelector(".container");
const infoText = document.querySelector(".info-text");
let synoymsList = document.querySelector(" .synoyms .list");
let antoymsList = document.querySelector(" .antonymus .list");
let links = document.querySelector(".source span");
let volume = document.querySelector(".word i");
let removeIcon = document.querySelector(".material-icons")
console.log(removeIcon)


// console.log(volume);
let audio;

// Sending data when clicking enter

inputText.addEventListener("keyup", (e) => {
  let word = e.target.value;
  // console.log(e);
  // console.log(word);
  if (e.key == "Enter" && word) {
    fetchApi(word);
  }
});

function fetchApi(word) {
  container.classList.remove("active");
  infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.title) {
          // console.log(data.title)
          infoText.innerHTML = `Unable to find the meaning of the word <span>"${word}"</span>. Please, Search for another word.`;
        } else {
          container.classList.add("active");
          document.querySelector(".word p").innerText = `Word  ${data[0].word}`;
          document.querySelector(
            ".word span"
          ).innerText = `noun ${data[0].phonetic}`;
          document.querySelector(
            ".meaning span"
          ).innerText = `${data[0].meanings[0].definitions[0].definition}`;
          let span = document.querySelector(".synoyms span");
          // Auido
          audio = new Audio(data[0].phonetics[0].audio);
          // console.log(audio);
          let synonyms = data[0].meanings[0].synonyms;

          if (data[0].meanings[0].synonyms[0] === undefined) {
            synoymsList.innerHTML = "NA";
          } else {
            synoymsList.innerHTML = "";
            for (let i = 0; i < synonyms.length; i++) {
              let tag = `<span>${synonyms[i]},</span>`;
              synoymsList.insertAdjacentHTML("beforeend", tag);
            }
          }

          let antonyms = data[0].meanings[0].antonyms;
          console.log(antonyms);

          if (data[0].meanings[0].antonyms[0] === undefined) {
            antoymsList.innerHTML = "NA";
          } else {
            antoymsList.innerHTML = "";
            for (let i = 0; i < antonyms.length; i++) {
              let tag = `<span>${antonyms[i]} ,</span>`;
              antoymsList.insertAdjacentHTML("beforeend", tag);
            }
          }

          links.innerHTML = `<a href="${data[0].sourceUrls[0]}" target="_blank">${data[0].sourceUrls[0]}</a>`;
        }
      });
  } catch (error) {}
}

//For volume button

volume.addEventListener("click", function(){
            volume.style.color = "red"
            audio.play()
             setTimeout(() => {
              volume.style.color = "gray"
            }, 800);
})

// Reset
removeIcon.addEventListener("click", function(){

  inputText.value = ""
  inputText.focus()
  container.classList.remove("active");
  infoText.innerHTML = "Type a word & click 'ENTER' to get the results.";

})