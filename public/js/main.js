var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { proccessCommand } from './commands.js';
import { Banner, InputField } from './elements.js';
const terminal = document.getElementById("terminal");
window.onload = function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (terminal != null) {
            yield show((new Banner).getElement());
            terminal.appendChild((new InputField).getElement());
        }
        focusInput();
        document.addEventListener("click", focusInput);
        document.addEventListener("keydown", keyDownHandler);
    });
};
function keyDownHandler(event) {
    return __awaiter(this, void 0, void 0, function* () {
        if (event.key === 'Enter') {
            let current_cmd = document.getElementById('current-command');
            let current_input = document.getElementById('input');
            current_cmd.removeAttribute('id');
            current_input.remove();
            current_cmd.appendChild(InputField.getSpanWithText(current_input.value));
            (current_input.value.trim().toLowerCase() === 'clear') ?
                terminal.textContent = '' :
                yield show(proccessCommand(current_input.value));
            terminal.appendChild((new InputField).getElement());
            focusInput();
            terminal.scrollTop = terminal.scrollHeight;
        }
    });
}
function focusInput() {
    document.getElementById("input").focus({ preventScroll: true });
}
function show(elem) {
    return __awaiter(this, void 0, void 0, function* () {
        let clone = elem.cloneNode(true);
        for (let i = 0; i < clone.children.length; i++) {
            if (clone.children[i].tagName === 'P') {
                let child = clone.children[i];
                for (let j = 0; j < child.children.length; j++) {
                    child.children[j].innerHTML = '';
                }
            }
        }
        terminal.appendChild(clone);
        for (let i = 0; i < elem.children.length; i++) {
            if (elem.children[i].tagName === 'P') {
                let child = elem.children[i];
                for (let j = 0; j < child.children.length; j++) {
                    let text = child.children[j].innerHTML;
                    yield typeWriter(clone.children[i].children[j], text, 0);
                }
            }
        }
    });
}
function typeWriter(elem, text, i) {
    return __awaiter(this, void 0, void 0, function* () {
        let speed = 5;
        if (i < text.length) {
            elem.innerHTML += text.charAt(i);
            if (text.charAt(i) !== ' ') {
                yield new Promise(resolve => setTimeout(resolve, speed));
            }
            yield typeWriter(elem, text, ++i);
        }
        return;
    });
}
