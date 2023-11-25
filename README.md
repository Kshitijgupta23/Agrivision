**IMPORTANT STEPS TO RUN THE PROJECT LOCALLY**
1. Open terminal and run: "npm install" in Agrivision folder to install node modules for client side.
2. Move to server folder using: "cd server" and again run "npm install" to install node modules for server side.
3. In server folder, create a new file config.env and paste the following in it:      
   PORT = 5001
   DATABASE = mongodb+srv://kshitijgupta23:password2309@cluster0.rhwqyla.mongodb.net/agri?retryWrites=true&w=majority
   SECRET_KEY =  MYNAMEISKSHITIJGUPTAANDDESIKALAKAR
4. Now split the terminal, open one in main folder(Agrivision) and other in server
5. run npm start in first terminal(Agrivision) & node app.js in second terminal(server).
