import { Banner } from './banner.js';
import { InputField } from './input_field.js';
import { proccessCommand } from './commands.js';
const terminal = document.getElementById("terminal");
window.onload = function () {
    if (terminal != null) {
        terminal.appendChild(Banner.getBannerDiv());
        terminal.appendChild(InputField.getNewInputDiv());
    }
    focusInput();
    document.addEventListener("click", focusInput);
    document.addEventListener("keydown", keyDownHandler);
};
function keyDownHandler(event) {
    if (event.key === 'Enter') {
        let current_cmd = document.getElementById('current-command');
        let current_input = document.getElementById('input');
        current_cmd.removeAttribute('id');
        current_input.remove();
        current_cmd.appendChild(InputField.getSpanWithText(current_input.value));
        let command = current_input.value.trim().toLowerCase();
        (command === 'clear') ?
            terminal.textContent = '' :
            terminal.appendChild(proccessCommand(command));
        terminal.appendChild(InputField.getNewInputDiv());
        focusInput();
        terminal.scrollTop = terminal.scrollHeight;
    }
}
function focusInput() {
    document.getElementById("input").focus({ preventScroll: true });
}
