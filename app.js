var Caesar = /** @class */ (function () {
    function Caesar(lang) {
        switch (lang) {
            case "ru": {
                this.alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
                break;
            }
            case "en": {
                this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                break;
            }
            case "ua": {
                this.alphabet = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";
                break;
            }
            default: {
                this.alphabet = "";
                console.log("error");
                return;
            }
        }
        this.alphabet += this.alphabet.toLowerCase();
    }
    Caesar.prototype.addOwnAlphabet = function (alphabet) {
        this.alphabet = alphabet;
    };
    Caesar.prototype.encrypt = function (sentence, key) {
        return (this.codeEncode(sentence, key));
    };
    Caesar.prototype.decrypt = function (sentence, key) {
        return this.codeEncode(sentence, -key);
    };
    Caesar.prototype.codeEncode = function (sentence, key) {
        var letterQty = this.alphabet.length;
        var retVal = "";
        for (var i = 0; i < sentence.length; i++) {
            var letter = sentence[i];
            var index = this.alphabet.indexOf(letter);
            console.log(index);
            if (index < 0) {
                retVal += letter;
            }
            else {
                var codeIndex = (letterQty + index + key) % letterQty;
                retVal += this.alphabet[codeIndex];
            }
        }
        return retVal;
    };
    return Caesar;
}());
var instance = new Caesar("en");
alert(instance.encrypt("sraka", 3));
alert(instance.decrypt("vudnd", 3));
//# sourceMappingURL=app.js.map