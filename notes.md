### command line commands
- ls  list contents of current directory
- cd  change directory
- cd ..  goes to parent directory
- git touch  create a new file/modify existing file
- cp  create copy of a file (cp [filename] [new filename])
- mv  move (mv [filename] [filename]) (filename includes location)
- rm  delete a file (rm filename)
- nano  text editor
- vim  another text editor
- cat  prints contents of a file (cat filename)
- ~/  home directory
- ssh  sign into other computer (ssh netID@schizo.cs.byu.edu)
- git add  adds a file (git add .  adds all changed files) (git add filename  adds specific file)
- git commit -m "[commit message]"  commits file with a description
- git push  pushes commited stuff from computer to internet
- git pull  pulls stuff from internet to computer
- git status  tells you if you need to add or commit or push or general status
## class notes
From the GitHub assignment, I learned how to use git, including push, pull, settle merge conflicts. etc.
## IP address and SSH into server
http://44.218.29.30/  IP address for server

Now, let's remote shell into your server and see what is under the hood. Go to your console window and use SSH to shell into the server. You will need to supply the public IP address (copied from the EC2 instance details) and the location of your key pair file that you created/used when you launched your instance. Hopefully, you saved that off to a safe location in your development environment; otherwise you will need to terminate your instance and create a new one, with a new key.

➜  ssh -i [key pair file] ubuntu@[ip address]
For example,

➜  ssh -i ~/keys/production.pem ubuntu@53.104.2.123
⚠ You may get a warning that your key pair file permissions are too open. If so then you can restrict the permissions on your file so that they are not accessible to all users by running the chmod console command:

 `chmod  600 [key pair file]`
⚠ As it connects to the server it might warn you that it hasn't seen this server before. You can confidently say yes since you are sure of the identity of this server.

Once it has connected, you are now looking at a console window for the web server that you just launched and you should be in the ubuntu user's home directory. If you run ls -l, you should see something like the following. (Note that the dates might appear different.)

➜  ls -l

total 4
lrwxrwxrwx 1 ubuntu ubuntu   20 Apr 13 15:06 Caddyfile -> /etc/caddy/Caddyfile
lrwxrwxrwx 1 ubuntu ubuntu   16 Apr 13 15:06 public_html -> /usr/share/caddy
drwxrwxr-x 4 ubuntu ubuntu 4096 Apr 13 16:48 services
The Caddyfile is the configuration file for your web service gateway. The public_html directory contains all of the static files that you are serving up directly through Caddy when using it as a web service. We will cover Caddy configuration in a later instruction. The services directory is the place where you are going to install all of your web services once you build them.

Once you are done poking around on your server, you can exit the remote shell by running the exit command. That is everything. You will only change a few configuration settings on your server in the future. Usually, changes to the server are always done using an automated continuous integration process.


for simon.css, I deployed it to my domain, mostly the same as the original simon.css file, except that I made the color for the .event in the play.css file a little darker to make it more visible.
