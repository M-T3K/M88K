//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// import * as vscode from 'vscode';
// import * as myExtension from '../extension';

import Texth = require('../utils/TextUtil');
import Mathh = require('../utils/MathUtil');


suite("Text Helper Tests", () => {

    // Endian Change
    
    test("Test::TEXT::EndianChange::1", () => {
        assert.strictEqual( Texth.endianTransform("0x10101010"), "0x10101010");
    });
    test("Test::TEXT::EndianChange::2", () => {
        assert.strictEqual( Texth.endianTransform("0x40302010"), "0x10203040");
    });
    test("Test::TEXT::EndianChange::3", () => {
        assert.strictEqual( Texth.endianTransform("0x10203040"), "0x40302010");
    });
    test("Test::TEXT::EndianChange::4", () => {
        assert.strictEqual( Texth.endianTransform("0x78563412"), "0x12345678");
    });
    test("Test::TEXT::EndianChange::5", () => {
        assert.strictEqual( Texth.endianTransform("0x12345678"), "0x78563412");
    });

    // Add Hex
    test("Test::TEXT::AddHex::1", () => {
        assert.strictEqual( Texth.addHex(""), "0x");
    });
    test("Test::TEXT::AddHex::2", () => {
        assert.strictEqual( Texth.addHex("12345678"), "0x12345678");
    });
    test("Test::TEXT::AddHex::3", () => {
        assert.strictEqual( Texth.addHex("blaiawdlajwdawjdljiawdijalwjdlad"), "0xblaiawdlajwdawjdljiawdijalwjdlad");
    });

    // IsHexString
    test("Test::TEXT::IsHexString::1", () => {
        assert.strictEqual( Texth.isHexString("0x"), true);
    });
    test("Test::TEXT::IsHexString::2", () => {
        assert.strictEqual( Texth.isHexString("0x12345678"), true);
    });
    test("Test::TEXT::IsHexString::3", () => {
        assert.strictEqual( Texth.isHexString(""), false);
    });
    test("Test::TEXT::IsHexString::4", () => {
        assert.strictEqual( Texth.isHexString("false"), false);
    });

    // Remove Whitespace    
    
    test("Test::TEXT::RemoveWhitespace::1", () => {
        assert.strictEqual(Texth.removeWhitespace("false"), "false");
    });
    test("Test::TEXT::RemoveWhitespace::2", () => {
        assert.strictEqual(Texth.removeWhitespace("a a a ~ ! @ # $ % ^ & * ("), "aaa~!@#$%^&*(");
    });
    test("Test::TEXT::RemoveWhitespace::3", () => {
        assert.strictEqual(Texth.removeWhitespace("/t/n  /t/t/n/t/n"), "/t/n/t/t/n/t/n");
    });
    test("Test::TEXT::RemoveWhitespace::4", () => {
        assert.strictEqual(Texth.removeWhitespace("\t\n  \t\t\n\t\n"), "");
    });
    
    // IsValidString
    test("Test::TEXT::IsValidString::1", () => {
        assert.strictEqual( Texth.isValidString("false"), true);
    });
    test("Test::TEXT::IsValidString::2", () => {
        assert.strictEqual( Texth.isValidString("akdawd"), true);
    });
    test("Test::TEXT::IsValidString::3", () => {
        assert.strictEqual( Texth.isValidString("0xabcdef"), true);
    });
    test("Test::TEXT::IsValidString::4", () => {
        assert.strictEqual( Texth.isValidString("   \t \n"), false);
    });
    test("Test::TEXT::IsValidString::5", () => {
        assert.strictEqual( Texth.isValidString(""), false);
    });

    


});


suite("Math Helper Tests", () => {

    // Positive Dec to Hex
    test("Test::MATH::Dec->Hex::1", () => {
        assert.strictEqual( Mathh.decToHex("1"), "0x1");
    });
    test("Test::MATH::Dec->Hex::2", () => {
        assert.strictEqual( Mathh.decToHex("10"), "0xA");
    });
    test("Test::MATH::Dec->Hex::3", () => {
        assert.strictEqual( Mathh.decToHex("23"), "0x17");
    });
    test("Test::MATH::Dec->Hex::4", () => {
        assert.strictEqual( Mathh.decToHex("3840"), "0xF00");
    });
    test("Test::MATH::Dec->Hex::5", () => {
        assert.strictEqual( Mathh.decToHex("11259375"), "0xABCDEF");
    });
    
    // Negative Dec to Hex
    test("Test::MATH::-Dec->Hex::6", () => {
        assert.strictEqual( Mathh.decToHex("-1"), "0xFFFFFFFF" );
    });
    test("Test::MATH::-Dec->Hex::7", () => {
        assert.strictEqual( Mathh.decToHex("-10"), "0xF6FFFFFF");
    });
    test("Test::MATH::-Dec->Hex::8", () => {
        assert.strictEqual( Mathh.decToHex("-23"), "0xE9FFFFFF");
    });
    test("Test::MATH::-Dec->Hex::9", () => {
        assert.strictEqual( Mathh.decToHex("-3840"), "0x00F1FFFF");
    });
    test("Test::MATH::-Dec->Hex::10", () => {
        assert.strictEqual( Mathh.decToHex("-11259375"), "0x113254FF");
    });

    // Hex to Dec

    test("Test::MATH::Hex->Dec::1", () => {
        assert.strictEqual( Mathh.hexToDec("0x1"), "1");
    });
    test("Test::MATH::Hex->Dec::2", () => {
        assert.strictEqual( Mathh.hexToDec("0xA"), "10");
    });
    test("Test::MATH::Hex->Dec::3", () => {
        assert.strictEqual( Mathh.hexToDec("0x17"), "23");
    });
    test("Test::MATH::Hex->Dec::4", () => {
        assert.strictEqual( Mathh.hexToDec("0xF00"), "3840");
    });
    test("Test::MATH::Hex->Dec::5", () => {
        assert.strictEqual( Mathh.hexToDec("0xABCDEF"), "11259375");
    });

    //  Negative Hex to Dec
    test("Test::MATH::-Hex->Dec::6", () => {
        assert.strictEqual( Mathh.hexToDec("-0xFFFFFFFF"), "-1");
    });
    test("Test::MATH::-Hex->Dec::7", () => {
        assert.strictEqual( Mathh.hexToDec("-0xF6FFFFFF"), "-10");
    });
    test("Test::MATH::-Hex->Dec::8", () => {
        assert.strictEqual( Mathh.hexToDec("-0xE9FFFFFF"), "-23");
    });
    test("Test::MATH::-Hex->Dec::9", () => {
        assert.strictEqual( Mathh.hexToDec("-0x00F1FFFF"), "-3840");
    });
    test("Test::MATH::-Hex->Dec::10", () => {
        assert.strictEqual( Mathh.hexToDec("-0x113254FF"), "-11259375");
    });

});