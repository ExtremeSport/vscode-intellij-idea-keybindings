export class KeystrokeKeyMapping {
    intellij: RegExp;
    vscode: string;

    constructor(intellij: string, vscode: string) {
        this.intellij = new RegExp(`\\b${intellij}\\b`, 'g'); // whole words only
        this.vscode = vscode;
    }
}
