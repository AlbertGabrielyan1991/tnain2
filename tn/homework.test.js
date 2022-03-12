const {reverseTheNumber,isPalindrom,isBlank,stringToArray,abbreviateName,titleCase,appendChar,isLastDigitsSame,swapCharacters} = require('./homework')



describe('Primitive Types',function () {
    /**
     1. Write a functiontion that reverses a number
     */

    describe('1. reverse the Number',()=>{
        test('1. reverse',()=>{
            expect(reverseTheNumber(45677)).toBe(77654);
        })

        test('2. reverse', ()=>{
            expect(reverseTheNumber(47890)).toBe(9874);
        })
    })


    describe('2. is palindrom',()=>{

        test("1. palindrom" ,()=>{
            expect( isPalindrom("madam")).toBeTruthy()
        })
        test("2. palindrom",()=>{
            expect(isPalindrom("nurse")).toBeFalsy()
        })

    })

    describe('3. whether or not the input string is blank',()=>{
        test('1.string is blank',()=>{
            expect(isBlank("")).toBeTruthy()
        })
        test('2.string is blank',()=>{
            expect(isBlank("madam")).toBeFalsy()
        })
    })

    describe('4. split a string and covert it into an array ',()=>{
        test('1.split',()=>{
            expect(stringToArray("Web Development")).toEqual(["Web", "Development"]);
        })
        test('2.split',()=>{
            expect(stringToArray("")).toEqual([]);
        })
    })

    describe('5.  persons first and last names ',()=>{
        test('1.first and last names',()=>{
            expect(abbreviateName("Jon Doe")).toEqual('Jon D');
        })
        test('2.first and last names',()=>{
            expect(abbreviateName("Jon")).toEqual('Jon');
        })
    })


    describe('6.  function to convert an input string to title case ',()=>{
        test('1.title case',()=>{
            expect(titleCase("JavaScript exercise. Python exercise")).toEqual("Javascript Exercise. Python Exercise");
        })
    })

    describe('7. create new string from a given string with the first character of the given string  ',()=>{
        test('1.given string',()=>{
            expect(appendChar("Swift")).toEqual("sSwifts");
        })
    })

    describe('8. check whether the last digits of the given positive integers is same',()=>{
        test('1.last digits',()=>{
            expect(isLastDigitsSame(134, 34, 4564)).toBeTruthy()
        })
        test('2.last digits',()=>{
            expect(isLastDigitsSame(133, 343,34,343,5666)).toBeFalsy()
        })
    })

    describe('9. JavaScript program to change the characters  ',()=>{
        test('change the characters ',()=>{
            expect(swapCharacters("web development")).toEqual("dvy wvevolknvmg");
        })
    })

})