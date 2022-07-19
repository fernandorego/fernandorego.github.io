export class Command {
    command: HTMLDivElement;

    constructor() {
        this.command = document.createElement('div');
        this.command.classList.add('command');
        this.command.setAttribute('id','current-command');
        this.setText();
    }

    setText(): void {
        let command_text: HTMLInputElement = document.createElement("input");
        command_text.setAttribute("type", "text");
        command_text.setAttribute("id", "input");
        command_text.classList.add('command-input');

        this.command.appendChild(command_text);
    }

    getCommand(): HTMLDivElement {
        return this.command;
    }

    static getNewCommandDiv(): HTMLDivElement {
        return (new Command).getCommand();
    }

    static getSpanWithText(text:string): HTMLSpanElement {
        alert(text);
        let command: HTMLSpanElement = document.createElement("span");
        command.classList.add('command-text');
        command.innerHTML = text;
        return command;
    }
}
