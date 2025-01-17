#!/bin/bash

my_pid=$$; want="find"
pth="/tmp/server-replies/$my_pid"; mkfifo $pth

echo "$my_pid   $want" >> $wkFIFO
cat $pth; rm $pth;

exit 0
