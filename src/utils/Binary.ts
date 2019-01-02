
// Imports

// Interfaces

// Class

export class Binary {

    num: number[];  // num as an array
    neg: boolean = false;

    constructor(n: number) {
        
        if(n < 0) {
            n *= -1;
            this.neg = true;
        }

        let str: string = n.toString(2);
        for(let i: number = 0; i < str.length; ++i) {

            let ch: string = str.charAt(i);
            this.num.push(parseInt(ch));
            
        }

        if(this.neg) {

            this.changeSign();
        }

    }
    //------------------------------------------------------------

    public getLength() {

        return this.num.length;
    }
    //------------------------------------------------------------

    public add(n: number) {

        let addNumber = new Binary(n);

        if(addNumber.getLength() > this.getLength()) {

            let tmp = new Binary(n);
            addNumber.num = this.num;
            this.num = tmp.num;
        }

        let carry: boolean = false;
        let res: number[];

        for(let i: number = this.getLength(); i >= 0; --i) {

            let num1: number = this.num[i];
            let num2: number = addNumber.num[i];
            
            num1 += num2;
            if(carry) {

                ++num1;
                carry = false;
            }
            if(num1 >= 2) {

                num1 = 0;
                carry = true;
            }

            res.push(num1);
        }

        this.num = res;
    }
    //------------------------------------------------------------

    public negate() {

        let tmp: number[] = this.num;
        for(let i: number = 0; i < this.getLength(); ++i) {

            if(tmp[i] === 1) {
                tmp[i] = 0;
            }
            else {
                tmp[i] = 1;
            }
        }

        this.num = tmp;
    }
    //------------------------------------------------------------

    public changeSign() {

        this.negate();
        this.add(1);
    }
    //------------------------------------------------------------

    public toHexString() {

        let str: string = this.num.toString();

        return parseInt(str, 2).toString(16);   // This should work, right?
    }
    //------------------------------------------------------------

}