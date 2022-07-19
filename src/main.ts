import { Banner } from './banner.js';
import { Command } from './command.js';
import { KeyHandler } from './key_handler.js';

const terminal : HTMLElement = document.getElementById("terminal")!;
const textarea : HTMLElement = document.getElementById("textarea")!;

window.onload = function() { 
    if (terminal != null) {
        terminal.appendChild(Banner.getBannerDiv());
        terminal.appendChild(Command.getNewCommandDiv());
    }

    textarea.focus();
    document.addEventListener("click", function() { textarea.focus(); });
    
    textarea.addEventListener("keydown", keyDownHandler);
    //textarea.addEventListener("keyup", keyUpHandler);
}

function keyDownHandler(event:KeyboardEvent) {
    alert(event.key);
    switch (event.key) {
        case 'Enter':
            KeyHandler.enterHandler();
            terminal.appendChild(Command.getNewCommandDiv());

            terminal.scrollTop = terminal.scrollHeight;
            break;
        case 'Backspace':
            KeyHandler.backspaceHandler();
            break;
        case 'Delete':
            KeyHandler.deleteHandler();
            break;
        case 'ArrowLeft':
            KeyHandler.arrowLeftHandler();
            break;
        case 'ArrowRight':
            KeyHandler.arrowRightHandler();
            break;
        case 'ArrowUp':
            break;
        case 'ArrowDown':
            break;
        default :
            if (event.key.length === 1) { KeyHandler.letterHandler(event.key); }
    }
}

function keyUpHandler(event:KeyboardEvent) {
    
}
