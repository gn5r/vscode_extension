import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "sample" is now active!');

	let disposable = vscode.commands.registerCommand('extension.sample', () => {
		showInputBox();
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }

export function showInputBox() {
	let value = {
		password: false,
		value: ""
	};

	vscode.window.showInputBox(value).then(replace);
}

export function replace(str?: string) {
	const editor = vscode.window.activeTextEditor;

	if (typeof editor !== 'undefined') {
		let doc = editor.document;

		if (!str) {
			vscode.window.showErrorMessage('no strings');
		} else {
			editor.edit((edit) => {
				edit.replace(new vscode.Range(0, 0, doc.lineCount + 1, 0), doc.getText().split(str).join('置換'));
			});
		}
	}
}
