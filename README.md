# Instant NOOOOO! Button

## Description deliverable

### Elevator pitch

Are you bored, stressed, or someone who enjoys instant gratification? Introducing the Instant NOOOOO! Button, because why the heck not! Its a button that you press, and when you do, it plays an audio clip of Darth Vader yelling NOOOOO! That's all there is to it! Just press in case of dire emergencies! Unlike other instant noise buttons you may find on the internet, this one has the added bonus of recording the number of times you press the button (for no good reason other than to show how much you love pressing this button), is a secured website (you have to log in in order to press the button so we can record how many times you press the button and only you and you alone will know how many times you have pressed it), and, best of all, NO ANNOYING ADS! No monetization of any sort! Just you pressing a button to make Darth Vader scream NOOOOO! for as long as you want! Its THAT SIMPLE! 

![InstantFartButtonConcept](https://github.com/Humperdink618/startup/assets/144961325/3b023f58-223d-480d-8451-48fb52aa149c)
(note: my previous idea was to do an instant fart button, but later decided to do something more mature and presentable, though it still shows off the basic concept of what I was going for)


Here is how the login screen will look (or at least something similar to it).

![InstantFartButtonLoginConcept](https://github.com/Humperdink618/startup/assets/144961325/381175cb-c1d0-45f9-a0a4-9c91e6e20eb4)



### Key features

- Secure login over HTTPS
- Ability to press the button
- Display of number of times the button is pressed
- Ability to have button play a sound when pressed
- Highest score of player with highest score displayed in realtime
- Ability for a user to logout
- Number of times button is pressed is persistently stored
- Ability for users to have fun pressing a stupid meme button

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Three HTML pages. One for login, one as an about page, and one for pressing the button.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast. Displays image of the button and pictures surrounding it for nice aesthetic
- **JavaScript** - Provides login, button click display, applying number of times button is pressed, plays audio whenever button is pressed, display number of times user pressed button, backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving audio
  - submitting a count for number of times button is pressed
  - retrieving number of times the user pressed the button
- **DB** - Store users and number of times they pressed the button in database.
- **Login** - Register and login users. Credentials securely stored in database. Can't press the button unless authenticated.
- **WebSocket** - As each user presses the button, the number of times they pressed the button is broadcast to that user and that user alone. Only the highest score out of all players is displayed to all players in realtime.
- **React** - Application ported to use the React web framework.

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - Three HTML pages that represent the ability to login, play, and see the about screen. Formatted in a way that you access them through clicking buttons for better organization.
- **Links** - The login page automatically links to the play page. The play page contains a link to the home page whenever the user wants to logout. Home has a link to the about page.
- **Text** - Textual descriptions for the about page, button pressing, player names and scores, and high score.
- **Images** - I added an image for the play screen, as well as a changeable random 3rd party rest api image for the about page.
- **Login** - Input box and submit button for login. Also a logout feature on the play page.
- **Database** - The player names, high scores, and number of times players press the button represent data pulled from the database.
- **WebSocket** - The player who has pressed the button the most times and their associated "high score" are displayed to all players in realtime.

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

- **Header, footer, and main content body** - Used css to stylize them a lot more and rearranged the format of the play.html to make it more appealing and manageable. May still do some minor adjustments at some point, but for now, I'd say its serviceable.
- **Navigation elements** - I added nav elements into my code so that the css can really make my page look good.
- **Responsive to window resizing** - My app looks great on all window sizes and devices
- **Application elements** - Used good contrast and whitespace. Also did a major update to the actual nooo button in its appearance and functionality, as well as rearranged my page a little to make it more manageable and appealing to look at. May need to update the reset button at some point though.
- **Application text content** - Consistent fonts
- **Application images** - Updated placement of main image on play.html, as well as updated in a big way the look and functionality of the nooo button (which is now an animated button superimposed on an image more closely resembling the one in my initial design).


## JavaScript deliverable

For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- **login** - When you press the login button it takes you to the play page. Clicking the logout button also takes you back to the login page.
- **database** - Displayed the counts for number of times button is pressed. Currently this is stored and retrieved from local storage, but it will be replaced with the database data later. Also updates the high score over time as well. Will update it with database later.
- **WebSocket** - The high score updates with number of times button is pressed, but does not change when score count is reset. When the database is enabled, this should save the high score and ensure that it doesn't change after logging out. This will be replaced with WebSocket messages later.
- **application logic** - The button now makes sound whenever pressed. It also records number of times it is pressed and updates high score accordingly as well. Name of user is also displayed according to the name the user logged in as. Rest API kitten pic generator now generates a random cat picture based off of a random number generator. Will need to eventually update the login to make sure that empty credentials or incorrect credentials prohibit access to play page, but other than that, everything else should be working.

## Service deliverable

For this deliverable I added backend endpoints that receives counts and the highscore and returns them.

- **Node.js/Express HTTP service** - done!
- **Static middleware for frontend** - done!
- **Calls to third party endpoints** - done!
- **Backend service endpoints** - Placeholders for login that stores the current user on the server. Endpoints for counts and highscores.
- **Frontend calls service endpoints** - I did this using the fetch function.

## DB deliverable

For this deliverable I stored the counts and highscores in the database with the associated user.

- **MongoDB Atlas database created** - done!
- **Endpoints for data** - My stubbed out endpoints now process the data and send it to Mongo.
- **Stores data in MongoDB** - done!

## Login deliverable

For this deliverable I associate the counts and highscores with the logged in user.

- **User registration** - Creates a new account in the database.
- **existing user** - Stores the scores and highscores under the same user if the user already exists. Also prevents new user creation if user already exists.
- **Use MongoDB to store credentials** - Stores both user and their credentials. Also creates separate collection for counts and highscores associated with the same user.
- **Restricts functionality** - You cannot play until you have logged in. This is restricted on the frontend and the backend prevents outsiders from tampering with other players' counts and highscores (though this does make back end testing a little tougher. Can still test functionality on front end).

## WebSocket deliverable

For this deliverable I used webSocket to display user logouts and users starting new games on the frontend in realtime.

- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - All user logouts and starting new games display in realtime. I'm really proud that this is working. I hope at some point to show players log in in real time as well, though I have no idea how to do that as of yet. What I have right now is sufficient for me right now.


## React deliverable

For this deliverable I converted the application over to use React.

- **Bundled and transpiled** - done!
- **Components** - Login, play, about are all components.
- **Router** - Routing between login, about, and play components.
- **Hooks** - React uses `UseState` to track changes in multiple states.
