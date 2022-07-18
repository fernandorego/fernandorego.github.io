export class Command {
    command: HTMLDivElement;

    constructor() {
        this.command = document.createElement('div');
        this.command.classList.add('command');
        this.command.setAttribute('id','current-command');
        this.setText();
    }

    setText(): void {
        let text: HTMLSpanElement = document.createElement('span');

        let cursor: HTMLSpanElement = document.createElement('b');
        cursor.setAttribute('id','cursor');
        cursor.classList.add('cursor');
        cursor.innerHTML = '█';
        
        this.command.appendChild(text);
        this.command.appendChild(cursor);
    }

    getCommand(): HTMLDivElement {
        return this.command;
    }

    static getCommandDiv(): HTMLDivElement {
        return (new Command).getCommand();
    }
}
