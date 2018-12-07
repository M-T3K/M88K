# M88K 

This is an attempt to create a fully fledged IDE for the assembly language used by Motorola 88K family of Microprocessor. So far it does not cover many features but eventually it will have everything that one may need, from Syntax Highlighting to a built-in emulator for this architecture.

## Table of Contents
- [M88K](#m88k)
    - [Table of Contents](#table-of-contents)
    - [Features](#features)
        - [Text Manipulation](#text-manipulation)
    - [Future Updates](#future-updates)
    - [Extension Settings](#extension-settings)
        - [Text Manipulation Settings](#text-manipulation-settings)
    - [Known Issues](#known-issues)
    - [Release Notes](#release-notes)
        - [0.0.4 - 07/12/18](#004---071218)
        - [0.0.3 - 07/12/18](#003---071218)
        - [0.0.2 - 06/12/18](#002---061218)
        - [0.0.1 - 06/12/18](#001---061218)

## Features

Currently it only offers the following features:

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

For more in-depth information, check our [changelog](https://github.com/M-T3K/M88K/blob/master/CHANGELOG.md).

### 0.0.4 - 07/12/18
- Updated the Readme. (I forgot, I apologize)

### 0.0.3 - 07/12/18

- Added a Hexadecimal to Decimal and viceversa converter functions as part of the Math Utilities. These are fully accessible through the Text Manipulation Quick Menu.
- Fixed all bugs encountered.

### 0.0.2 - 06/12/18

- Fixed some issues regarding package.json

### 0.0.1 - 06/12/18

- Initial release of M88K. Only **endianTransform** and **addHex** are available.

-----------------------------------------------------------------------------------------------------------
