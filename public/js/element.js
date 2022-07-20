export class MyElement {
    constructor(command = '') {
        if (this.constructor == MyElement) {
            throw new Error("Object of Abstract Class cannot be created");
        }
        this.element = document.createElement('div');
        if (!command) {
            this.setProperties();
            this.setText();
        }
    }
    setProperties() {
        throw new Error("Abstract Method has no implementation");
    }
    setText() {
        throw new Error("Abstract Method has no implementation");
    }
    getElement() {
        return this.element;
    }
}
