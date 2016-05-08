import { EMAIL_REGEXP } from './consts';

export const $$ = (selector, context = document) => {
  const elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
};

export const $ = (selector, context = document) => {
  const element = context.querySelector(selector);
  return element;
};

export const exists = obj =>
  !!obj && (obj !== null || obj !== undefined || obj !== '');

export const isArray = obj =>
  exists(obj) && Array.isArray(obj);

export const isObject = obj =>
  exists(obj) && typeof obj === 'object';

export const isEmail = email =>
  exists(email) && EMAIL_REGEXP.test(email);

export const defer = (func, time = 0) =>
  setTimeout(()=>func(), time);

export const send = (url, method, data) => {
  const xhr = new XMLHttpRequest();
  const _e = encodeURIComponent;
  const isFormData = data instanceof FormData;
  let dataPairs = [];

  if (typeof data === 'object' && !isFormData) {
    for (let key in data) {
      dataPairs.push(_e(key) + '=' + _e(data[key]));
    }
    data = dataPairs.join('&').replace(/%20/g, '+');
  }

  const promise = new Promise((resolve, reject) => {
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.responseText);
        }
      }
    };
  });

  xhr.open(method, url);

  if (!isFormData) {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }

  xhr.send(data);

  return promise;
};

export const post = (url, data) => send(url, 'POST', data);
export const get = (url, data) => send(url, 'GET', data);