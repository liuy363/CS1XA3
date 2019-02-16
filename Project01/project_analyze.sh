#!/bin/bash

cd ..

#1.make the script interactive,scoll down to see more
echo "This is Cynthia's project01 first version"

#2.find lines with #TODO and add to a new file todo.log
TODO(){
        grep -r --exclude={'todo.log','project_analyze.sh'} "#TODO" > Project01/logs/todo.log
}


#6. delete temporary files
Del_tem(){
	untracked=$(git ls-files *.tmp --exclude-standard --others)
	for item in $untracked ; do
		rm $item
	done

}


#make the script interactive
read -p  "choose the feature to be executed  1)TODO 5)File_count 6)Del_tem " var1

if [ "$var1" = "TODO" ] ; then 
	TODO
elif [ "$var1" = "File_count" ] ; then
	File_count
elif [ "$var1" = "Del_tem" ] ; then
	Del_tem

else
	echo "to be continue"
fi
