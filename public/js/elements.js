import { MyElement } from './element.js';
export class Banner extends MyElement {
    constructor() { super(); }
    setProperties() { this.element.classList.add('banner'); }
    setText() {
        let banner_welcome = document.createElement('p');
        banner_welcome.classList.add('banner-image');
        banner_welcome.innerHTML = "<span>                                                                            </span><span class='penguin'>    .--.     </span> \n";
        banner_welcome.innerHTML += "<span>    ______                                __         ____                   </span><span class='penguin'>   |o_o |    </span> \n";
        banner_welcome.innerHTML += "<span>   / ____/__  _________  ____ _____  ____/ /___     / __ \\___  ____ _____   </span><span class='penguin'>   |\\_/ |    </span>\n";
        banner_welcome.innerHTML += "<span>  / /_  / _ \\/ ___/ __ \\/ __ `/ __ \\/ __  / __ \\   / /_/ / _ \\/ __ `/ __ \\  </span><span class='penguin'>  //   \\ \\ </span> \n";
        banner_welcome.innerHTML += "<span> / __/ /  __/ /  / / / / /_/ / / / / /_/ / /_/ /  / _, _/  __/ /_/ / /_/ /  </span><span class='penguin'> (|     | )  </span>\n";
        banner_welcome.innerHTML += "<span>/_/    \\___/_/  /_/ /_/\\__,_/_/ /_/\\__,_/\\____/  /_/ |_|\\___/\\__, /\\____/   </span><span class='penguin'>/'\\_   _/`\\</span>\n";
        banner_welcome.innerHTML += "<span>                                                            /____/          </span><span class='penguin'>\\___)=(___/ </span> \n\n";
        let banner_text = document.createElement('p');
        banner_text.classList.add('main-text');
        banner_text.innerHTML = '<span>Hi! My name is </span><span class="current-line">Fernando Rego</span><span> and this is my web terminal.\n</span>';
        banner_text.innerHTML += '<span>Type </span><span class="keyword">help</span><span> to display the list of all available commands</span>';
        this.element.appendChild(banner_welcome);
        this.element.appendChild(banner_text);
    }
}
export class InputField extends MyElement {
    constructor() { super(); }
    setProperties() {
        this.element.classList.add('command');
        this.element.setAttribute('id', 'current-command');
    }
    setText() {
        let input_text = document.createElement("input");
        input_text.setAttribute("type", "text");
        input_text.setAttribute("id", "input");
        input_text.setAttribute("spellcheck", "false");
        input_text.classList.add('command-input');
        this.element.appendChild(input_text);
    }
    static getSpanWithText(text) {
        let input = document.createElement("span");
        input.classList.add('command-text');
        input.innerHTML = text;
        return input;
    }
}
export class Projects extends MyElement {
    constructor() { super(); }
    setProperties() { this.element.classList.add('element-container'); }
    setText() {
        let projects_text = document.createElement('p');
        projects_text.classList.add('main-text');
        projects_text.innerHTML = '<span>Checkout all my projects on GitHub:</span>\n\n';
        projects_text.innerHTML += '<span class="keyword">github   </span>\t\t<a href="https://github.com/fernandorego" target="_blank">github.com/fernandorego</a>\n';
        this.element.appendChild(projects_text);
    }
}
export class Social extends MyElement {
    constructor() { super(); }
    setProperties() { this.element.classList.add('element-container'); }
    setText() {
        let social_text = document.createElement('p');
        social_text.classList.add('main-text');
        social_text.innerHTML = '<span class="keyword">facebook </span>\t\t<a href="https://www.facebook.com/fernandorego245" target="_blank">facebook.com/fernandorego245</a>\n';
        social_text.innerHTML += '<span class="keyword">instagram</span>\t\t<a href="https://www.instagram.com/nando_reg0" target="_blank">instagram.com/nando_reg0</a>\n';
        social_text.innerHTML += '<span class="keyword">linkedin </span>\t\t<a href="https://www.linkedin.com/in/fernandorego" target="_blank">linkedin.com/in/fernandorego</a>\n';
        this.element.appendChild(social_text);
    }
}
export class Email extends MyElement {
    constructor() { super(); }
    setProperties() { this.element.classList.add('element-container'); }
    setText() {
        let email_text = document.createElement('p');
        email_text.classList.add('main-text');
        email_text.innerHTML = '<span class="keyword">sendmail   </span>\t\t<a href="mailto:fernandoluis.santosrego@gmail.com">fernandoluis.santosrego@gmail.com</a>\n';
        this.element.appendChild(email_text);
    }
}
export class Help extends MyElement {
    constructor() { super(); }
    setProperties() { this.element.classList.add('element-container'); }
    setText() {
        let help_text = document.createElement('p');
        help_text.classList.add('main-text');
        help_text.innerHTML = '<span class="keyword">whoami  </span>\t\t<span>About me</span>\n';
        help_text.innerHTML += '<span class="keyword">cv    </span>\t\t\t<span>My curriculum vitae</span>\n';
        help_text.innerHTML += '<span class="keyword">projects</span>\t\t<span>Some of my previous projects</span>\n';
        help_text.innerHTML += '<span class="keyword">social  </span>\t\t<span>Check my social networks</span>\n';
        help_text.innerHTML += '<span class="keyword">email   </span>\t\t<span>My spam filter will finally be used</span>\n';
        help_text.innerHTML += '<span class="keyword">banner  </span>\t\t<span>Display the banner</span>\n';
        help_text.innerHTML += '<span class="keyword">clear   </span>\t\t<span>Clear terminal</span>\n';
        help_text.innerHTML += '<span class="keyword">help    </span>\t\t<span>I think you already know what is this for</span>\n';
        this.element.appendChild(help_text);
    }
}
export class Error extends MyElement {
    constructor(command) {
        super(command);
        this.command = command;
        this.setProperties();
        this.setText();
    }
    setProperties() { this.element.classList.add('element-container'); }
    setText() {
        let error_text = document.createElement('p');
        error_text.classList.add('main-text');
        error_text.innerHTML = '<span>Command not found: </span><span class="current-line">' + this.command + '</span>\n';
        error_text.innerHTML += '<span>Type </span><span class="keyword">help</span><span> to display the list of all available commands</span>';
        this.element.appendChild(error_text);
    }
}
export class InProgress extends MyElement {
    constructor() { super(); }
    setProperties() { this.element.classList.add('element-container'); }
    setText() {
        let error_text = document.createElement('p');
        error_text.classList.add('main-text');
        error_text.innerHTML = '<span>In progress...</span>\n';
        this.element.appendChild(error_text);
    }
}
export class Opening extends MyElement {
    constructor() { super(); }
    setProperties() { this.element.classList.add('element-container'); }
    setText() {
        let opening_text = document.createElement('p');
        opening_text.classList.add('main-text');
        opening_text.innerHTML = '<span>Opening...</span>\n';
        this.element.appendChild(opening_text);
    }
}
export class WhoAmI extends MyElement {
    constructor() { super(); }
    setProperties() { this.element.classList.add('element-container'); }
    setText() {
        let error_text = document.createElement('p');
        error_text.classList.add('main-text');
        error_text.innerHTML = "<span class='whoami-text'>Fernando Rego completed his Master’s degree in Informatics and Computing Engineering\n"
            + "at the Faculty of Engineering of the University of Porto in 2024.\n"
            + "During his academic journey, he served as a teaching assistant and began a research\n"
            + "scholarship, marking the beginning of his professional career. Currently, he is a researcher \n"
            + "at Fraunhofer Portugal AICOS, focusing primarily on embedded systems, distributed systems,\n"
            + "and TinyML by integrating Machine Learning into Internet of Things (IoT) solutions.</span>\n"
            + "<span class='piano'>"
            + "           ____                       \n"
            + "          | |  \\_______     \n"
            + "          | |          \\  \n"
            + "   O    __|_|___________|  \n"
            + "  /\\_  /____|____________)\n"
            + " /   |___________________| \n"
            + "/__    | )(            )(  \n"
            + "| |\\  :| )(            )( \n"
            + "</span>\n";
        this.element.appendChild(error_text);
    }
}
