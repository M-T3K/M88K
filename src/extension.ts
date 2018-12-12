

'use strict';

// VSCode Imports
import * as vscode from 'vscode';

// Aliases
import Commands = vscode.commands;
import Window   = vscode.window;

// My Imports
import { textTools } from "./TextTools";
// import { Emulator } from "./emu/Emulator";

// function emulate() {

    // var emu = new Emulator();
    // Do the emulator stuff

// }

export function activate(context: vscode.ExtensionContext) {

    Commands.registerCommand('extension.m88k.test', () => {
        Window.showInformationMessage('This is a test');
    });

    Commands.registerCommand("extension.m88k.textTools", textTools);
    // Commands.registerCommand("m88k.launchEmulator", emulate);
    
}
//-------------------------------------------------------

export function deactivate() {
    
}
//-------------------------------------------------------
