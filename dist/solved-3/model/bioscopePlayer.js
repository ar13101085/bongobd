"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BioscopePlayer = /** @class */ (function () {
    function BioscopePlayer() {
        this.currentObset = 0;
    }
    BioscopePlayer.prototype.play = function (url, obsetPosition) {
        console.log(url + " is playing at " + obsetPosition);
        return true;
    };
    BioscopePlayer.prototype.forward = function (stepPosition) {
        if (stepPosition === void 0) { stepPosition = 10; }
        this.currentObset += 10;
        this.play(this.mediaUrl, this.currentObset);
    };
    BioscopePlayer.prototype.rewind = function (stepPosition) {
        if (stepPosition === void 0) { stepPosition = 10; }
        this.currentObset -= 10;
        if (this.currentObset < 0) {
            this.currentObset = 0;
        }
        this.play(this.mediaUrl, this.currentObset);
    };
    return BioscopePlayer;
}());
exports.default = BioscopePlayer;
//# sourceMappingURL=bioscopePlayer.js.map