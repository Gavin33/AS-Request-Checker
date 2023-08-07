IMPORTANT: This is not a comprehensive parser of AppleScript. I just made it parse the more commmon commands of the language. ALSO, if this code is being run from an automator action, it will not work when run outside of automator's run button. When called as part of a quick action or folder action, the output will be a blank string. There's not much I can do about it, it's just a limitation of bash run from Automator. The rest of the bash script executes before the js finishes running, and there isn't native support for async functionss in bash.

About antlr4ts: Antlr4ts is in alpha, so threre are a few bugs. This is why there are so many "type errors" when you open up any of the typescript files. ASGrammarLexer, ASGrammarListener and ASGrammarParser are all generated directly from antlr4ts. I did not alter them or the code that generated them in any way. Additionally There are most likely multiple type errors in the rest of the files that I wrote myself as well, or at least on your end. Antlr4ts did not follow proper antlr4 syntax for a lot of the properties and methods. I decided to use the proper syntax rather than conform to the whims of antlr4ts and modify the source code to use the correct syntax on my end so that I did not confuse legitimate errors for errors in the source code.

Other notes:  Given its function is to check code for unintended requests before I run it, if it ever encountered a situation where it couldn't read something, there is a strong chance it might miss a critical error. Therefore I made an alteration to the error handling to stop the code if the parser ever encounters something it can't read. If you encounter a parser error when running the code, feel free to use the debug listener and parser to find out what the error is if you're inclined. Also yes, I am well aware AppleScript is not the most widely used language. I chose it because it has a very small ecosystem, meaning this is one of the few parsers available for it.