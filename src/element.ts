export class MyElement {
    element: HTMLDivElement;

    constructor(command:string = '') {
        if(this.constructor == MyElement){
            throw new Error("Object of Abstract Class cannot be created");
        }

        this.element = document.createElement('div');

        if (!command) {
            this.setProperties();
            this.setText();
        }
    }

    setProperties(): void {
        throw new Error("Abstract Method has no implementation");
    }

    setText(): void {
        throw new Error("Abstract Method has no implementation");
    }

    getElement(): HTMLDivElement {
        return this.element;
    }
}