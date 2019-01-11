// MATH

// Imports
import Texth = require('./TextUtil');

// Constants
export const HEX: string = "0123456789abcdef"; // All the possible values of a Hexadecimal Number
export const UINT_MAX_HEX_32: number = 0xFFFFFFFF;  // Max Value of an unsigned 32 big Integer.

    
function negDecToHex(str: string): string {
        
    let num: number = parseInt(str.substr(1), 10);
    num = UINT_MAX_HEX_32 - num;
    // Due to how 2's complement works, we need to + 1
    num++;

    // The result is in Big Endian by default. The reason is that it is substracting
    // from the right. We need to call on endian transform.
    return Texth.addHex(num.toString(16).toUpperCase());
}


    // We assume that the default is Little Endian (that's the way it is in most modern systems)
export function hexToDec(str: string): string {
        
    let txt: string  = str;
    let neg: boolean = false;

    if(!Texth.isValidString(txt)) {
        return "";
    }

    txt = Texth.removeWhitespace(txt);
        
    if(txt.charAt(0) === '-') {
        neg = true;
        txt = txt.substr(1);
    }

    if(Texth.isHexString(txt)) {
        txt = txt.substr(2);
    }

    // @info Aight, so this is the issue
    // it is impossible to check if a number is negative consistently 
    // without an implicit '-' sign, unless it is written in binary
    // where the sign is the first bit of the first byte. 
    // With other bases, this works for all numbers that can be expressed 
    // within a multiple of 4 bytes.
    // Thus, we are explicitly checking for a negative sign.

    if(neg) {
        let num: number = parseInt(Texth.endianTransform(txt), 16);
        num = UINT_MAX_HEX_32 - num + 1; 
        num *= -1;
        return num.toString(10);
    }

    return parseInt(txt, 16).toString();
}
//--------------------------------------------------------------

export function hexToDecBigEndian(str: string): string {

    let txt: string  = str;
    let neg: boolean = false;

    if(!Texth.isValidString(txt)) {
        return "";
    }

    txt = Texth.removeWhitespace(txt);

    if(txt.charAt(0) === '-') {
        neg = true;
        txt = txt.substr(1);
    }

    if(Texth.isHexString(txt)) {
        txt = txt.substr(2);
    }

    // @CleanUp: This code is repetitive. Maybe we could find a way to avoid 
    // repetition.

    if(neg) {
        let num: number = parseInt(txt, 16);
        num = UINT_MAX_HEX_32 - num + 1; 
        num *= -1;
        return num.toString(10);
    }

    return parseInt(txt, 16).toString();
}
//--------------------------------------------------------------

export function decToHex(str: string): string {

    let txt: string = str;
    if(!Texth.isValidString(txt)) {
        return "0x";
    }
    txt = Texth.removeWhitespace(txt);

    if(txt.charAt(0) === '-') {

        return Texth.endianTransform(negDecToHex(txt));
    }

    const num: number = parseInt(txt, 10);

    return Texth.addHex(num.toString(16).toUpperCase()); 
}
//--------------------------------------------------------------

export function decToHexBigEndian(str: string): string {

    let txt: string = str;
    if(!Texth.isValidString(txt)) {
        return "0x";
    }
        
    txt = Texth.removeWhitespace(txt);

    if(txt.charAt(0) === '-') {

        return negDecToHex(txt);
    }

    const num: number = parseInt(txt, 10);

    return Texth.endianTransform(Texth.addHex(num.toString(16).toUpperCase()));
}