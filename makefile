test : test_arithmetique test_affichageNombres test_array test_divers test_maths test_strings 

test_arithmetique : 
	jest tests/basics/arithmetique.test.js

test_affichageNombres : 
	jest tests/basics/affichageNombres.test.js

test_array : 
	jest tests/basics/arrays.test.js

test_divers : 
	jest tests/basics/divers.test.js

test_maths : 
	jest tests/basics/maths.test.js

test_strings : 
	jest tests/basics/strings.test.js

coverage : 
	jest --coverage && jest --coverageProvider=v8

install : 
	npm install -g jest

configure :
	jest --config ./jest.config.js