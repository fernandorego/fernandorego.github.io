export class InputField {
    input: HTMLDivElement;

    constructor() {
        this.input = document.createElement('div');
        this.input.classList.add('command');
        this.input.setAttribute('id','current-command');
        this.setText();
    }

    setText(): void {
        let input_text: HTMLInputElement = document.createElement("input");
        input_text.setAttribute("type", "text");
        input_text.setAttribute("id", "input");
        input_text.setAttribute("spellcheck", "false");
        input_text.classList.add('command-input');

        this.input.appendChild(input_text);
    }

    getInput(): HTMLDivElement {
        return this.input;
    }

    static getNewInputDiv(): HTMLDivElement {
        return (new InputField).getInput();
    }

    static getSpanWithText(text:string): HTMLSpanElement {
        let input: HTMLSpanElement = document.createElement("span");
        input.classList.add('command-text');
        input.innerHTML = text;
        return input;
    }
}
