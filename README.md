### Nodejs skeleton API
Sample application to demonstrate how to **develop** an **API service**

### Steps to start the application
- git clone https://github.com/leopold-lll/trentose2jan12-m178127.git
- npm install
- node start.js

### HOW TO DEPLOY APP IN HEROKU
- heroku create nome_app
- aggiungere file Procfile con scritto "web: node index.js"
- git push heroku master
- heroku open

### HOW TO USE API 
***Parameters*** (*required*)
- astronautsID
- firstName
- lastName
- isInSpace

***URLs***
fase1:
- aggiungere un astronauts 							(POST - /astronauts)
- leggere tutti gli astronauts 						(GET  - /astronauts)

fase2:
- leggere uno specifico astronauts per id    		(GET  - /astronauts/:id)

fase3:
- modificare astronauts 							(PUT  - /astronauts/:id)

fase 4:
- leggere tutti gli astronauts dato un cognome     	(GET  - /astronauts?lastName=:)

***URLs***
- heroku: https://trentose2jan12-m178127.herokuapp.com/

***More details***
Read Apiary documentation in https://app.apiary.io/trentose2jan12m178127/editor

Nome repository:
trentose2jan12-m178127