//import cryptojs
import CryptoJS from 'crypto-js';
import { text } from 'svelte/internal';
import { writable } from 'svelte/store';
export let encrypted = writable('');
export let decrypted = writable('');
export function copytoClipboard(text) {
  navigator.clipboard.writeText(text);
  alert("Copied the text: " + text);
}
export const encrypt = (text) => {
  encrypted.set(CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text)));
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
};
export const decrypt = (data) => {
  decrypted.set(CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8));
  return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8)
};