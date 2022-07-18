const LETTER_WIDTH = 9;

export class Handler {
    static enterHandler() {

    }
    
    static letterHandler(letter:string): void {
        let current:HTMLElement | null = document.getElementById('current-command');

        if (current != null) {
            current.querySelector('.command-text')!.innerHTML += letter;
        }
    }

    static backspaceHandler():void {
        let current:HTMLElement | null = document.getElementById('current-command');

        if (current != null) {
            let command_text:HTMLElement = current.querySelector('.command-text')!;
            let cursor = document.getElementById('cursor')!;
            let position = command_text.innerHTML.length - Math.abs(parseInt(cursor.style.left)) / LETTER_WIDTH;
            if (position != 0) {
                command_text.innerHTML = command_text.innerHTML.slice(0, position - 1) + command_text.innerHTML.slice(position);
            }
        }
    }

    static deleteHandler():void {
        let current:HTMLElement | null = document.getElementById('current-command');

        if (current != null) {
            let command_text:HTMLElement = current.querySelector('.command-text')!;
            let cursor = document.getElementById('cursor')!;
            let position = command_text.innerHTML.length - Math.abs(parseInt(cursor.style.left)) / LETTER_WIDTH;
            if (position != command_text.innerHTML.length) {
                command_text.innerHTML = command_text.innerHTML.slice(0, position) + command_text.innerHTML.slice(position + 1);
                cursor.style.left = (parseInt(cursor.style.left) + LETTER_WIDTH) + "px";
            }
        }
    }

    static arrowLeftHandler():void {
        let current:HTMLElement | null = document.getElementById('current-command');

        if (current != null) {
            let lenght:number = current.querySelector('.command-text')!.innerHTML.length;
            let cursor = document.getElementById('cursor')!;
            let left = parseInt(cursor.style.left);
            if (lenght * LETTER_WIDTH > Math.abs(left)) {
                cursor.style.left = (left - LETTER_WIDTH) + "px";
            }
        }
    }

    static arrowRightHandler():void {
        let current:HTMLElement | null = document.getElementById('current-command');

        if (current != null) {
            let lenght:number = current.querySelector('.command-text')!.innerHTML.length;
            let cursor = document.getElementById('cursor')!;
            let left = parseInt(cursor.style.left);
            if (lenght * LETTER_WIDTH >= Math.abs(left)  && left < 0) {
                cursor.style.left = (left + LETTER_WIDTH) + "px";
            }
        }
    }
}
