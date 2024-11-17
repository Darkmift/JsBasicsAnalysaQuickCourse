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

async function getYesNo() {
  const response = await fetch(yesNoUrl);
  const data = await response.json();
  return data;
}

async function getCatOrDogImg(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchChain() {

  const yesNo = await fetch(yesNoUrl);
  const yesNoData = await yesNo.json();
  console.log('🚀 ~ fetch ~ data:', yesNoData);

  // get dog or cat img
  let yesNoResponse = yesNoData.answer === 'yes';
  const targetUrl = yesNoResponse ? dogUrl : catUrl;

  // call api
  const catOrDogImgResponse = await fetch(targetUrl);
  const data = await catOrDogImgResponse.json();
  console.log('🚀 ~ fetch ~ data:', data);

  let imgUrl = data[0].url;
  mainEl.innerHTML = /*html*/ `
  <h1>${yesNoData.answer}</h1>
  <img src="${imgUrl}" alt="api image" />`;

}

fetchChain();
