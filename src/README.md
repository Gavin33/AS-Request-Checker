IMPORTANT: If this code is being run from an automator action, it will not work when run outside of automator's run button. When called as part of a quick action or folder action, the output will be a blank string. There's not much I can do about it, it's just a quirk of bash run from Automator. The rest of the bash script executes before the js finishes running, and there isn't native support for async functionss in bash. You probably should remove the parser at that point anyway since at that point you're usually done testing your code.

Other notes: This is not a comprehensive parser of AppleScript. The language is far too complex for me to make a parser for the whole thing in two weeks. I just made it parse the more commmon commands of the language. Given its function is to check code for unintended requests before I run it, if it ever encountered a situation where it couldn't read something, there is a strong chance it might miss a critical error. Therefore I made an alteration to the error handling to stop the code if the parser ever encounters something it can't read. If you encounter a parser error when running the code, feel free to use the debug listener and parser to find out what the error is if you're inclined.

Also yes, I am well aware AppleScript is not the most in demand skill on the job market. It also has a very small ecosystem, meaning this is one of the few parsers available for it. In a world where advances in AI are making things easier and easier for developers, working with a language with few resources to go off of was too rare a challenge to pass up, and it is very satisfying to see my code be able to interpret things that even ChatGPT gets wrong.