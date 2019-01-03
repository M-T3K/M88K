// MATH

// Imports
import { Texth } from "./TextUtil";

// Constants
const HEX: string = "0123456789abcdef"; // All the possible values of a Hexadecimal Number

export class MathHelper {
    
    private negDecToHex(str: string) {
        
        let num: number = parseInt(str.substr(1), 10);
        let maxHex: number = 0xFFFFFFFF;
        num = maxHex - num;
        // Due to how 2's complement works, we need to + 1
        num++;

        // The result is in Big Endian by default. The reason is that it is substracting
        // from the right. We need to call on endian transform.
        return Texth.addHex(num.toString(16).toUpperCase());
    }


    // We assume that the default is Little Endian (that's the way it is in most modern systems)
    public hexToDec(str: string) {
        
        let txt: string = str;
        if(!Texth.isValidString(txt)) {

            return "";
        }

        if(Texth.isHexString(str)) {

            txt = txt.substr(2);
        }

        // Check if negative
        // @WIP This is not actually correct.
        // if(txt.charAt(0).toUpperCase() === 'F') {

        //     const tmp: string = txt.substr(1);
        //     let min: number = -15 * Math.pow(16, tmp.length);
            
        //     if(tmp.length > 0) {
        //         let num: number = parseInt(tmp, 16);
        //         min += num;
        //     }
        //     return min.toString();
        // }

        // let res: number = txt.toLowerCase().split('').reduce( (result, ch) => (result * 16 + HEX.indexOf(ch)), 0);
        return parseInt(txt, 16).toString();
    }
    //--------------------------------------------------------------

    public hexToDecBigEndian(str: string) {

        let txt: string = str;
        if(!Texth.isValidString(txt)) {

            return "";
        }
        return this.hexToDec(Texth.endianTransform(txt));
    }
    //--------------------------------------------------------------

    public decToHex(str: string) {

        let txt: string = str;
        if(!Texth.isValidString(txt)) {
            return "0x";
        }

        if(txt.charAt(0) === '-') {

            return Texth.endianTransform(this.negDecToHex(txt));
        }

        let num: number = parseInt(txt, 10);

        return Texth.addHex(num.toString(16).toUpperCase()); 
    }
    //--------------------------------------------------------------

    public decToHexBigEndian(str: string) {

        let txt: string = str;
        if(!Texth.isValidString(txt)) {
            return "0x";
        }

        if(txt.charAt(0) === '-') {

            return this.negDecToHex(txt);
        }

        let num: number = parseInt(txt, 10);

        return Texth.endianTransform(Texth.addHex(num.toString(16).toUpperCase()));
    }

}
//-------------------------------------------------------

export var Mathh: MathHelper = new MathHelper();
