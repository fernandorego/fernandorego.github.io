import { Banner, Command } from './elements.js';

window.onload = function afterWebPageLoad() { 
    let terminal : HTMLElement | null = document.getElementById("terminal");
    
    if (terminal != null) {
        terminal.appendChild(Banner.getBannerDiv());
        terminal.appendChild(Command.getCommandDiv());
    }
}