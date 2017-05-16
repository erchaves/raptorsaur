# Raptorsaur.com
The Raptorsaur.com website
This is just a simple repo for a simple webpage.

### Development Setup
- Install the dependencies:
```bash
npm install
```
- Copy or rename `readme.env` to `.env`.
	- The .env file will get parsed by app-express.js.
	- .env is .gitignored and can be used to store private tokens.


- Run the gulp build with livereload and start the server.
```bash
npm run dev
# or just run 'gulp' if you have gulp installed globally.
# The app will be served at `localhost:3000`
```

### Production Setup
- Run the production gulp build and start the server.
```bash
npm start
# npm prestart will automatically run the gulp build before starting.
# This works on services like Heroku too. So gulp runs on deploy.
```

### Live Website
[http://www.raptorsaur.com/](http://www.raptorsaur.com/)
