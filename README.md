# Stone Wall Project
## 1. Preparation:
* Install node in command line: `brew install node` ([Reference](https://blog.teamtreehouse.com/install-node-js-npm-mac))
* Install yarn in command line: `brew install yarn` ([Reference](https://yarnpkg.com/lang/en/docs/install/#mac-stable))
## 2. Clone and set up the project
* 1. NEWLY DOWNLOADED
* Click the green button "Clone or Download". Copy the url in that block. 
* Go back to terminal, go to the target directory, type `git clone (the url)` ** there're spaces after "git" and "clone".
* 2. ALREADY HAVE LOCAL GIT CONNECTED
* cd into the project directory (`stone-wall-education` folder), run `git pull origin master`
* ----UPDATE STARTING HERE----
* cd into the project directory (`stone-wall-education` folder), this is the express back end directory (root directory).
* Run `yarn install`
* Open another terminal window(tab).
* cd into `client` directory, this is the react front end directory.
* Run `yarn install` (yes, run this again in the client folder because the front end and back end have different dependencies)
## 3. Run the project
* Go to the terminal window/tab whose location is at the root directory (`stone-wall-education` folder).
* Run `yarn dev` in the root directory (`stone-wall-education` folder) to start the backend server. This will run the server.js in the root directory.
* Go to the other terminal window/tab whose location is at the `client` directory of the project.
* Run `yarn start` to open the project from default browser. This will open the App.js file (client => src => App.js)
* When closing the port, go to both terminals and hit control(^) + C.
## 0. What if I run into errors?
* 1. Go through the procedure above step by step.
* 2. Go through the procedure above again and pay attentions to the current location (directory-wise) in terminal.
* 3. Contact Mark at zm2271@tc.columbia.edu