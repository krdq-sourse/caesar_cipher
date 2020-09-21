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
                console.log("error")
                return;
            }
        }
    }

    addOwnAlphabet(alphabet:string): void {
        this.alphabet = alphabet;
    }


}

