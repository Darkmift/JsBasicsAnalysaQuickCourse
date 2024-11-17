const mainEl = document.getElementById('main');
console.log('🚀 ~ mainEl:', mainEl);

/***
 * 1. implement yesno api call
 * 2. if yes show dog
 * 3. if no show cat
 */

const xhr = new XMLHttpRequest();

// yes no api url
const yesNoUrl = 'https://yesno.wtf/api';
// cat api url
const catUrl = 'https://api.thecatapi.com/v1/images/search';
// dog api url
const dogUrl = 'https://api.thedogapi.com/v1/images/search';

// call yes no

// build request
xhr.open('GET', yesNoUrl);
xhr.responseType = 'json';
// send request
xhr.send();

xhr.onload = function () {
  console.info('🚀 ~ yes or no?:', xhr.response.answer);
  // yes no response yes true no false
  let yesNoResponse = xhr.response.answer === 'yes';

  // if yes dogurl else caturl
  const targetUrl = yesNoResponse ? dogUrl : catUrl;

  // call api
  const xhrImage = new XMLHttpRequest();
  xhrImage.open('GET', targetUrl);
  xhrImage.responseType = 'json';
  xhrImage.send();

  xhrImage.onload = function () {
    let result = xhrImage.response;
    console.info('🚀 ~ url?:', result[0].url);
    let imgUrl = result[0].url;
    mainEl.innerHTML = /*html*/ `
    <h1>${xhr.response.answer}</h1>
    <img src="${imgUrl}" alt="api image" />`;
  };
  xhrImage.onerror = function () {
    //??
  };
};
