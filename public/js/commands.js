import { Banner, Help, Error, InProgress } from './elements.js';
export function proccessCommand(command) {
    switch (command) {
        case 'whoami':
            return (new InProgress).getElement();
        case 'social':
            return (new InProgress).getElement();
        case 'projects':
            return (new InProgress).getElement();
        case 'contacts':
            return (new InProgress).getElement();
        case 'banner':
            return (new Banner).getElement();
        case 'help':
            return (new Help).getElement();
        default:
            return (new Error(command)).getElement();
    }
}
