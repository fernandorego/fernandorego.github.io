import { Banner } from './banner.js';
import { InputField } from './input_field.js';
import { proccessCommand } from './commands.js';

const terminal : HTMLElement = document.getElementById("terminal")!;

window.onload = function() { 
    if (terminal != null) {
        terminal.appendChild(Banner.getBannerDiv());
        terminal.appendChild(InputField.getNewInputDiv());
    }

    focusInput();
    document.addEventListener("click", focusInput);
    document.addEventListener("keydown", keyDownHandler);
}

function keyDownHandler(event:KeyboardEvent) {
    if (event.key === 'Enter') {
        let current_cmd:HTMLElement = document.getElementById('current-command')!;
        let current_input:HTMLInputElement = <HTMLInputElement>document.getElementById('input')!;

        current_cmd.removeAttribute('id');
        current_input.remove();
        current_cmd.appendChild(InputField.getSpanWithText(current_input.value));

        (current_input.value == 'clear') ? 
            terminal.textContent = '' :
            terminal.appendChild(proccessCommand(current_input.value));

        terminal.appendChild(InputField.getNewInputDiv());
        focusInput();
        terminal.scrollTop = terminal.scrollHeight;
    }
}

function focusInput():void {
    document.getElementById("input")!.focus({ preventScroll: true });
}
