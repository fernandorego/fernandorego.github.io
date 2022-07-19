export class Command {
    constructor() {
        this.command = document.createElement('div');
        this.command.classList.add('command');
        this.command.setAttribute('id', 'current-command');
        this.setText();
    }
    setText() {
        let command_text = document.createElement("input");
        command_text.setAttribute("type", "text");
        command_text.setAttribute("id", "input");
        command_text.setAttribute("autofocus", "autofocus");
        command_text.classList.add('command-input');
        this.command.appendChild(command_text);
    }
    getCommand() {
        return this.command;
    }
    static getNewCommandDiv() {
        return (new Command).getCommand();
    }
    static getSpanWithText(text) {
        alert(text);
        let command = document.createElement("span");
        command.classList.add('command-text');
        command.innerHTML = text;
        return command;
    }
}
