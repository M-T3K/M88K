# M88K 

This is an attempt to create a fully fledged IDE for the assembly language used by the Motorola 88K family of Microprocessors. So far it does not cover many features but eventually it will have everything that one may need, from Syntax Highlighting to a built-in emulator for this architecture.

This project's objective is to help me with some of the classes I'm taking. Ideally, it would make working with this type of assembly as comfortable as working with a higher-level language.

## **Features**

Currently it offers the following features:

### M88K-HK

Syntax Highlighting is built around the M88K-HK standard for the language (Which I created). This is the specification per-registry for this standard:

- r1 : Register that stores the return address so that you can go back to the previous instruction pointer.
- r2 & r3 : These registers are both reserved, and are to be used exclusively with MACROs.
- r4 a r10 : General Variable Registers.
- r11 a r16 : Registers to perform arithmetic.
- r17, r18, r19 : Logic registers to be used in comparisons.
- r20 a r24 : Reserved to be used exclusively to load Subroutine parameters.
- r25 a r28 : Auxilary Registers that can be used for any purpose whatsoever. 
- r29 : Reserved register to store the return value if any.
- r30, r31 : Both Reserved to perform operations with the Stack Pointer.

### Syntax Highlighting

- Complete Syntax Highlighting.
- Accepting requests [@Github](https://github.com/M-T3K/M88K/issues).

### Snippets

- Rich Code Snippets available for the most used instructions.

### Text Manipulation

The following functions manipulate selected text:

- **endianTransform**: Changes the endian mode of a hex number.
- **addHex**: Adds '0x' at the beginning of a string.
- **hexToDec**: Converts from Hexadecimal to Decimal.
- **decToHex**: Converts from Decimal to Hexadecimal.

### Global Endianness Mode

This extension supports Big Endian and Little Endian modes at the Global Scope. This means that all operations that require a specific mode use this setting to perform the operation.

## Planned Features / To Do

- Automation: You should be able to just call the command and see an inmediate result without any selections whatsoever.
- Matrix Generator: Generate Matrices based on input.
- Emulator/Interpreter with built-in debugger: An Emulator/Interpreter with Debugging capabilities.
- Live Syntax Error Detection.

## Extension Settings

### Text Manipulation Settings

This extension creates the setting `extension.m88k.textTools`, which opens a QuickPick menu to perform several of the text modification functions.

## Known Issues

- Conversion functions do not work properly with negative numbers.

## Release Notes

Only information about the last 3 updates are here. For more in-depth information, check our [changelog](https://github.com/M-T3K/M88K/blob/master/CHANGELOG.md).

### [0.3.0] - 02/01/2019

- Happy New Year. =)
- Added a Global Endian Mode. Now, instead of having to go through an additional submenu, all operations use this mode. This should make the extension much more user-friendly and VSCode-like.
- Encountered a bug with conversion functions: Negative number conversion does not work well.

### [0.2.0] - 12/12/18

- Snippets added.

### 0.1.2 - 12/12/18

- Fixed Commands so that they actually work.
- Fixed a bug with Syntax Highlighting's Regex. Now words ending in ':' will be highlighted correctly.


---------------------------------------------------------------------------------------------

## Credits

Originally I started only using [MDTools](https://github.com/Microsoft/vscode-MDTools/) as a starting point. However, by now I've taken a look at all the example extensions by the Visual Studio Code Team.