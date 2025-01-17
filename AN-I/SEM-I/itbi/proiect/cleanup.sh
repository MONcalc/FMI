#!/bin/bash

rm -fr /tmp/server-replies; rm $wkFIFO
unset wkFIFO; pkill -f ./server.sh
                # -f pt a inchide !
# exit 0