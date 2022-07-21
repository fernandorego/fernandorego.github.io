import { Banner, Social, Help, Error, InProgress, Opening } from './elements.js';
export function proccessCommand(command) {
    switch (command.trim().toLowerCase()) {
        case 'whoami':
            return (new InProgress).getElement();
        case 'social':
            return (new Social).getElement();
        case 'github':
            setTimeout(function () { window.open('https://github.com/fernandorego', "_blank"); }, 500);
            return (new Opening).getElement();
        case 'facebook':
            setTimeout(function () { window.open('https://www.facebook.com/fernandorego245', "_blank"); }, 500);
            return (new Opening).getElement();
        case 'instagram':
            setTimeout(function () { window.open('https://www.instagram.com/nando_reg0', "_blank"); }, 500);
            return (new Opening).getElement();
        case 'linkedin':
            setTimeout(function () { window.open('https://www.linkedin.com/in/fernandorego', "_blank"); }, 500);
            return (new Opening).getElement();
        case 'projects':
            return (new InProgress).getElement();
        case 'email':
            return (new InProgress).getElement();
        case 'banner':
            return (new Banner).getElement();
        case 'help':
            return (new Help).getElement();
        default:
            return (new Error((command === '') ? ' ' : command)).getElement();
    }
}
