import { strictEqual } from "assert";

// TEXT

export class TextHelper {
    
    public removeWhitespace(str: string): string {
        
        return str.replace(/\s/g, '');
    }
    //--------------------------------------------------------------

    public isValidString(str: string): boolean  {

        return this.removeWhitespace(str).length !== 0;
    }
    //--------------------------------------------------------------
    
    public isHexString(str: string): boolean {

        return str.substr(0, 2) === "0x";
    }
    //--------------------------------------------------------------


    // @opt : This is definetely not the fastest nor more efficient way of accomplishing this.
    // This could be improved through binary shift operations
    public endianTransform(str: string): string {
        
        let endians: string[] = [];
        
        if(!Texth.isValidString(str)) {

            return "";
        }
        str = Texth.removeWhitespace(str);

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
    
    public addHex(str: string): string {
        
        return "0x".concat(str);
    }
    //--------------------------------------------------------------
    
}
//-------------------------------------------------------

// Maybe it's my C++ kicking in, but this is the right way to do it
// Essentially we are simulating a singleton without actually going 
// through all the hastle of making one. I'd rather create one than
// constantly create new ones.
export var Texth: TextHelper = new TextHelper();

