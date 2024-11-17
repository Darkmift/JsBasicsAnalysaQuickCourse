const mainEl = document.getElementById('main');
console.log('🚀 ~ mainEl:', mainEl);

/***
 * 1. implement yesno api call
 * 2. if yes show dog
 * 3. if no show cat
 */

const xhr = new XMLHttpRequest();

// cat api url
const catUrl = 'https://api.thecatapi.com/v1/images/search';
// dog api url
const dogUrl = 'https://api.thedogapi.com/v1/images/search';

// yes no api url
const yesNoUrl = 'https://yesno.wtf/api';

fetch(yesNoUrl)
  .then((yesNoResponse) => yesNoResponse.json())
  .then((yesNoData) => {
    console.log('🚀 ~ fetch ~ data:', yesNoData);
    // get dog or cat img
    let yesNoResponse = yesNoData.answer === 'yes';
    const targetUrl = yesNoResponse ? dogUrl : catUrl;
    fetch(targetUrl)
      .then((catOrDogImgResponse) => catOrDogImgResponse.json())
      .then((data) => {
        console.log('🚀 ~ fetch ~ data:', data);
        let imgUrl = data[0].url;
        mainEl.innerHTML = /*html*/ `
        <h1>${yesNoData.answer}</h1>
        <img src="${imgUrl}" alt="api image" />`;
      });
  });
