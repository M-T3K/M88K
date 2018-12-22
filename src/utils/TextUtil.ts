
// TEXT

export class TextHelper {
    

    public isValidString(str: string)  {

        return str.replace(/\s/g, '').length !== 0;
    }
    //--------------------------------------------------------------
    
    public isHexString(str: string) {

        return str.substr(0, 2) === "0x";
    }
    //--------------------------------------------------------------


    // @opt : This is definetely not the fastest nor more efficient way of accomplishing this.
    // This could be improved through binary shift operations
    public endianTransform(str: string) {
        
        var endians: string[] = [];
        
        // We keep the hex in place.
        let last = 0;
        if(this.isHexString(str)) {
            
            endians.push("0x"); 
            last = 2;
        }
        if(str.length < last + 3) {

            let tmp: string = str.substr(str.length - last - 2, 2);
            endians.push(tmp);
        }
        for(let i = str.length - 2; i >= last; i -= 2) {
            
            let tmp:string = str.substr(i, 2);
            endians.push(tmp);        
        }
        return endians.join('');
    }
    //--------------------------------------------------------------
    
    public addHex(str: string) {
        
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

