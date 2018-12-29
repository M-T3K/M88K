
// VSCode Imports
import * as vscode from 'vscode';

import Window       = vscode.window;
import TextEditor   = vscode.TextEditor;
import TextDocument = vscode.TextDocument;

import { EventEmitter } from "events";

// @Wip : Working on this
export class Emulator {

    private sourceFile: string;
    private sourceCode: string[];

    public PC:  number;
    public ACC: number;
    public FL:  number;
    

    Emulator(file: string) {

        this.sourceFile = file;
    }

    public run() {

    }
}