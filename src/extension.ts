// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(constr: vscode.ExtensionContext) {

    /*  日付を挿入するサンプルプログラム  */
    /*  Ctrl + Shift + L で現在のカーソル位置に日付を挿入  */
    // let sample = vscode.commands.registerstrEditorCommand(
    //     'extension.sample',
    //     (editor, edit) => {
    //         let selection = editor.selection;
    //         let startLine = selection.start.line;
    //         let startCharacter = selection.start.character;

    //         if (!str) {
    //             edit.insert(new vscode.Position(startLine, startCharacter), str);
    //         }
    //     });

    let sample = vscode.commands.registerCommand('extension.sample', () => {
        inputBox();
    });
    constr.subscriptions.push(sample);
}

// this method is called when your extension is deactivated
export function deactivate() { }

export function inputBox() {
    let input = {
        password: false,
        value: ''
    };
    vscode.window.showInputBox(input).then(replace);
}

export function replace(str?: string) {
    const editor = vscode.window.activeTextEditor;

    if (typeof editor !== 'undefined') {
        let doc = editor.document.getText();

        editor.edit((edit) => {
            if (!str) {
                vscode.window.showErrorMessage('error');
            } else {
                edit.replace(new vscode.Range(0, 0, editor.document.lineCount + 1, 0), doc.split(str).join('変換しました'));
            }
        });
    }
}
