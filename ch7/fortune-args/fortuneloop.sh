# !/bin/bash

trap "exit" SIGINT
echo Configured to generate new fortune every $INTERNAL secodns
mkdir -p /var/htdocs
while:
do
    echo  $(date) Writting frotune to  /var/htdocs/index.html
    /usr/games/fortune > /var/htdocs/index.html
    sleep $INTERNAL
done


