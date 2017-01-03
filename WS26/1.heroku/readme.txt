#############################################
#### clone then cd into new node folder #####
#############################################
heroku login
cd to local node project folder
git clone https://github.com/heroku/node-js-getting-started.git
cd node-js-getting-started

#### setup connection with master ####
heroku create
git push heroku master
heroku open

npm install - when app dependencies in package.json have changed

##########################
#### run app locally #####
##########################
***********************
heroku local web
http://localhost:5000
ctrl + C to exit
***********************
if port is busy
C:\Users\username>netstat -o -n -a | findstr 0.0:5000
 TCP    0.0.0.0:3000      0.0.0.0:0              LISTENING       3116
C:\Users\username>taskkill /F /PID 3116


###################################################
#### create node project then sync with heroku ####
###################################################
#### Create a new Git repository  #####
Initialize a git repository in a new or existing directory
$ cd my-project/
$ git init
in heroku console create a new app
$ heroku git:remote -a <heroku app name> 
heroku git:remote -a vast-temple-63834

Deploy your application

Commit your code to the repository and deploy it to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master