export class Banner {
    constructor() {
        this.banner = document.createElement('div');
        this.banner.classList.add('banner');
        this.setText();
    }
    setText() {
        let banner_welcome = document.createElement('p');
        banner_welcome.classList.add('banner-image');
        banner_welcome.innerHTML = "                                                                            <span class='penguin'>    .--.     </span> \n";
        banner_welcome.innerHTML += "    ______                                __         ____                   <span class='penguin'>   |o_o |    </span> \n";
        banner_welcome.innerHTML += "   / ____/__  _________  ____ _____  ____/ /___     / __ \\___  ____ _____   <span class='penguin'>   |\\_/ |    </span>\n";
        banner_welcome.innerHTML += "  / /_  / _ \\/ ___/ __ \\/ __ `/ __ \\/ __  / __ \\   / /_/ / _ \\/ __ `/ __ \\  <span class='penguin'>  //   \\ \\ </span> \n";
        banner_welcome.innerHTML += " / __/ /  __/ /  / / / / /_/ / / / / /_/ / /_/ /  / _, _/  __/ /_/ / /_/ /  <span class='penguin'> (|     | )  </span>\n";
        banner_welcome.innerHTML += "/_/    \\___/_/  /_/ /_/\\__,_/_/ /_/\\__,_/\\____/  /_/ |_|\\___/\\__, /\\____/   <span class='penguin'>/'\\_   _/`\\</span>\n";
        banner_welcome.innerHTML += "                                                            /____/          <span class='penguin'>\\___)=(___/ </span> \n";
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
