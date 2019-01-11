import { strictEqual } from "assert";

// TEXT

// Utility Functions

export function removeWhitespace(str: string): string {
    return str.replace(/\s/g, '');
}
//--------------------------------------------------------------

export function isValidString(str: string): boolean  {

    return removeWhitespace(str).length !== 0;
}
//--------------------------------------------------------------
    

export function isHexString(str: string): boolean {

    return str.substr(0, 2) === "0x";
}
//--------------------------------------------------------------


// @opt : This is definetely not the fastest nor more efficient way of accomplishing this.
// This could be improved through binary shift operations
export function endianTransform(str: string): string {
        
    let endians: string[] = [];
        
    if(!isValidString(str)) {

        return "";
    }
    str = removeWhitespace(str);

    // We keep the hex in place.
    let last = 0;
    if(this.isHexString(str)) {
            
        endians.push("0x"); 
        last = 2;
    }
    if(str.length < last + 3) {

        const tmp: string = str.substr(str.length - last - 2, 2);
        endians.push(tmp);
    }
    for(let i = str.length - 2; i >= last; i -= 2) {
            
        const tmp: string = str.substr(i, 2);
        endians.push(tmp);        
    }
    return endians.join('');
}
//--------------------------------------------------------------
    
export function addHex(str: string): string {
        
    return "0x".concat(str);
}
//--------------------------------------------------------------
