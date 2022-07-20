import { MyElement } from './element.js';

export class Banner extends MyElement {
    constructor() { super(); }

    setProperties(): void { this.element.classList.add('banner'); }

    setText(): void {
        let banner_welcome: HTMLParagraphElement = document.createElement('p');
        banner_welcome.classList.add('banner-image');
        banner_welcome.innerHTML =  "                                                                            <span class='penguin'>    .--.     </span> \n";
        banner_welcome.innerHTML += "    ______                                __         ____                   <span class='penguin'>   |o_o |    </span> \n";
        banner_welcome.innerHTML += "   / ____/__  _________  ____ _____  ____/ /___     / __ \\___  ____ _____   <span class='penguin'>   |\\_/ |    </span>\n";
        banner_welcome.innerHTML += "  / /_  / _ \\/ ___/ __ \\/ __ `/ __ \\/ __  / __ \\   / /_/ / _ \\/ __ `/ __ \\  <span class='penguin'>  //   \\ \\ </span> \n";
        banner_welcome.innerHTML += " / __/ /  __/ /  / / / / /_/ / / / / /_/ / /_/ /  / _, _/  __/ /_/ / /_/ /  <span class='penguin'> (|     | )  </span>\n";
        banner_welcome.innerHTML += "/_/    \\___/_/  /_/ /_/\\__,_/_/ /_/\\__,_/\\____/  /_/ |_|\\___/\\__, /\\____/   <span class='penguin'>/'\\_   _/`\\</span>\n";
        banner_welcome.innerHTML += "                                                            /____/          <span class='penguin'>\\___)=(___/ </span> \n";

        let banner_text: HTMLParagraphElement = document.createElement('p');
        banner_text.classList.add('main-text');
        banner_text.innerHTML  = 'Hi! My name is <span class="current-line">Fernando Rego</span> and this is my web terminal.\n';
        banner_text.innerHTML += 'Type <span class="keyword">help</span> to display the list of all available commands';

        this.element.appendChild(banner_welcome);
        this.element.appendChild(document.createElement('br'));
        this.element.appendChild(banner_text);
    }
}

export class InputField extends MyElement{
    constructor() { super(); }

    setProperties(): void {
        this.element.classList.add('command');
        this.element.setAttribute('id','current-command');
    }

    setText(): void {
        let input_text: HTMLInputElement = document.createElement("input");
        input_text.setAttribute("type", "text");
        input_text.setAttribute("id", "input");
        input_text.setAttribute("spellcheck", "false");
        input_text.classList.add('command-input');

        this.element.appendChild(input_text);
    }

    static getSpanWithText(text:string): HTMLSpanElement {
        let input: HTMLSpanElement = document.createElement("span");
        input.classList.add('command-text');
        input.innerHTML = text;
        return input;
    }
}

export class InProgress extends MyElement {
    constructor() { super(); }

    setProperties(): void { this.element.classList.add('element-container'); }

    setText(): void {
        let error_text: HTMLParagraphElement = document.createElement('p');
        error_text.classList.add('main-text');
        error_text.innerHTML  = 'In progress...\n';

        this.element.appendChild(error_text);
    }
}

export class Help extends MyElement {
    constructor() { super(); }

    setProperties(): void { this.element.classList.add('element-container'); }

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

        this.element.appendChild(error_text);
    }
}

export class Error extends MyElement {
    command: string;

    constructor(command:string) {
        super(command);
        this.command = command;

        this.setProperties();
        this.setText();
    }

    setProperties(): void { this.element.classList.add('element-container'); }

    setText(): void {
        let error_text: HTMLParagraphElement = document.createElement('p');
        console.log(this.command);

        error_text.classList.add('main-text');
        error_text.innerHTML  = 'Command not found: <span class="current-line">' + this.command + '</span>\n';
        error_text.innerHTML += '<span class="normal">Type <span class="keyword">help</span> to display the list of all available commands</span>';

        this.element.appendChild(error_text);
    }
}
