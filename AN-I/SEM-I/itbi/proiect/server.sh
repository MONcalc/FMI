#!/bin/bash

while true; do
	IFS=" :" read pid command < "$wkFIFO"
	man "$command" > "/tmp/server-replies/$pid"
done

exit 0