// MATH


const HEX: string = "0123456789abcdef"; // All the possible values of a Hexadecimal Number

import { Texth } from "./TextUtil";

export class MathHelper {
    
    // We assume that the default is Little Endian (that's the way it is in most modern systems)
    public hexToDec(str: string) {
        
        let txt: string = str;
        if(!Texth.isValidString(txt)) {

            return "";
        }

        if(Texth.isHexString(str)) {

            txt = txt.substr(2);
        }

        // // Check if negative
        if(txt.charAt(0).toUpperCase() === 'F') {

            const tmp: string = txt.substr(1);
            let min: number = -15 * Math.pow(16, tmp.length);
            
            if(tmp.length > 0) {
                let num: number = parseInt(tmp, 16);
                min += num;
            }
            return min.toString();
        }

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

        // We check if negative
        // @Wip I dont know what Im doing
        if(txt.charAt(0) === '-') {
            const tmp: string = txt.substr(1);
            let num: number = parseInt(tmp, 10);
            let mul: number = ((num - 1) | 15) + 1; // Nearest Multiple of 16
            let fs: string = "F";
            let n: number = mul - num;
            while(mul >= 1) {

                mul /= 16;
                fs.concat("F");
            }
            return Texth.addHex(fs.concat(n.toString(16).concat("0")));
        }

        return Texth.addHex(parseInt(txt, 10).toString(16));
    }
    //--------------------------------------------------------------

    public decToHexBigEndian(str: string) {

        let txt: string = str;
        if(!Texth.isValidString(txt)) {

            return "0x";
        }
        txt = parseInt(str, 10).toString(16);
        return Texth.addHex(Texth.endianTransform(txt));
    }

}
//-------------------------------------------------------

export var Mathh: MathHelper = new MathHelper();
