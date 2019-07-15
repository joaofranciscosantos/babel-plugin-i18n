#!/bin/bash

OUT_FOLDER=tests/out
mkdir -p ${OUT_FOLDER}

for filename in tests/in/*; do
	OUT=${OUT_FOLDER}/${filename:9}
	EXPECTED=tests/expected/${filename:9}
	node ${filename} > ${OUT} |& grep -i SomeError
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