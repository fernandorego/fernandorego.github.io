define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Command = exports.Banner = void 0;
    var Banner = (function () {
        function Banner() {
            this.banner = document.createElement('div');
            this.setText();
        }
        Banner.prototype.setText = function () {
            var text = document.createElement('p');
            text.innerText = 'Hello traveller! Welcome to my web terminal.\n\
                            Type help to discover all the possibilities at your disposal\n';
            this.banner.appendChild(text);
        };
        Banner.prototype.getBanner = function () {
            return this.banner;
        };
        Banner.getBannerDiv = function () {
            return (new Banner).getBanner();
        };
        return Banner;
    }());
    exports.Banner = Banner;
    var Command = (function () {
        function Command() {
            this.command = document.createElement('div');
            this.setText();
        }
        Command.prototype.setText = function () {
            var text = document.createElement('p');
            text.innerText = 'guest@github.nando.io:~$ █   ';
            this.command.appendChild(text);
        };
        Command.prototype.getCommand = function () {
            return this.command;
        };
        Command.getCommandDiv = function () {
            return (new Command).getCommand();
        };
        return Command;
    }());
    exports.Command = Command;
});
//# sourceMappingURL=elements.js.map