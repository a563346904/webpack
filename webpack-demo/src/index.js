console.log('index.js');
import './index.scss';
import avatar from './avatar.jpg'

var img = new Image();
img.src = avatar;
img.classList.add('avatar');

document.getElementById('root').appendChild(img);