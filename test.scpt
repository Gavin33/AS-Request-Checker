on isTemplateUsed(templateName)
	tell application "Pages"
		set doc to get front document
		set docText to body text of doc
		set templateUsed to name of document template of doc as string
	end tell
	-- check if [Company Name] is present or if this is an old doc
	if templateUsed = templateName then
		if docText contains "[Company Name]" then
			return true
		end if
	end if
	return false
end isTemplateUsed

on findAndReplace(findText, replaceText)
	tell application "System Events"
		tell process "Pages"
			-- Enter the search term
			keystroke "a" using {command down}
			keystroke (character id 8)
			keystroke findText
			keystroke tab
			keystroke "a" using {command down}
			keystroke (character id 8)
			keystroke replaceText
			delay 1
			click button "Replace all" of window 1
			keystroke tab
		end tell
	end tell
end findAndReplace

-- Get the list of tabs in Chrome
on checkIfTabOpen(targetURL)
	tell application "Google Chrome"
		set tabList to every tab of window 1
		set tabExists to false
		-- Iterate through each tab and check the URL
		repeat with currentTab in tabList
			if URL of currentTab is targetURL then
				set tabExists to true
				exit repeat
			end if
		end repeat
		if not tabExists then
			open location targetURL
		end if
	end tell
end checkIfTabOpen


on getNumericMonth(monthName)
	set monthNames to {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"}
	repeat with i from 1 to count of monthNames
		if item i of monthNames is monthName then
			set monthIndex to i
			exit repeat
		end if
	end repeat
	return monthIndex
end getNumericMonth
on run argv
    set currentDate to current date
    tell currentDate
        set currentDay to day
        set currentYear to year
    end tell
    set currentMonth to month of currentDate as string
    set currentDate to getNumericMonth(currentMonth) & "/" & currentDay & "/" & currentYear as text

    tell application "Pages"
        activate
    end tell

    if isTemplateUsed(item 1 of argv) then
        
        tell application "Pages"
            set docName to name of front document
            set companyName to text returned of (display dialog "Enter the company name:" default answer docName)
            set jobPosition to text returned of (display dialog "Enter the position:" default answer "Developer")
        end tell

        tell application "Pages"
            activate
            set hiringManager to text returned of (display dialog "Enter the hiring manager's name:" default answer "")
            
            set hmPhone to text returned of (display dialog "Enter the hiring manager's phone number:" default answer "")
            
            set hmEmail to text returned of (display dialog "Enter the hiring manager's email:" default answer "")
            set firstName to hiringManager
            set lastName to ""
            
            if hiringManager contains space then
                set firstName to text 1 thru (offset of space in hiringManager) - 1 of hiringManager
                set lastName to text ((offset of space in hiringManager) + 1) thru -1 of hiringManager
            end if
        end tell
        -- Company Name
        
        tell application "System Events"
            tell process "Pages"
                -- Activate the Find & Replace function
                keystroke "f" using {command down}
                
                -- Wait for the Find & Replace dialog to appear
                delay 1
            end tell
        end tell
        
        findAndReplace("[Company Name]", companyName)
        findAndReplace("[position]", jobPosition)
        findAndReplace("[Hiring Manager]", lastName)
        findAndReplace("[Date]", currentDate)
        
        tell application "System Events"
            tell process "Pages"
                keystroke "w" using {command down}
            end tell
        end tell
        
        --check tabs in chrome
        checkIfTabOpen("https://bard.google.com/")
        checkIfTabOpen("https://www.random.org/")
        
        
        set the clipboard to "Tell me about " & companyName & ". What are its values? What major accomplishments has it achieved? What does it look for in potential employees?"
        
        -- what dis do?
        set targetDocumentName to "JobSearchTracker (1).numbers"
        
        tell application "Numbers"
            activate
            set windowList to windows
            set isDocumentOpen to false
            
            repeat with currentWindow in windowList
                if name of currentWindow is equal to "jobSearchTracker.numbers" then
                    set isDocumentOpen to true
                    set oldWindow to front window
                    set index of currentWindow to 1
                    set miniaturized of currentWindow to false
                    exit repeat
                end if
            end repeat
            
            if not isDocumentOpen then
                open file "Macintosh HD:Users:gavinbutler:Documents:jobSearch:JobSearchTracker.numbers"
            end if
            set doc to get front document
            set targetSheet to sheet 1 of doc
            set targetTable to table 1 of targetSheet
            set targetColumn to column 1 of targetTable
            set targetRow to missing value
            repeat with i from 2 to row count of targetTable
                set targetCell to cell i of targetColumn
                if value of targetCell is missing value then
                    set targetRow to row of targetCell
                    exit repeat
                end if
            end repeat
            if targetRow is missing value then
                set targetRow to make new row after last row of targetTable
            end if
            tell targetRow
                set value of cell 1 to companyName
                set value of cell 2 to jobPosition
                set value of cell 4 to hiringManager
                set value of cell 5 to hmEmail
                set value of cell 6 to hmPhone
                -- get file path
                set value of cell 7 to "/Users/gavinbutler/Documents/jobSearch/CoverLetters/WebDeveloperTemplate/" & docName
                set value of cell 9 to "X"
                set value of cell 12 to currentDate
            end tell
        end tell
        tell application "System Events"
            tell process "Numbers"
                keystroke "h" using {command down}
            end tell
        end tell
        -- put hm into contacts
        if length of hiringManager is not 0 then
            if length of hmPhone is not 0 or length of hmEmail is not 0 then
                tell application "System Events"
                    if not (exists process "Contacts") then
                        tell application "Contacts" to activate
                    end if
                end tell
                tell application "Contacts"
                    set newPerson to make new person with properties {first name:firstName, last name:lastName, organization:companyName}
                    tell newPerson
                        make new email at end of emails with properties {label:"Work", value:hmEmail}
                        make new phone at end of phones with properties {label:"Work", value:hmPhone}
                    end tell
                    save
                end tell
            end if
        end if
    end if
end run