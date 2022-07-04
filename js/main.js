import { Banner, Command } from './elements.js';

let banner = (new Banner()).getBanner();
let command = (new Command()).getCommand();

window.onload = function afterWebPageLoad() { 
    document.getElementById("terminal").appendChild(banner);
    document.getElementById("terminal").appendChild(command);
}
