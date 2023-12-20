const vscode = require('vscode');

const methodCompletions = [
  {
    label: 'addcharacter',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Add a character to the list',
    insertText: new vscode.SnippetString('addcharacter(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'ban',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Ban a user',
    insertText: new vscode.SnippetString('ban(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'checkpassword',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Check the password',
    insertText: new vscode.SnippetString('checkpassword(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'delete',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Delete an item',
    insertText: new vscode.SnippetString('delete(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'deletecharacter',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Delete a character from the list',
    insertText: new vscode.SnippetString('deletecharacter(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'disable',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Disable a feature',
    insertText: new vscode.SnippetString('disable(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'enable',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Enable a feature',
    insertText: new vscode.SnippetString('enable(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'eraseprop',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Erase a property',
    insertText: new vscode.SnippetString('eraseprop(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'get_member',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Get a member',
    insertText: new vscode.SnippetString('get_member(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'getcharacter',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Get a character',
    insertText: new vscode.SnippetString('getcharacter(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'getprop',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Get a property',
    insertText: new vscode.SnippetString('getprop(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'move_char',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Move a character',
    insertText: new vscode.SnippetString('move_char(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'propnames',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Get property names',
    insertText: new vscode.SnippetString('propnames(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'set_uo_expansion',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set UO expansion',
    insertText: new vscode.SnippetString('set_uo_expansion(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setdefaultcmdlevel',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set default command level',
    insertText: new vscode.SnippetString('setdefaultcmdlevel(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setname',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set a name',
    insertText: new vscode.SnippetString('setname(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setpassword',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set a password',
    insertText: new vscode.SnippetString('setpassword(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setprop',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set a property',
    insertText: new vscode.SnippetString('setprop(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'split',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Split an item',
    insertText: new vscode.SnippetString('split(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'unban',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Unban a user',
    insertText: new vscode.SnippetString('unban(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'append',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Append an item',
    insertText: new vscode.SnippetString('append(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'cycle',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Cycle through items',
    insertText: new vscode.SnippetString('cycle(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'erase',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Erase an item',
    insertText: new vscode.SnippetString('erase(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'exists',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Check if an item exists',
    insertText: new vscode.SnippetString('exists(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'insert',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Insert an item',
    insertText: new vscode.SnippetString('insert(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'randomentry',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Get a random entry',
    insertText: new vscode.SnippetString('randomentry(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'reverse',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Reverse the order of items',
    insertText: new vscode.SnippetString('reverse(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'shrink',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Shrink the list',
    insertText: new vscode.SnippetString('shrink(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'size',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Get the size of the list',
    insertText: new vscode.SnippetString('size(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'sort',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Sort the list',
    insertText: new vscode.SnippetString('sort(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'addBuff',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Add a buff',
    insertText: new vscode.SnippetString('addBuff(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'attack_once',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Attack once',
    insertText: new vscode.SnippetString('attack_once(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'clearAggressorTo',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Clear aggressor to',
    insertText: new vscode.SnippetString('clearAggressorTo(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'clearBuffs',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Clear buffs',
    insertText: new vscode.SnippetString('clearBuffs(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'clearLawfullydamagedTo',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Clear lawfully damaged to',
    insertText: new vscode.SnippetString('clearLawfullydamagedTo(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'cleargottenitem',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Clear gotten item',
    insertText: new vscode.SnippetString('cleargottenitem(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'compareversion',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Compare version',
    insertText: new vscode.SnippetString('compareversion(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'deaf',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Deaf',
    insertText: new vscode.SnippetString('deaf(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'delBuff',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Delete buff',
    insertText: new vscode.SnippetString('delBuff(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'disable',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Disable',
    insertText: new vscode.SnippetString('disable(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'disableSkillsFor',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Disable skills for',
    insertText: new vscode.SnippetString('disableSkillsFor(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'enable',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Enable',
    insertText: new vscode.SnippetString('enable(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'enabled',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Enabled',
    insertText: new vscode.SnippetString('enabled(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'getcorpse',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Get corpse',
    insertText: new vscode.SnippetString('getcorpse(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'getgottenitem',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Get gotten item',
    insertText: new vscode.SnippetString('getgottenitem(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'kill',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Kill',
    insertText: new vscode.SnippetString('kill(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'privileges',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Privileges',
    insertText: new vscode.SnippetString('privileges(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'removereportable',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Remove reportable',
    insertText: new vscode.SnippetString('removereportable(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setAggressorTo',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set aggressor to',
    insertText: new vscode.SnippetString('setAggressorTo(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setLawfullydamagedTo',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set lawfully damaged to',
    insertText: new vscode.SnippetString('setLawfullydamagedTo(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setcmdlevel',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set command level',
    insertText: new vscode.SnippetString('setcmdlevel(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setcriminal',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set criminal',
    insertText: new vscode.SnippetString('setcriminal(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setfacing',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set facing',
    insertText: new vscode.SnippetString('setfacing(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setlightlevel',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set light level',
    insertText: new vscode.SnippetString('setlightlevel(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setmurderer',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set murderer',
    insertText: new vscode.SnippetString('setmurderer(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setparalyzed',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set paralyzed',
    insertText: new vscode.SnippetString('setparalyzed(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setpoisoned',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set poisoned',
    insertText: new vscode.SnippetString('setpoisoned(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setseason',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set season',
    insertText: new vscode.SnippetString('setseason(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setswingtimer',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set swing timer',
    insertText: new vscode.SnippetString('setswingtimer(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setwarmode',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Set war mode',
    insertText: new vscode.SnippetString('setwarmode(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'spendgold',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Spend gold',
    insertText: new vscode.SnippetString('spendgold(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'squelch',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Squelch',
    insertText: new vscode.SnippetString('squelch(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'eraseprop',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Erase a property',
    insertText: new vscode.SnippetString('eraseprop(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'get_member',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Get a member',
    insertText: new vscode.SnippetString('get_member(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'getprop',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Get a property',
    insertText: new vscode.SnippetString('getprop(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'isa',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Guess the description for isa',
    insertText: new vscode.SnippetString('isa(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'propnames',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Get property names',
    insertText: new vscode.SnippetString('propnames(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'set_member',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Guess the description for set_member',
    insertText: new vscode.SnippetString('set_member(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
  {
    label: 'setprop',
    kind: vscode.CompletionItemKind.Method,
    documentation: 'Guess the description for setprop',
    insertText: new vscode.SnippetString('setprop(${1:arg})$0'),
    sortText: '01' // Ensure methods appear at the top of the completion list
  },
];

class MethodCompletionProvider {
  provideCompletionItems(document, position, token, context) {
    // You can provide context-specific completions here
    return methodCompletions;
  }
}

function activate(context) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      { language: 'polscript', scheme: 'file' },
      new MethodCompletionProvider(),
      '.' // Trigger completion after typing a dot
    )
  );
}

exports.activate = activate;
