# move files to place where they can be useful
move:
	cp workforce.json ../app/assets/

# convert workforce numbers to json
workforce.json: workforce.csv
	csvjson -i 4 workforce.csv > workforce.json

# run this manually
clean:
	rm workforce.json
