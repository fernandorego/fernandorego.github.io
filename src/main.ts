import { proccessCommand } from './commands.js';
import { Banner, InputField } from './elements.js';

const terminal : HTMLElement = document.getElementById("terminal")!;

function focusInput():void {
    document.getElementById("input")!.focus({ preventScroll: true });
}

window.onload = async function() { 
    if (terminal != null) {
        await show((new Banner).getElement());
        terminal.appendChild((new InputField).getElement());
    }

    focusInput();
    document.addEventListener("click", focusInput);
    document.addEventListener("keydown", keyDownHandler);
}

async function keyDownHandler(event:KeyboardEvent) {
    if (event.key === 'Enter') {
        let current_cmd:HTMLElement = document.getElementById('current-command')!;
        let current_input:HTMLInputElement = <HTMLInputElement>document.getElementById('input')!;

        current_cmd.removeAttribute('id');
        current_input.remove();
        current_cmd.appendChild(InputField.getSpanWithText(current_input.value));

        (current_input.value.trim().toLowerCase() === 'clear') ? 
            terminal.textContent = '' :
            await show(proccessCommand(current_input.value));

        terminal.appendChild((new InputField).getElement());
        focusInput();
        terminal.scrollTop = terminal.scrollHeight;
    }
}

async function show(elem:HTMLElement) {
    let clone:HTMLElement = <HTMLElement>elem.cloneNode(true);

    for (let i:number = 0; i < clone.children.length; i++) {
        if (clone.children[i].tagName === 'P') {
            let child: HTMLParagraphElement = <HTMLParagraphElement>clone.children[i];
            for (let j:number = 0; j < child.children.length; j++) {
                child.children[j].innerHTML= '';
            }
        }
    }

    terminal.appendChild(clone);

    for (let i:number = 0; i < elem.children.length; i++) {
        if (elem.children[i].tagName === 'P') {
            let child: HTMLParagraphElement = <HTMLParagraphElement>elem.children[i];
            for (let j:number = 0; j < child.children.length; j++) {
                let text:string = child.children[j].innerHTML;
                await typeWriter(clone.children[i].children[j], text, 0);
            }
        }
    }
}

async function typeWriter(elem:Element, text:string, i:number) {
    let speed:number = 5;

    if (i < text.length) {
        elem.innerHTML += text.charAt(i);
        if (text.charAt(i) !== ' ') {
            await new Promise(resolve => setTimeout(resolve, speed));
        }
        await typeWriter(elem, text, ++i);
    }

    return;
}
