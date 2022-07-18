import { Banner } from './banner.js';
import { Command } from './command.js';
import { KeyHandler } from './key_handler.js';
const terminal = document.getElementById("terminal");
window.onload = function () {
    //let terminal : HTMLElement | null = document.getElementById("terminal");
    if (terminal != null) {
        terminal.appendChild(Banner.getBannerDiv());
        terminal.appendChild(Command.getNewCommandDiv());
    }
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
};
function keyDownHandler(event) {
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
        default:
            if (event.key.length === 1) {
                KeyHandler.letterHandler(event.key);
            }
    }
}
function keyUpHandler(event) {
}
