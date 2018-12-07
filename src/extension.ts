

'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import Window = vscode.window;
import QuickPickItem = vscode.QuickPickItem;
import QuickPickOptions = vscode.QuickPickOptions;
import Document = vscode.TextDocument;
import Position = vscode.Position;
import Range = vscode.Range;
import Selection = vscode.Selection;
import TextDocument = vscode.TextDocument;
import TextEditor = vscode.TextEditor;


// This seems cool, but I dont quite like namespaces in TypeScript.
// Also, it seems like VSCode doesn't like TypeScript path mapping.
// Everytime I try to do an import from "@something" it just tells 
// me that the module cannot be resolved when I run the extension.

import { MathHelper } from "./utils/MathUtil";
import { TextHelper } from "./utils/TextUtil";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // console.log('Congratulations, your extension "m88k" is now active!');
    // Commands are specified on package.json
    let disposable = vscode.commands.registerCommand('extension.m88k.textTools', textTools);
    context.subscriptions.push(disposable);
}

// // Find out how to put this one in its own file
// @wip
// function hexToDec(txt: string) {

//     return "" + parseInt(txt, 16);
// }

// Function that we call to modify selected text.
function textTools() {

    // If no file is open
    if (!vscode.window.activeTextEditor) {

        vscode.window.showWarningMessage('Can\'t perform any text modifications if no file is open. Please, open a file.');
        return;
    }
    
    // We prep our variables
    let editor = Window.activeTextEditor;
    let doc    = Window.activeTextEditor.document;
    let S      = editor.selections;     // Array w/ selected text (multiple selections included)
    
    // Helper Objects

    let Texth: TextHelper = new TextHelper();
    let Mathh: MathHelper = new MathHelper();

    // If there's nothing selected
    if(S.length === 0) {

        vscode.window.showWarningMessage('Can\'t perform any text modifications if no text is selected.');    
    }

    // List of possible options in the QuickPick menu
	var opts: QuickPickOptions = { matchOnDescription: true, placeHolder: "What do you wish to do with the selected text?" };
    
    // List of Items inside the QuickPick menu
    var items: QuickPickItem[] = [];
    items.push({
        label: "endianTransform",
        description: "Converts selected text from one Endian to the other Endian." 
    });
    items.push({
        label: "addHex",
        description: "[1234] => [0x1234]" 
    });
    items.push({
        label: "hexToDecimal",
        description: "[0xab2] => [2738]" 
    });
    
    // Quick Pick Menu as a Promess
    Window.showQuickPick(items).then((selection) => {

        // If there's no selection...
        if(!selection) {

            return;
        }

        // We Convert to Little Endian

        if(selection.label === "endianTransform") {

            editor.edit(function (edit) {

                for(var i = 0; i < S.length; ++i) {

                    let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                    edit.replace(S[i], Texth.endianTransform(txt));
                }

            });

        }   
        if(selection.label === "addHex") {

            editor.edit(function (edit) {

                for(var i = 0; i < S.length; ++i) {

                    let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                    edit.replace(S[i], Texth.addHex(txt));
                }

            });
        }    

        // @Wip
        if(selection.label === "hexToDecimal") {

            editor.edit(function (edit) {

                for(var i = 0; i < S.length; ++i) {

                    let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                    edit.replace(S[i], Mathh.hexToDec(txt));
                }
            })

        }

    });             

}

// this method is called when your extension is deactivated
export function deactivate() {
}