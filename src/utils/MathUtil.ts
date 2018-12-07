// MATH


const HEX: string = "0123456789abcdef"; // All the possible values of a Hexadecimal Number

import { Texth } from "./TextUtil";

export class MathHelper {
    
    // Converts a Hexadecimal to its decimal value.
    public hexToDec(str: string) {
        
        let txt: string = str;
        if(Texth.isHexString(str)) {

            txt = txt.substr(2);
        }

        let res: number = txt.toLowerCase().split('').reduce((result, ch) => (result * 16 + HEX.indexOf(ch)), 0);
        return res.toString();
    }
    //--------------------------------------------------------------
    
}
//-------------------------------------------------------

export var Mathh: MathHelper = new MathHelper();
