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
        command_text.classList.add('command-text');
        /*let cursor: HTMLSpanElement = document.createElement('b');
        cursor.setAttribute('id','cursor');
        cursor.classList.add('cursor');
        cursor.style.left = '0px';
        cursor.innerHTML = '█';*/
        this.command.appendChild(command_text);
        //this.command.appendChild(cursor);
    }
    getCommand() {
        return this.command;
    }
    static getNewCommandDiv() {
        return (new Command).getCommand();
    }
}
