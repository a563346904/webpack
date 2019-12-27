import '@babel/polyfill';

console.log('index.js 111 ###');
import './index.scss';
import avatar from './avatar.jpg'

var img = new Image();
img.src = avatar;
img.classList.add('avatar');

document.getElementById('root').appendChild(img);
var a = new Promise();