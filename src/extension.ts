

'use strict';

// VSCode Imports
import * as vscode from 'vscode';

// Aliases
import Commands           = vscode.commands;
import Window             = vscode.window;
import StatusBarAlignment = vscode.StatusBarAlignment;

// My Imports
import { textTools } from "./TextTools";
// import { Emulator } from "./emu/Emulator";

// function emulate() {

    // var emu = new Emulator();
    // Do the emulator stuff

// }

export var mode: boolean = false;   // Endian mode, true => Little Endian | false => Big Endian
let statusBarItem: vscode.StatusBarItem = null;

export function changeMode() {

    mode = !mode;

    if(mode === true) {
        
        statusBarItem.text    = 'Little Endian';
        statusBarItem.tooltip = 'M88K is currently in Little Endian Mode.';
    }
    else {

        statusBarItem.text    = 'Big Endian';
        statusBarItem.tooltip = 'M88K is currently in Big Endian Mode.';
    }
    
}
//-------------------------------------------------------

export function activate(context: vscode.ExtensionContext) {

    // @Check : This is inconsistent (Arrow functions and normal functions being used)
    Commands.registerCommand('extension.m88k.test', () => {
        Window.showInformationMessage('Successful Test');
    });

    Commands.registerCommand("extension.m88k.textTools", textTools);
    Commands.registerCommand("extension.m88k.changeEndianMode", changeMode);
    // Commands.registerCommand("m88k.launchEmulator", emulate);

    // Init
    // @Todo : Actually we shouldnt begin at an arbitrary Endianness; We should read from the User Settings.
    // https://github.com/Microsoft/vscode-extension-samples/blob/master/statusbar-sample/src/extension.ts
    statusBarItem = Window.createStatusBarItem(StatusBarAlignment.Right, 100);
    statusBarItem.command = 'extension.m88k.changeEndianMode';
    context.subscriptions.push(statusBarItem);
    changeMode();
    statusBarItem.show();
}
//-------------------------------------------------------

export function deactivate() {
    
}
//-------------------------------------------------------
