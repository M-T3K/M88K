# M88K 

This is an attempt to create a fully fledged IDE for the assembly language used by the Motorola 88K family of Microprocessors. So far it does not cover many features but eventually it will have everything that one may need, from Syntax Highlighting to a built-in emulator for this architecture.

This project's objective is to help me with some of the classes I'm taking. Ideally, it would make working with this type of assembly as comfortable as working with a higher-level language.

Most of the features are tested using Mocha Unit Testing and should work as expected. If this is not the case, please refer to the **Known Issues** Section.

Version 0.5.0 has a lot of changes. I'm not going to be actively working on this extension anymore (So I won't push as many updates) due to lack of free time. It is expected that by version 0.9.0 every task in the todo list (except bug fixing) will be done, and 1.0.0 will simply be a bug fixing update to ensure that the extension works properly, and that it has as few bugs as possible. Ideally, by June 2019, we will have reached version 1.0.0, and I will consider this completed.

## Features

Currently it offers the following features:

### Syntax Highlighting

- Complete Syntax Highlighting.

#### M88K-HK

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

### Snippets

- Rich Code Snippets available for the most used instructions, MACROs, and repetitive code.

### Text Manipulation

The following functions manipulate selected text:

- **endianTransform**: Changes the endian mode of a hex number.
- **addHex**: Adds '0x' at the beginning of a string.
- **hexToDec**: Converts from Hexadecimal to Decimal. If it is a negative hexadecimal number you must have a negative sign '-' to specify that it is a negative number. Otherwise it won't work!
- **decToHex**: Converts from Decimal to Hexadecimal.

### Global Endianness Mode

This extension supports Big Endian and Little Endian modes at the Global Scope. This means that all functions will use this mode to provide a result.

## Planned Features / To Do

- Spanish Language Support: since most of the community that will be using this extension, I think it would be a good idea to have native Spanish support linked to either the language of the editor itself or a separate setting for the extension.
- Automation: You should be able to just call the command and see an inmediate result without any selections whatsoever.
- Matrix Generator: Generate Matrices based on input with support for random numbers.
- Instruction Counter: Counts all the instructions in a file.
- Intellisense & Live Syntax Error Detection.
- An Emulator/Interpreter with Debugging capabilities.

## Extension Settings

### Default Endian Mode

This extension creates the setting `m88k.defaultEndianMode` to specify the default endian mode to be used upon activation. By default, it is set to `Little Endian`.

## Known Issues

As of version 0.5.0 I have fixed all bugs/issues that I was aware of. I've tried to improve the quality of the code itself to ensure that it is faster, more maintanable, and of higher quality. If you encounter any bugs or glitches, or have any suggestions, please, tell me. I'm accepting requests [@Github](https://github.com/M-T3K/M88K/issues)

## Release Notes

Only information about the last 3 updates are here. For more in-depth information, check our [changelog](https://github.com/M-T3K/M88K/blob/master/CHANGELOG.md).

## Contributing

If you are looking to contribute, feel free to submit a Pull Request to the Repository on [Github](https://github.com/M-T3K/M88K/pulls). You should also check our [TO-DO list](https://github.com/M-T3K/M88K/blob/master/todo.txt).

### [0.5.0] - 03/01/2019

- Happy New Year. =)
- Added a Global Endian Mode. Now, instead of having to go through an additional submenu, all operations use this mode. This should make the extension much more user-friendly and VSCode-like. There is also a setting to select the default mode the extension uses (`m88k.defaultEndianMode`).
- Fixed a bug with conversion functions involving negative numbers. Now, in order to convert a negative Hexadecimal number to its decimal counterpart, you must add '-' before the number you are trying to convert.
- The Extension will now automatically activate if the m88k language is detected.
- Changed the Language Name from m88k assembly to M88K.
- Removed '.asm' from the list of valid language extensions.
- Autoclose and autosurround works with most types of braces.
- VSCode keybinds for comments now work fine.

### [0.2.0] - 12/12/18

- Snippets added.

### [0.1.2] - 12/12/18

- Fixed Commands so that they actually work.
- Fixed a bug with Syntax Highlighting's Regex. Now words ending in ':' will be highlighted correctly.

-------------------------------------------------------------------------------------------

## Credits

Originally I started only using [MDTools](https://github.com/Microsoft/vscode-MDTools/) as a starting point. However, by now I've taken a look at all the example extensions by the Visual Studio Code Team.