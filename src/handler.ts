export class Handler {
    static letterHandler(letter:string): void {
        let current:HTMLElement | null = document.getElementById('current-command');
        if (current != null) {
            current.querySelector('.command-text')!.innerHTML += letter;
        }
    }
}
