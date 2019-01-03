# Change Log

All notable changes to the "m88k" extension will be documented in this file.

## [0.3.0] - 03/01/2019

- Happy New Year. =)
- Added a Global Endian Mode. Now, instead of having to go through an additional submenu, all operations use this mode. This should make the extension much more user-friendly and VSCode-like.
- Encountered a bug with conversion functions: Negative number conversion does not work well.
- Removed '.asm' from the list of valid language extensions.
- Changed Language Name from m88k assembly to M88K.
- Added an activation event so that the extension automatically activates when the language
    is M88K.
- Added Unit Testing to quickly test small functions and prevent bugs.
- General Refactoring of the project's structure.
- @Feature: autoclose and autosurround works with most types of braces.
- Added a setting for the Default Endianness that should be used upon activation.
- Added a RemoveWhitespace() function for internal use. Added Whitespace removal to all
  functions that may need it.
- Added a todo file to make life easier and keep track of things.

## [0.2.0]

- Snippets added.

## [0.1.2]

- Rewrote Code Structure.
- FIX: Commands should be fixed. Added 'M88K :: TEST()' command. Should print "Successful Test".
- Improved Syntax Highlighting.
- Fixed a bug with Syntax Highlighting's Regex. Now words ending in ':' will be highlighted correctly.

## [0.1.1]

- Added the M88K-HK Standard to the readme file.
- Changed the way commands work.

## [0.1.0]

- Syntax Highlighting has been completed. It should work with all custom themes.

## [0.0.6]

- Fixed a bug that added an extra "0x" when performing decToHex in Big Endian mode.
- Fixed a bug that made decToHex not work properly with 1 digit numbers.
- Fixed Syntax Highlighting. It should work now.

## [0.0.5]

- Added basic syntax Highlighting.

## [0.0.4]

- I updated the Readme file, which I had previously forgotten.

## [0.0.3]

- Added a Hexadecimal to Decimal and viceversa converter functions as part of the Math Utilities. These are fully accessible through the Text Manipulation Quick Menu.
- Improved the organization of the source code.
- Fixed all bugs encountered.

## [0.0.2]

- Fixed some issues regarding `package.json`
- Fixed bug where you couldn't have '0x' as part of the number you wanted to operate with.

## [0.0.1]

- Initial release