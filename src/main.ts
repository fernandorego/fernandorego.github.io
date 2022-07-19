import { Banner } from './banner.js';
import { Command } from './command.js';

const terminal : HTMLElement = document.getElementById("terminal")!;

window.onload = function() { 
    if (terminal != null) {
        terminal.appendChild(Banner.getBannerDiv());
        terminal.appendChild(Command.getNewCommandDiv());
    }

    document.addEventListener("click", function() { 
        document.getElementById("input")!.focus();
    });
    
    document.addEventListener("keydown", keyDownHandler);
}

function keyDownHandler(event:KeyboardEvent) {
    switch (event.key) {
        case 'Enter':
            let current:HTMLElement | null = document.getElementById('current-command');

            if (current != null) {
                current.removeAttribute('id');
            }

            terminal.appendChild(Command.getNewCommandDiv());

            terminal.scrollTop = terminal.scrollHeight;
            break;
        default :
    }
}
