#Acest script trebuie sa fie rulat cu . configure.sh sau 
#cu source configure.sh pentru ca variabila de mediu sa se pastreze

#!/bin/bash

export wkFIFO="/home/rooted/Documents/FIFO"
mkfifo "$wkFIFO"; mkdir "/tmp/server-replies"

./server.sh &
