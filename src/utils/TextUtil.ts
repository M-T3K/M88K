
// TEXT

export class TextHelper {
    
    // @opt : This is definetely not the fastest nor more efficient way of accomplishing this.
    // This could be improved through binary shift operations
    public endianTransform(str: string) {
        
        var endians: string[] = [];
        
        // We keep the hex in place.
        var tmp: string = str.substr(0, 2);
        let last = 0;
        if(tmp === "0x") {
            
            endians.push("0x"); 
            last = 2;
        }
        for(var i = str.length - 2; i >= last; i -= 2) {
            
            tmp = str.substr(i, 2);
            endians.push(tmp);        
        }
        return endians.join('');
    }
    //--------------------------------------------------------------
    
    /**
    * addHex
    */
    public addHex(str: string) {
        
        return "0x".concat(str);
    }
    //--------------------------------------------------------------
    
}
//-------------------------------------------------------


