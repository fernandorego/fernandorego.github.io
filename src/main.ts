import { Banner } from './banner.js';
import { Command } from './command.js';

const terminal : HTMLElement = document.getElementById("terminal")!;

window.onload = function() { 
    if (terminal != null) {
        terminal.appendChild(Banner.getBannerDiv());
        terminal.appendChild(Command.getNewCommandDiv());
    }

    focusInput();
    document.addEventListener("click", focusInput);
    document.addEventListener("keydown", keyDownHandler);
}

function keyDownHandler(event:KeyboardEvent) {
    switch (event.key) {
        case 'Enter':
            let current_cmd:HTMLElement = document.getElementById('current-command')!;
            let current_input:HTMLInputElement = <HTMLInputElement>document.getElementById('input')!;

            current_cmd.removeAttribute('id');
            current_cmd.appendChild(Command.getSpanWithText(current_input.value));
            current_input.remove();

            terminal.appendChild(Command.getNewCommandDiv());
            focusInput();
            terminal.scrollTop = terminal.scrollHeight;
            break;
        default :
    }
}

function focusInput():void {
    document.getElementById("input")!.focus({ preventScroll: true });
}
