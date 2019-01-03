//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// import * as vscode from 'vscode';
// import * as myExtension from '../extension';

import { Texth } from "../utils/TextUtil";


suite("Text Helper Tests", () => {

    // Endian Change
    
    test("Test::EndianChange::1", () => {
        assert("0x10101010", Texth.endianTransform("0x10101010"));
    });
    test("Test::EndianChange::2", () => {
        assert("0x10203040", Texth.endianTransform("0x40302010"));
    });
    test("Test::EndianChange::3", () => {
        assert("0x40302010", Texth.endianTransform("0x10203040"));
    });
    test("Test::EndianChange::4", () => {
        assert("0x12345678", Texth.endianTransform("0x87654321"));
    });
    test("Test::EndianChange::5", () => {
        assert("0x87654321", Texth.endianTransform("0x12345678"));
    });

    // Add Hex
    test("Test::AddHex::1", () => {
        assert("0x", Texth.addHex(""));
    });
    test("Test::AddHex::2", () => {
        assert("0x12345678", Texth.addHex("12345678"));
    });
    test("Test::AddHex::3", () => {
        assert("0xblaiawdlajwdawjdljiawdijalwjdlad", Texth.addHex("blaiawdlajwdawjdljiawdijalwjdlad"));
    });

});