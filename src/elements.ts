export class Banner {
    banner: HTMLDivElement;

    constructor() {
        this.banner = document.createElement('div');
        this.setText();
    }

    setText(): void {
        let text: HTMLParagraphElement = document.createElement('p');
        text.innerText = 'Hello traveller! Welcome to my web terminal.\n\
                            Type help to discover all the possibilities at your disposal\n';

        this.banner.appendChild(text);
    }

    getBanner(): HTMLDivElement {
        return this.banner;
    }

    static getBannerDiv(): HTMLDivElement {
        return (new Banner).getBanner();
    }
}

export class Command {
    command: HTMLDivElement;

    constructor() {
        this.command = document.createElement('div');
        this.setText();
    }

    setText(): void {
        let text: HTMLParagraphElement = document.createElement('p');
        text.innerText = 'guest@github.nando.io:~$ █   ';
        
        this.command.appendChild(text);
    }

    getCommand(): HTMLDivElement {
        return this.command;
    }

    static getCommandDiv(): HTMLDivElement {
        return (new Command).getCommand();
    }
}
