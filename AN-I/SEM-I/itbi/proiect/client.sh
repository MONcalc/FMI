#!/bin/bash

my_pid=$$; want="chmod"
pth="/tmp/server-replies/$my_pid"; mkfifo $pth


echo "BEGIN-REQ $my_pid: $@ END-REQ"

echo "$my_pid $@" >> $wkFIFO
cat $pth; rm $pth;

# exit 0