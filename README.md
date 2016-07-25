# Polscript README
This is a hightlight colorizer for polscript, to be used in Visual Code.<br> 
It's based on PHP language, and itsn't done yet. But is better than nothing.<br>
Please, be aware that this colorizer works better with some themes. In this screenshot, I've used the theme `Dark+ (default dark)`.
Others that i've already tested was `Monokai Dark Soda` and `Darktooth`

![highlight example](https://github.com/vitorfdl/polscript-vscode/raw/master/example.png)

### Install the extention
* You can install by typing `ext install polscript` in vscode (easy way)

## For Dev Contribution
Please, contribute if you can! Any help counts ! =] 

### Install the extention
* You can clone this repository to your folder <user home>/.vscode/extensions and restart code.

### What's in the folder
* This folder contains all of the files necessary for your extension
* `package.json` - this is the manifest file in which you declare your language support and define
the location of the grammar file that has been copied into you extension.
* `syntaxes/polscript.tmLanguage` - this is the Text mate grammar file that is used for tokenization
* `polscript.configuration.json` - this the language configuration, defining the tokens that are used for
comments and brackets.

### Make changes
* you can relaunch the extension from the debug toolbar after making changes to the files listed above
* you can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your extension to load your changes

### Add more language features
* To add features such as intellisense, hovers and validators check out the VS Code extenders documentation at
https://code.visualstudio.com/docs