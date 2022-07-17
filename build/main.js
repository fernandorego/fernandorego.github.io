define(["require", "exports", "./elements"], function (require, exports, elements_1) {
    "use strict";
    exports.__esModule = true;
    window.onload = function afterWebPageLoad() {
        var terminal = document.getElementById("terminal");
        if (terminal != null) {
            terminal.appendChild(elements_1.Banner.getBannerDiv());
            terminal.appendChild(elements_1.Command.getCommandDiv());
        }
    };
});
//# sourceMappingURL=main.js.map