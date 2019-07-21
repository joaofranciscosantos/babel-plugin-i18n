#!/bin/bash

mkdir -p tests/out

FILE_REGEX=$1*
if [[ "$FILE_REGEX" == "" ]]; then
	FILE_REGEX=*
fi

cd tests/in
echo ${FILE_REGEX}

for filename in ${FILE_REGEX}; do
	OUT=../out/${filename}
	EXPECTED=../expected/${filename}
	node ${filename} > ${OUT} 2>&1 | grep -i SomeError
	if [[ -f ${EXPECTED} && -f ${OUT} ]]; then
		diff ${EXPECTED} ${OUT}
		if [[ $? -eq 0 ]]; then
			echo -e "\e[32mOK\e[0m  ${filename}"
	  else
	    echo -e "\e[31mNOK\e[0m ${filename}"
	  fi
	else
		echo -e "\e[31mNOK\e[0m ${EXPECTED} or ${OUT} not found"
  fi
done
