class Caesar {
    private alphabet: string;

    constructor(lang: string) {

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
                console.log("error")
               return
            }
        }
        this.alphabet = this.alphabet.toLowerCase();
    }

    public addOwnAlphabet(alphabet: string): void {
        this.alphabet = alphabet;
    }

    public encrypt(sentence: string, key: number): string {
        return (this.codeEncode(sentence,key));
    }
    public decrypt(sentence: string, key: number): string {
        return this.codeEncode(sentence,-key);
    }

    private codeEncode(sentence: string, key: number): string {
        sentence = sentence.toLowerCase();
        let letterQty = this.alphabet.length;
        let retVal = "";
        for (let i = 0; i < sentence.length; i++) {
            let letter = sentence[i];
            let index = this.alphabet.indexOf(letter);
            // console.log(index)
            if (index < 0) {
                retVal += letter;
            } else {
                let codeIndex = (letterQty + index + key) % letterQty;
                retVal += this.alphabet[codeIndex];
            }
        }
        return retVal;
    }
}



//main
// let instance = new Caesar("en");
// alert( instance.encrypt("sraka", 3));
// alert(instance.decrypt("vudnd",3));