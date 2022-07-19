import { Banner } from './banner.js';

export function proccessCommand(command:string):HTMLElement {
    command = command.toLowerCase();
    switch(command) {
        case 'whoami':
            return InProgress.getInProgressDiv();
        case 'social':
            return InProgress.getInProgressDiv();
        case 'projects':
            return InProgress.getInProgressDiv();
        case 'contacts':
            return InProgress.getInProgressDiv();
        case 'banner':
            return Banner.getBannerDiv();
        case 'clear':
            return InProgress.getInProgressDiv();
        case 'help':
            return Help.getHelpDiv();
        default:
            return Error.getErrorDiv(command);
    }
}

export class InProgress {
    progress: HTMLDivElement;

    constructor() {
        this.progress = document.createElement('div');
        this.progress.classList.add('element-container');
        this.setText();
    }

    setText(): void {
        let error_text: HTMLParagraphElement = document.createElement('p');
        error_text.classList.add('main-text');
        error_text.innerHTML  = 'In progress...\n';

        this.progress.appendChild(error_text);
    }

    getInProgress(): HTMLDivElement {
        return this.progress;
    }

    static getInProgressDiv(): HTMLDivElement {
        return (new InProgress()).getInProgress();
    }
}

export class Help {
    help: HTMLDivElement;

    constructor() {
        this.help = document.createElement('div');
        this.help.classList.add('element-container');
        this.setText();
    }

    setText(): void {
        let error_text: HTMLParagraphElement = document.createElement('p');
        error_text.classList.add('main-text');
        error_text.innerHTML  = '<span class="keyword">whoami  </span>\t\tAbout me\n';
        error_text.innerHTML += '<span class="keyword">social  </span>\t\tCheck my social networks\n';
        error_text.innerHTML += '<span class="keyword">projects</span>\t\tSome of my previous projects\n';
        error_text.innerHTML += '<span class="keyword">contacts</span>\t\tMy spam filter will finally be used\n';
        error_text.innerHTML += '<span class="keyword">banner  </span>\t\tDisplay the banner\n';
        error_text.innerHTML += '<span class="keyword">clear   </span>\t\tClear terminal\n';
        error_text.innerHTML += '<span class="keyword">help    </span>\t\tI think you already know what is this for\n';

        this.help.appendChild(error_text);
    }

    getHelp(): HTMLDivElement {
        return this.help;
    }

    static getHelpDiv(): HTMLDivElement {
        return (new Help()).getHelp();
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