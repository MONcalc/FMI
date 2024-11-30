#!/bin/bash

while true; do
	IFS=" :" read pid command < "$wkFIFO"
	echo $pid; echo $command
	man "$command" > "/tmp/server-replies/$pid"
done

exit 0