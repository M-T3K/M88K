
// VSCode Imports
import * as vscode from 'vscode';

import Window       = vscode.window;
import TextEditor   = vscode.TextEditor;
import TextDocument = vscode.TextDocument;

import { EventEmitter } from "events";

export class Emulator {

    private sourceFile: string;
    private sourceCode: string[];

    Emulator(file: string) {

        this.sourceFile = file;
    }

    public run() {

    }
}