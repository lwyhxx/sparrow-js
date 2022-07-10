PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_STRING,/^(?:"(?:[^\\"\r\n]|\\.)*(?:"|$))/,null,'"'],[PR.PR_PLAIN,/^\s+/,null," \r\n\t "]],[[PR.PR_COMMENT,/^REM[^\r\n]*/,null],[PR.PR_KEYWORD,/^\b(?:AND|CLOSE|CLR|CMD|CONT|DATA|DEF ?FN|DIM|END|FOR|GET|GOSUB|GOTO|IF|INPUT|LET|LIST|LOAD|NEW|NEXT|NOT|ON|OPEN|OR|POKE|PRINT|READ|RESTORE|RETURN|RUN|SAVE|STEP|STOP|SYS|THEN|TO|VERIFY|WAIT)\b/,null],[PR.PR_PLAIN,/^[A-Z][A-Z0-9]?(?:\$|%)?/i,null],[PR.PR_LITERAL,/^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+\-]?\d+)?/i,null,"0123456789"],[PR.PR_PUNCTUATION,/^.[^\s\w\.$%"]*/,null]]),["basic","cbm"]);