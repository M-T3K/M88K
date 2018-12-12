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


### Text Manipulation

The following functions manipulate selected text:

- **endianTransform**: Changes the endian mode of a hex number.
- **addHex**: Adds '0x' at the beginning of a string.
- **hexToDec**: Converts from Hexadecimal to Decimal. Modes: Little Endian, Big Endian
- **decToHex**: Converts from Decimal to Hexadecimal. Modes: Little Endian, Big Endian

## Planned Features

- Emulator/Interpreter with built-in debugger. [Currently Working on this]
- Code Snippets

## Extension Settings

### Text Manipulation Settings

This extension creates the setting `extension.m88k.textTools`, which opens a QuickPick menu to perform several of the text modification functions. It is planned to eventually have a full menu system where one can access different parts of the extension. You will not have to go through the main menu every time. Each of these sub-menus can be bound to a specific keybind.

## Known Issues

None yet.

## Release Notes

Only information about the last 3 updates are here. For more in-depth information, check our [changelog](https://github.com/M-T3K/M88K/blob/master/CHANGELOG.md).

### 0.1.2 - 12/12/18

- Fixed Commands so that they actually work

### 0.1.1 - 09/12/18

- Added the M88K-HK Standard to the readme file.
- Changed the way commands work.

### 0.1.0 - 08/12/18

- Syntax Highlighting has been completed. It should work with all custom themes.

---------------------------------------------------------------------------------------------

## Credits

I have used existing extensions to learn how to develop Visual Studio Code Extensions. Whereas I didn't copy their code, I did use it as a reference. Thus, I feel like these extensions and their creators deserve some credit.

- [MDTools](https://github.com/Microsoft/vscode-MDTools/)