export class Banner {
    banner: HTMLDivElement;

    constructor() {
        this.banner = document.createElement('div');
        this.setText();
    }

    setText(): void {
        let banner_welcome: HTMLParagraphElement = document.createElement('p');
        banner_welcome.innerHTML  = '                                                                                ____            \n';
        banner_welcome.innerHTML += '                                                                               | |  \\_______    \n';
        banner_welcome.innerHTML += '██      ██  ██████ ██       ████   ████   ████  ████ ██████  ██                | |          \\   \n';
        banner_welcome.innerHTML += '██      ██  ██     ██     ██     ██    ██ ██  ██  ██ ██      ██         O    __|_|___________|  \n';
        banner_welcome.innerHTML += '██      ██  ████   ██     ██     ██    ██ ██      ██ ████    ██        /\\_  /____|____________) \n';
        banner_welcome.innerHTML += '██  ██  ██  ██     ██     ██     ██    ██ ██      ██ ██               /   |___________________| \n';
        banner_welcome.innerHTML += '  ██  ██    ██████ ██████   ████   ████   ██      ██ ██████  ██      /__    | )(            )(  \n';
        banner_welcome.innerHTML += '                                                                     | |\\  :| )(            )(  \n\n';

        let banner_text: HTMLParagraphElement = document.createElement('p');
        banner_text.innerHTML  = 'Hi! My name is Fernando Rego and this is my web terminal.\n';
        banner_text.innerHTML += 'Type help to display the list of all available commands';

        this.banner.appendChild(banner_welcome);
        this.banner.appendChild(banner_text);
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
        text.innerText = 'guest@fernandorego.io:~$ █   ';
        
        this.command.appendChild(text);
    }

    getCommand(): HTMLDivElement {
        return this.command;
    }

    static getCommandDiv(): HTMLDivElement {
        return (new Command).getCommand();
    }
}
