# Project1 : README

## 1. The script is interactive. 

This is an execution menu that shows all features that could be executed, which could be done by inputing the exact name of features. 
If the input does not match any of the name of feature functions, the scrip will exit automatically.
In the end of each function, it asks whether you want to continue to next function so you don't need to run the whole script again.



## 2. Create #TODO logs.

This feature put all lines with tag #TODO into a new file called todo.log. 
The exclude flag is used so that it does not count itself and the files it creates.
The content in todo.log can be viewed.



## 3. Find error haskell and python files.

This feature finds the haskell and python files, and see if they can complie successfully.
If not, add them to the compile_fail.log



## 4. Find all commit message with merge and put them to merge.log.

This feature finds all commit message with merge firstly, then cut the hash part and the message,only puting the hashes to merge.log
Those hasdes in log can be viewed.



## 5. Count the number of each type of files.

This feature finds the files of certain types and counts how many are they.



## 6. Detele temporary files.

This feature finds all untracked files ends in .tmp and delete them.



## 7. Custom feature: get the run time of your mac.

This feature basically use the function uptime to get how long your mac has been on.



## 8. Custom feature: get the execute time of each function.

This feature use the time function. After inputting the name of above function, it goes through the function again.
Technically you can choose yes when asks whether to continue to next function here, but don't suggest to do so. 




## Reference:

colorlizing bash output: https://stackoverflow.com/questions/10466749/bash-colored-output-with-a-variable
function uptime: http://osxdaily.com/2010/01/21/how-long-has-my-mac-been-on/

