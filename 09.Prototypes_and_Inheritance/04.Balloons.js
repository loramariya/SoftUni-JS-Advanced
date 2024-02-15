function solution() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribonnLength) {
            super(color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribonnLength;
            this.ribbon = {
                color: this.ribbonColor,
                length: this.ribbonLength
            }
        }

        get ribbon() {
            return this._ribbon;
        }

        set ribbon(value) {
            this._ribbon = value;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribonnLength, text) {
            super(color, gasWeight, ribbonColor, ribonnLength);
            this.text = text;
        }

        get text() {
            return this._text;
        }

        set text(value) {
            this._text = value;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}