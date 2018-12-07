// MATH


const HEX: string = "0123456789abcdef"; // All the possible values of a Hexadecimal Number

export class MathHelper {
    
    /**
    * hexToDec
    */
    public hexToDec(str: string) {
        
        //@cleanup: This code is copied over and over. Should do something about that.
        let txt: string = str.substr(0, 2);
        if(txt === "0x") {

            str = str.substr(2);
        }

        let res: number = str.toLowerCase().split('').reduce((result, ch) => (result * 16 + HEX.indexOf(ch)), 0);
        return res.toString();
    }
    //--------------------------------------------------------------
    
}
//-------------------------------------------------------

