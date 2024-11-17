const mainEl = document.getElementById('main');
const loaderEl = document.getElementById('loading');
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

async function getYesNo() {
  // yes no api url
  const yesNoUrl = 'https://yesno.wtf/api';
  const response = await fetch(yesNoUrl);
  const data = await response.json();
  return data.answer === 'yes';
}

async function getCatOrDogImg(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data[0].url;
}

async function fetchChain() {
  // show loader
  loaderEl.style.display = 'block';

  try {
    // get dog or cat img
    let yesNoResponse = await getYesNo();
    const targetUrl = yesNoResponse ? dogUrl : catUrl;
    // call api
    let imgUrl = await getCatOrDogImg(targetUrl);
    mainEl.innerHTML = /*html*/ `
    <h1>${yesNoResponse ? 'yes' : 'no'}</h1>
    <img width="300" height="300" src="${imgUrl}" alt="api image" />`;
  } catch (error) {
    mainEl.innerHTML = /*html*/ `something went wrong`;
  } finally {
    // hide loader
    loaderEl.style.display = 'none';
  }
}

fetchChain();
