import { Banner } from './banner.js';
import { Command } from './command.js';

window.onload = function() { 
    let terminal : HTMLElement | null = document.getElementById("terminal");
    
    if (terminal != null) {
        terminal.appendChild(Banner.getBannerDiv());
        terminal.appendChild(Command.getCommandDiv());
    }
}