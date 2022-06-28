//import cryptojs
import CryptoJS from 'crypto-js';
import { writable } from 'svelte/store';
export let encrypted = writable('');
export let decrypted = writable('');
export const encrypt = (text) => {
  encrypted.set(CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text)));
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
};
export const decrypt = (data) => {
  decrypted.set(CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8));
  return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8)
};