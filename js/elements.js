export class Banner {
    constructor() {
        this.banner = document.createElement('div');
        this.setText();
    }

    setText() {
        let text = document.createElement('p');
        text.innerText = 'Hello traveller! Welcome to my web terminal.\n\
                            Type help to discover all the possibilities at your disposal';
        
        this.banner.appendChild(text);
    }

    getBanner() {
        return this.banner
    }
}
