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
