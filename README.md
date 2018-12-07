# M88K 

This is an attempt to create a fully fledged IDE for the assembly language used by Motorola 88K family of Microprocessor. So far it does not cover many features but eventually it will have everything that one may need, from Syntax Highlighting to a built-in emulator for this architecture.

## Features

Currently it only offers 2 functions:

- **endianTransform**: Changes the endian mode of a hex number.
- **addHex**: Adds '0x' at the beginning of a string.

There are other features planned, such as an emulator for this architecture.

## Extension Settings

This extension creates the setting `extension.m88k.textTools`, which opens a QuickPick menu to perform several of the text modification functions. It is planned to eventually have a full menu system where one can access different parts of the extension. You will not have to go through the main menu every time. Each of these sub-menus can be bound to a specific keybind.

## Known Issues

None yet.

## Release Notes


### 0.0.2 - 06/12/18

Fixed some issues regarding package.json

### 0.0.1 - 06/12/18

Initial release of M88K. Only **endianTransform** and **addHex** are available.

-----------------------------------------------------------------------------------------------------------

