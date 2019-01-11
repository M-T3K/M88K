
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
import Texth = require('./utils/TextUtil');
import Mathh = require('./utils/MathUtil');
import { mode } from './extension';


function hexToDecimalHandle(editor: TextEditor, doc: TextDocument, S: Selection[]) {

    if(mode === true) {

        editor.edit( edit =>  {

            for(let i = 0; i < S.length; ++i) {
    
                let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                edit.replace(S[i], Mathh.hexToDec(txt));
            }
        });
    }
    else {
        
        editor.edit( edit =>  {
    
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


        editor.edit( edit => {
    
            for(let i = 0; i < S.length; ++i) {
    
                let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                edit.replace(S[i], Mathh.decToHex(txt));
            }
        });
    }
    else {

        editor.edit( edit => {

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
    const editor = Window.activeTextEditor;
    const doc    = Window.activeTextEditor.document;
    const S      = editor.selections;     // Array w/ selected text (multiple selections included)
    
    // If there's nothing selected
    if(S.length === 0) {

        vscode.window.showWarningMessage('Can\'t perform any text modifications if no text is selected.');    
    }

    // List of possible options in the QuickPick menu
	const opts: QuickPickOptions = { matchOnDescription: true, placeHolder: "What do you wish to do with the selected text?" };
    
    // List of Items inside the QuickPick menu
    let items: QuickPickItem[] = [];
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
    Window.showQuickPick(items, opts).then((selection) => {

        // If there's no selection...
        if(!selection) {

            return;
        }

        // Handle Selections of QuickPick menu
        switch(selection.label) {

            case "endianTransform":
                editor.edit( edit => {

                    for(let i = 0; i < S.length; ++i) {

                        let txt: string = doc.getText(new Range(S[i].start, S[i].end));
                        edit.replace(S[i], Texth.endianTransform(txt));
                    }
                    
                });
                break;
            case "addHex":
                editor.edit( edit => {

                    for(let i = 0; i < S.length; ++i) {
                        
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
                console.log("Awww man, this shouldn't have happened :/");
            break;
        }

    });             

}
//-------------------------------------------------------
