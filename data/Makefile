# move files to place where they can be useful
move: newsroom_demo.json workforce.json
	cp workforce.json ../app/assets/
	cp newsroom_demo.json ../app/assets/

# convert newsroom demo stuff
newsroom_demo.json: newsroom_demo.csv
	csvjson -i 4 -k "geography" newsroom_demo.csv > newsroom_demo.json

# convert workforce numbers to json
workforce.json: workforce.csv
	csvjson -i 4 workforce.csv > workforce.json

# run this manually
clean:
	rm workforce.json newsroom_demo.json
