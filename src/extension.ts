

'use strict';

// VSCode Imports
import * as vscode from 'vscode';

// Aliases
import Commands           = vscode.commands;
import StatusBarAlignment = vscode.StatusBarAlignment;
import Window             = vscode.window;
import Workspace          = vscode.workspace;
// vscode.workspace.getConfiguration
// goConfig['buildOnSave'] && goConfig['buildOnSave'] !== 'off'


// My Imports
import { textTools } from "./TextTools";

export var mode: boolean;   // Endian mode, true => Little Endian | false => Big Endian
let statusBarItem: vscode.StatusBarItem = null;

function loadMode() {

    const m88kConfig = Workspace.getConfiguration("m88k");

    // @info The reason why we are using inverse logic here is so that
    // we are only calling on loadMode upon activation. At this time, 
    // we are also calling changeMode to create the statusBar items and 
    // all that. When changeMode is called, mode is switched. Thus, we 
    // need to inverse the mode upon load.
    if(m88kConfig["defaultEndianMode"] === "Little Endian") {
        mode = false;
    }
    else {
        mode = true;
    }

}

export function changeMode() {

    // First time will be upon activation and we dont want to change the mode.
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

    Commands.registerCommand("extension.m88k.textTools", textTools);
    Commands.registerCommand("extension.m88k.changeEndianMode", changeMode);

    loadMode(); // On Activation, we Load the Mode from settings.
    
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
