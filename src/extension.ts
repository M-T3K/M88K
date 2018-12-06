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

// Import endian ?? -> Figure that out boii

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // console.log('Congratulations, your extension "m88k" is now active!');
    // Commands are specified on package.json
    let disposable = vscode.commands.registerCommand('extension.m88k.textTools', textTools);

    context.subscriptions.push(disposable);
}

// Find out how to put this one in its own file
// @opt : This is definetely not the fastest nor more efficient way of accomplishing this.
// This could be improved through binary shift operations
function endianTransform(txt: string) {

    var endians: string[] = [];

    // We keep the hex in place.
    var tmp: string = txt.substr(0, 2);
    let last = 0;
    if(tmp === "0x") {

        endians.push("0x"); 
        last = 2;
    }
    for(var i = txt.length - 2; i >= last; i -= 2) {

        tmp = txt.substr(i, 2);
        endians.push(tmp);
        // If it is already in hex form, we dont want to change that.
        // if(tmp.indexOf('x') != -1) {
            
        //     endians.push(tmp);  
        // }
        
    }
    return endians.join('');
}

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
    if(S.length == 0) {

        vscode.window.showWarningMessage('Can\'t perform any text modifications if no text is selected.');    
    }

    // List of possible options in the QuickPick menu
	var opts: QuickPickOptions = { matchOnDescription: true, placeHolder: "What do you wish to do with the selected text?" };
    
    // List of Items inside the QuickPick menu
    var items: QuickPickItem[] = [];
    items.push({
        label: "endianTransform",
        description: "Converts selected text from one Endian to the other Endian." 
    })
    items.push({
        label: "addHex",
        description: "[1234] => [0x1234]" 
    })
    
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
                    edit.replace(S[i], endianTransform(txt));
                }

            });

        }        

    });             

}

// This function takes a callback function for the text formatting 'formatCB', 
// if there are any args pass an array as 'argsCB'
function processSelection(e: TextEditor, d: TextDocument, sel: Selection[], formatCB, argsCB) {
	var replaceRanges: Selection[] = [];
	e.edit(function (edit) {
		// itterate through the selections
		for (var x = 0; x < sel.length; x++) {
			let txt: string = d.getText(new Range(sel[x].start, sel[x].end));
			if (argsCB.length > 0) {
				// in the case of figlet the params are test to change and font so this is hard coded
				// the idea of the array of parameters is to allow for a more general approach in the future
				txt = formatCB.apply(this, [txt, argsCB[0]]);
			} else {
				txt = formatCB(txt);
			}

			//replace the txt in the current select and work out any range adjustments
			edit.replace(sel[x], txt);
			let startPos: Position = new Position(sel[x].start.line, sel[x].start.character);
			let endPos: Position = new Position(sel[x].start.line + txt.split(/\r\n|\r|\n/).length - 1, sel[x].start.character + txt.length);
			replaceRanges.push(new Selection(startPos, endPos));
		}
	});
	e.selections = replaceRanges;
}


// this method is called when your extension is deactivated
export function deactivate() {
}