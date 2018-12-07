# M88K 

This is an attempt to create a fully fledged IDE for the assembly language used by the Motorola 88K family of Microprocessors. So far it does not cover many features but eventually it will have everything that one may need, from Syntax Highlighting to a built-in emulator for this architecture.

This project's objective is to help me with some of the classes I'm taking. Ideally, it would make working with this type of assembly as comfortable as working with a higher-level language.

## **Features**

Currently it offers the following features:

### Syntax Highlighting

Syntax Highlighting is available, and almost complete. You need to configure the extension to work with the extension you want from within Visual Studio Code for Syntax highlighting to work. 
If you have a request, please, comment on the github page.

### Text Manipulation

The following functions manipulate selected text:

- **endianTransform**: Changes the endian mode of a hex number.
- **addHex**: Adds '0x' at the beginning of a string.
- **hexToDec**: Converts from Hexadecimal to Decimal. Modes: Little Endian, Big Endian
- **decToHex**: Converts from Decimal to Hexadecimal. Modes: Little Endian, Big Endian

## Future Updates
There are other features planned, such as an emulator for this architecture.

## Extension Settings

### Text Manipulation Settings

This extension creates the setting `extension.m88k.textTools`, which opens a QuickPick menu to perform several of the text modification functions. It is planned to eventually have a full menu system where one can access different parts of the extension. You will not have to go through the main menu every time. Each of these sub-menus can be bound to a specific keybind.

## Known Issues

None yet.

## Release Notes

Only information about the last 3 updates are here. For more in-depth information, check our [changelog](https://github.com/M-T3K/M88K/blob/master/CHANGELOG.md).

### 0.1.0 - 08/12/18

- Syntax Highlighting has been completed. It should work with all custom themes.

### 0.0.6 - 07/12/18

- Several bug fixes. 
- Syntax Highlighting works now !

### 0.0.5 - 07/12/18

- Basic Syntax Highlighting Added

-----------------------------------------------------------------------------------------------------------

## Credits

I have used existing extensions to learn how to develop Visual Studio Code Extensions. Whereas I didn't copy their code, I did use it as a reference. Thus, I feel like these extensions and their creators deserve some credit.

- [MDTools](https://github.com/Microsoft/vscode-MDTools/)