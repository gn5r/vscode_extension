"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "sample" is now active!');
    let disposable = vscode.commands.registerCommand('extension.sample', () => {
        showInputBox();
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
function showInputBox() {
    let value = {
        password: false,
        value: ""
    };
    vscode.window.showInputBox(value).then(replace);
}
exports.showInputBox = showInputBox;
function replace(str) {
    const editor = vscode.window.activeTextEditor;
    if (typeof editor !== 'undefined') {
        let doc = editor.document;
        if (!str) {
            vscode.window.showErrorMessage('no strings');
        }
        else {
            editor.edit((edit) => {
                edit.replace(new vscode.Range(0, 0, doc.lineCount + 1, 0), doc.getText().split(str).join('置換'));
            });
        }
    }
}
exports.replace = replace;
//# sourceMappingURL=extension.js.map