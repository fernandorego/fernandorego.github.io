export function proccessCommand(command) {
    command = command.toLowerCase();
    switch (command) {
        default:
            return Error.getErrorDiv(command);
    }
}
export class Error {
    constructor(command) {
        this.command = command;
        this.error = document.createElement('div');
        this.error.classList.add('element-container');
        this.setText();
    }
    setText() {
        let error_text = document.createElement('p');
        error_text.classList.add('main-text');
        error_text.innerHTML = 'Command not found: <span class="current-line">' + this.command + '</span>\n';
        error_text.innerHTML += '<span class="normal">Type <span class="keyword">help</span> to display the list of all available commands</span>';
        this.error.appendChild(error_text);
    }
    getError() {
        return this.error;
    }
    static getErrorDiv(command) {
        return (new Error(command)).getError();
    }
}
