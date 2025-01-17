#!/bin/bash


pid=0
command=""
ct=0
n=0

while true; do

	read instruction < "$wkFIFO" 
	echo "" >  output.txt

	ct=0
	n=0

	for word in $instruction; do
		((n++))
		if [[ "$n" == 1 ]]; then
	 	   pid=$word
		fi
	done

	ct=0	
	for word in $instruction; do
		((ct++))
		if [[  $ct != 1 ]]; then
			man "$word" >> output.txt
		fi
	done

	cat output.txt > "/tmp/server-replies/$pid"

done

exit 0