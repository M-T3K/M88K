
// VSCode Imports
import * as vscode from 'vscode';

import Window = vscode.window;
import QuickPickItem = vscode.QuickPickItem;
import QuickPickOptions = vscode.QuickPickOptions;
import Range = vscode.Range;
import Selection = vscode.Selection;
import TextDocument = vscode.TextDocument;
import TextEditor = vscode.TextEditor;

// My Imports
import { Texth } from "./utils/TextUtil";
import { Mathh } from "./utils/MathUtil";
import { mode } from './extension';


function hexToDecimalHandle(editor: TextEditor, doc: TextDocument, S: Selection[]) {

    if(mode === true) {

        editor.edit(function (edit)  {

            for(let i = 0; i < S.length; ++i) {
    
                let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                edit.replace(S[i], Mathh.hexToDec(txt));
            }
        });
    }
    else {
        
        editor.edit(function (edit)  {
    
            for(let i = 0; i < S.length; ++i) {
    
                let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                edit.replace(S[i], Mathh.hexToDecBigEndian(txt));
            }
        });
    }
}
//-------------------------------------------------------

function decToHexHandle(editor: TextEditor, doc: TextDocument, S: Selection[]) {

    if(mode === true) {


        editor.edit(function (edit)  {
    
            for(let i = 0; i < S.length; ++i) {
    
                let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                edit.replace(S[i], Mathh.decToHex(txt));
            }
        });
    }
    else {

        editor.edit(function (edit)  {

            for(let i = 0; i < S.length; ++i) {
    
                let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                edit.replace(S[i], Mathh.decToHexBigEndian(txt));
            }
        });
    }
}
//-------------------------------------------------------

export function textTools() {

    // If no file is open
    if (!vscode.window.activeTextEditor) {

        vscode.window.showWarningMessage('Can\'t perform any text modifications if no file is open. Please, open a file.');
        return;
    }
    
    // We prep our variables
    // @opt these 'let' can probably be 'const'
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
                console.log("Awww man, this shouldn't have happened :/");
            break;
        }

    });             

}
//-------------------------------------------------------
