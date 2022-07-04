import { Banner } from './elements.js';

let banner = (new Banner()).getBanner();

window.onload = function afterWebPageLoad() { 
    console.log("entrei");
    document.getElementsByTagName('body')[0].appendChild(banner);
}