

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

import { Mathh } from "./utils/MathUtil";
import { Texth } from "./utils/TextUtil";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // console.log('Congratulations, your extension "m88k" is now active!');
    // Commands are specified on package.json
    let disposable = vscode.commands.registerCommand('extension.m88k.textTools', textTools);
    context.subscriptions.push(disposable);
}
//-------------------------------------------------------

function hexToDecimalHandle(editor: TextEditor, doc: TextDocument, S: Selection[]) {

    // Only alive for this scope
	let subOpts: QuickPickOptions = { matchOnDescription: true, placeHolder: "Which mode would you like to use to perform the operation?" };
    let subItems: QuickPickItem[] = [];
    subItems.push({
        label: "LittleEndian",
        description: "Performs the Chosen operation in LittleEndian mode." 
    });
    subItems.push({
        label: "BigEndian",
        description: "Performs the Chosen operation in BigEndian mode." 
    });

    Window.showQuickPick(subItems).then(selection => {

        if(selection.label === "LittleEndian") {

            editor.edit(function (edit)  {

                for(let i = 0; i < S.length; ++i) {

                    let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                    edit.replace(S[i], Mathh.hexToDec(txt));
                }
            });
        }
        else if (selection.label === "BigEndian") {

            editor.edit(function (edit)  {

                for(let i = 0; i < S.length; ++i) {

                    let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                    edit.replace(S[i], Mathh.hexToDecBigEndian(txt));
                }
            });
        }
        else {

            console.log("This should not have occurred.");
        }
    });

    
}
//-------------------------------------------------------

function decToHexHandle(editor: TextEditor, doc: TextDocument, S: Selection[]) {

    // Only alive for this scope
	let subOpts: QuickPickOptions = { matchOnDescription: true, placeHolder: "Which mode would you like to use to perform the operation?" };
    let subItems: QuickPickItem[] = [];
    subItems.push({
        label: "LittleEndian",
        description: "Performs the Chosen operation in LittleEndian mode." 
    });
    subItems.push({
        label: "BigEndian",
        description: "Performs the Chosen operation in BigEndian mode." 
    });

    Window.showQuickPick(subItems).then(selection => {

        if(selection.label === "LittleEndian") {

            editor.edit(function (edit)  {

                for(let i = 0; i < S.length; ++i) {

                    let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                    edit.replace(S[i], Mathh.decToHex(txt));
                }
            });
        }
        else if (selection.label === "BigEndian") {

            editor.edit(function (edit)  {

                for(let i = 0; i < S.length; ++i) {

                    let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                    edit.replace(S[i], Mathh.decToHexBigEndian(txt));
                }
            });
        }
        else {

            console.log("This should not have occurred.");
        }
    });

    
}
//-------------------------------------------------------

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
    items.push({
        label: "decToHex",
        description: "[2738] => [0xab2]" 
    });
    
    // Quick Pick Menu as a Promess
    Window.showQuickPick(items).then((selection) => {

        // If there's no selection...
        if(!selection) {

            return;
        }

        // Handle Selections of QuickPick menu
        switch(selection.label) {

            case "endianTransform":
                editor.edit(function (edit) {

                    for(var i = 0; i < S.length; ++i) {

                        let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                        edit.replace(S[i], Texth.endianTransform(txt));
                    }
                    
                });
                break;
            case "addHex":
                editor.edit(function (edit) {

                    for(var i = 0; i < S.length; ++i) {
                        
                        let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                        edit.replace(S[i], Texth.addHex(txt));
                    }
                    
                });
                break;
            case "hexToDecimal":
                hexToDecimalHandle(editor, doc, S);
                break;
            case "decToHex":
                decToHexHandle(editor, doc, S);
                break;
            default:
                // Window.showErrorMessage("This should not have happened.");
                console.log("This should not have occurred.");
            break;
        }

    });             

}
//-------------------------------------------------------

// this method is called when your extension is deactivated
export function deactivate() {
}
//-------------------------------------------------------
