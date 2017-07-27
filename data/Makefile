# move files to place where they can be useful
move: newsroom_demo.json workforce.json nyt.json wapo.json lat.json chicago.json
	cp workforce.json ../app/assets/
	cp newsroom_demo.json ../app/assets/
	cp nyt.json ../app/assets/
	cp wapo.json ../app/assets/ 
	cp chicago.json ../app/assets/
	cp lat.json ../app/assets/

chicago.json: chicago.csv
	csvjson -i 4 chicago.csv > chicago.json

lat.json: lat.csv
	csvjson -i 4 lat.csv > lat.json

wapo.json: wapo.csv
	csvjson -i 4 wapo.csv > wapo.json

nyt.json: nyt.csv
	csvjson -i 4 nyt.csv > nyt.json

# convert newsroom demo stuff
newsroom_demo.json: newsroom_demo.csv
	csvjson -i 4 -k "geography" newsroom_demo.csv > newsroom_demo.json

# convert workforce numbers to json
workforce.json: workforce.csv
	csvjson -i 4 workforce.csv > workforce.json

# run this manually
clean:
	rm workforce.json newsroom_demo.json wapo.json nyt.json chicago.json lat.json 
