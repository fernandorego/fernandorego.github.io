import { Banner, Social, Email, Help, Error, InProgress, Opening, Projects } from './elements.js';

export function proccessCommand(command:string):HTMLElement {
    switch(command.trim().toLowerCase()) {
        case 'whoami':
            return (new InProgress).getElement();
        case 'projects':
            return (new Projects).getElement();
        case 'github':
            setTimeout(function() { window.open('https://github.com/fernandorego', "_blank"); }, 500);
            return (new Opening).getElement();
        case 'social':
            return (new Social).getElement();
        case 'facebook':
            setTimeout(function() { window.open('https://www.facebook.com/fernandorego245', "_blank"); }, 500);
            return (new Opening).getElement();
        case 'instagram':
            setTimeout(function() { window.open('https://www.instagram.com/nando_reg0', "_blank"); }, 500);
            return (new Opening).getElement();
        case 'linkedin':
            setTimeout(function() { window.open('https://www.linkedin.com/in/fernandorego', "_blank"); }, 500);
            return (new Opening).getElement();
        case 'email':
            return (new Email).getElement();
        case 'sendmail':
            setTimeout(window.location.href = "mailto:fernandoluis.santosrego@gmail.com", 500);
            return (new Opening).getElement();
        case 'banner':
            return (new Banner).getElement();
        case 'help':
            return (new Help).getElement();
        default:
            return (new Error((command === '') ? ' ' : command)).getElement();
    }
}
