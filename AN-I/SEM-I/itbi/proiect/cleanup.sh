#!/bin/bash

rm -fr /tmp/server-replies; rm $wkFIFO
unset wkFIFO; pkill ./server.sh

exit 0