export class Banner {
    constructor() {
        this.banner = document.createElement('div');
        this.banner.classList.add('banner');
        this.setText();
    }
    setText() {
        let banner_welcome = document.createElement('p');
        banner_welcome.classList.add('banner-image');
        banner_welcome.innerHTML = "                                                                   <span class='penguin'>    .--.     </span> \n";
        banner_welcome.innerHTML += "██      ██  ██████ ██       ████   ████   ████  ████ ██████  ██    <span class='penguin'>   |o_o |    </span> \n";
        banner_welcome.innerHTML += "██      ██  ██     ██     ██     ██    ██ ██  ██  ██ ██      ██    <span class='penguin'>   |\\_/ |    </span>\n";
        banner_welcome.innerHTML += "██      ██  ████   ██     ██     ██    ██ ██      ██ ████    ██    <span class='penguin'>  //   \\ \\ </span> \n";
        banner_welcome.innerHTML += "██  ██  ██  ██     ██     ██     ██    ██ ██      ██ ██            <span class='penguin'> (|     | )  </span>\n";
        banner_welcome.innerHTML += "  ██  ██    ██████ ██████   ████   ████   ██      ██ ██████  ██    <span class='penguin'>/'\\_   _/`\\</span>\n";
        banner_welcome.innerHTML += "                                                                   <span class='penguin'>\\___)=(___/ </span> \n";
        let banner_text = document.createElement('p');
        banner_text.classList.add('banner-text');
        banner_text.innerHTML = 'Hi! My name is <span class="current-line">Fernando Rego</span> and this is my web terminal.\n';
        banner_text.innerHTML += 'Type <span class="keyword">help</span> to display the list of all available commands';
        this.banner.appendChild(banner_welcome);
        this.banner.appendChild(document.createElement('br'));
        this.banner.appendChild(banner_text);
    }
    getBanner() {
        return this.banner;
    }
    static getBannerDiv() {
        return (new Banner).getBanner();
    }
}
