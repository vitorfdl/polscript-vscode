# Polscript Extension for Visual Studio Code

The Polscript extension provides syntax highlighting for the Polscript language within Visual Studio Code. It's an actively developed extension that's both functional and designed to enhance your programming experience.

For the best results, we recommend using specific themes that complement the syntax highlighting provided by this extension. Below are examples of the Polscript extension used with the `Dark+ (default dark)` theme. Compatibility and visual appeal have also been confirmed with themes such as `Monokai Dark Soda` and `Darktooth`.

![Polscript syntax with Dark+ theme](https://github.com/vitorfdl/polscript-vscode/raw/master/example.png) 
![Polscript syntax with Darktooth theme](https://github.com/vitorfdl/polscript-vscode/raw/master/examplecfg.png)

## Release Notes

### Versions 3.0.0 & 3.0.1
- Overhauled syntax highlighting to align with industry best practices, courtesy of insights from GPT-4.
- Enhanced .cfg file recognition.
- Refined highlighting for Arrays, Structs, and Dictionaries for better readability.

## Getting Started

### Quick Install
Execute `ext install polscript` within the command palette (`Ctrl+P`) to install quickly.

## Get Involved
Your contributions are highly appreciated! We welcome contributions of all forms and sizes. 

### Manual Setup
For manual installation:
1. Clone the repository into your `<user home>/.vscode/extensions` directory.
2. Restart Visual Studio Code to activate the extension.

### Repository Structure
The repository is organized as follows:
- `package.json` - Declares language support and specifies the grammar file location.
- `syntaxes/polscript.tmLanguage` - The TextMate grammar file responsible for tokenization.
- `polscript.configuration.json` - Contains language configurations for tokens related to comments and brackets.

### Developing
To contribute changes:
1. Make your modifications to the files mentioned above.
2. Launch the extension using the debug toolbar in Visual Studio Code to test your changes.
3. To apply and review your changes, reload the Visual Studio Code window with the extension (`Ctrl+R` or `Cmd+R` for Mac).

### Enhancing Language Features
For adding advanced language features like IntelliSense, hover information, or validators, please consult the [VS Code Extension API documentation](https://code.visualstudio.com/docs).