export class Banner {
    banner: HTMLDivElement;

    constructor() {
        this.banner = document.createElement('div');
        this.setText();
    }

    setText(): void {
        let banner_welcome: HTMLParagraphElement = document.createElement('p');
        banner_welcome.innerHTML =  "<span class='normal'>                                                               </span>    <span class='number'>    .--.     </span> \n";
        banner_welcome.innerHTML += "<span class='normal'>██      ██  ██████ ██       ████   ████   ████  ████ ██████  ██</span>    <span class='number'>   |o_o |    </span> \n";
        banner_welcome.innerHTML += "<span class='normal'>██      ██  ██     ██     ██     ██    ██ ██  ██  ██ ██      ██</span>    <span class='number'>   |\\_/ |    </span>\n";
        banner_welcome.innerHTML += "<span class='normal'>██      ██  ████   ██     ██     ██    ██ ██      ██ ████    ██</span>    <span class='number'>  //   \\ \\ </span> \n";
        banner_welcome.innerHTML += "<span class='normal'>██  ██  ██  ██     ██     ██     ██    ██ ██      ██ ██        </span>    <span class='number'> (|     | )  </span>\n";
        banner_welcome.innerHTML += "<span class='normal'>  ██  ██    ██████ ██████   ████   ████   ██      ██ ██████  ██</span>    <span class='number'>/'\\_   _/`\\</span>\n";
        banner_welcome.innerHTML += "<span class='normal'>                                                               </span>    <span class='number'>\\___)=(___/ </span> \n";

        let banner_text: HTMLParagraphElement = document.createElement('p');
        banner_text.classList.add('string');
        banner_text.innerHTML  = 'Hi! My name is <span class="current-line">Fernando Rego</span> and this is my web terminal.\n';
        banner_text.innerHTML += 'Type <span class="keyword">help</span> to display the list of all available commands';

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
        this.command.setAttribute('id','command');
        this.setText();
    }

    setText(): void {
        let text: HTMLParagraphElement = document.createElement('p');
        text.innerHTML = 'guest@fernandorego.io:~$ <span class="blink_me">█</span>';
        
        this.command.appendChild(text);
    }

    getCommand(): HTMLDivElement {
        return this.command;
    }

    static getCommandDiv(): HTMLDivElement {
        return (new Command).getCommand();
    }
}
