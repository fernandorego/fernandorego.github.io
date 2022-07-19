export function proccessCommand(command:string):HTMLElement {
    command = command.toLowerCase();
    switch(command) {
        default:
            return Error.getErrorDiv(command);
    }
}

export class Error {
    error: HTMLDivElement;
    command: string;

    constructor(command:string) {
        this.command = command;
        this.error = document.createElement('div');
        this.error.classList.add('element-container');
        this.setText();
    }

    setText(): void {
        let error_text: HTMLParagraphElement = document.createElement('p');
        error_text.classList.add('main-text');
        error_text.innerHTML  = 'Command not found: <span class="current-line">' + this.command + '</span>\n';
        error_text.innerHTML += '<span class="normal">Type <span class="keyword">help</span> to display the list of all available commands</span>';

        this.error.appendChild(error_text);
    }

    getError(): HTMLDivElement {
        return this.error;
    }

    static getErrorDiv(command:string): HTMLDivElement {
        return (new Error(command)).getError();
    }
}