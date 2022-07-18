import { Banner } from './banner.js';
import { Command } from './command.js';
import { Handler } from './handler.js';

window.onload = function() { 
    let terminal : HTMLElement | null = document.getElementById("terminal");
    
    if (terminal != null) {
        terminal.appendChild(Banner.getBannerDiv());
        terminal.appendChild(Command.getCommandDiv());
    }

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
}

function keyDownHandler(event:KeyboardEvent) {
    console.log(event.key)
    switch (event.key) {
        case 'Enter':
            break;
        case 'Backspace':
            break;
        case 'Delete':
            break;
        case 'ArrowLeft':
            break;
        case 'ArrowRight':
            break;
        case 'ArrowUp':
            break;
        case 'ArrowDown':
            break;
        default :
            if (event.key.length === 1) { Handler.letterHandler(event.key); }
    }
}

function keyUpHandler(event:KeyboardEvent) {
    
}
