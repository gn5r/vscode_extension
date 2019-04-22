// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed



export function activate(context: vscode.ExtensionContext) {

    /*  日付を挿入するサンプルプログラム  */
    /*  Ctrl + Shift + L で現在のカーソル位置に日付を挿入  */
    let sample = vscode.commands.registerTextEditorCommand(
        'extension.sample',
        (editor, edit) => {
            let date = new Date;
            let dateString = "\x20" + date.toLocaleString('ja-JP', { era: 'long' }).split('西暦').join('');

            let selection = editor.selection;
            let startLine = selection.start.line;
            let startCharacter = selection.start.character;

            edit.insert(new vscode.Position(startLine, startCharacter), dateString);
        });
    context.subscriptions.push(sample);
}

// this method is called when your extension is deactivated
export function deactivate() { }
