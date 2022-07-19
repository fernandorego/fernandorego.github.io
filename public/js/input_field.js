export class InputField {
    constructor() {
        this.input = document.createElement('div');
        this.input.classList.add('command');
        this.input.setAttribute('id', 'current-command');
        this.setText();
    }
    setText() {
        let input_text = document.createElement("input");
        input_text.setAttribute("type", "text");
        input_text.setAttribute("id", "input");
        input_text.setAttribute("spellcheck", "false");
        input_text.classList.add('command-input');
        this.input.appendChild(input_text);
    }
    getInput() {
        return this.input;
    }
    static getNewInputDiv() {
        return (new InputField).getInput();
    }
    static getSpanWithText(text) {
        let input = document.createElement("span");
        input.classList.add('command-text');
        input.innerHTML = text;
        return input;
    }
}
