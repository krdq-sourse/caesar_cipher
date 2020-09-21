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

    public addOwnAlphabet(alphabet: string): void {
        this.alphabet = alphabet;
    }

    public encrypt(sentence: string, key: number): string {
        console.log(this.toNumAlphabet(sentence));
        return "";
    }

    private toNumAlphabet(sentence: string): number[] {
        let alphabet: string[];
        let sentenceArray: string[];
        let result: number[];
        result = [];
        sentenceArray = sentence.split('');
        alphabet = this.alphabet.split('');
        let i = 0;
        alphabet.forEach((value) => {
            if (sentenceArray[i] === value) {
                result.push(i);
            }
            i++;
        });
        return result;
    }

}

