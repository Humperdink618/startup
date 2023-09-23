# Instant Fart Button

## Description deliverable

### Elevator pitch

Are you bored, incredibly immature, or someone who enjoys instant gratification? Introducing the Instant Fart Button, because why the heck not! Its a button that you press, and when you do, it makes a fart noise. That's all there is to it! Just press for instant flatulent fun! Unlike other instant noise buttons you may find on the internet, this one has the added bonus of recording the number of times you press the button (for no good reason other than to show how much you love pressing this button), is a secured website (you have to log in in order to press the button so we can record how many times you press the button and only you and you alone will know how many times you have pressed it), and, best of all, NO ANNOYING ADS! No monetization of any sort! Just you pressing a button to make a fart noise for as long as you want! Its THAT SIMPLE! 

![FartButton](InstantFartButtonConcept.jpg)

Here is how the login screen will look (or at least something similar to it).

![FartLogin](InstantFartButtonLoginConcept.jpg)

### Key features

- Secure login over HTTPS
- Ability to select the question to decide
- Display of choices
- Ability to select, and change, top three choices
- Totals from all users displayed in realtime
- Ability for a user to lock in their top three
- Results are persistently stored
- Ability for admin to create and delete questions

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Two HTML pages. One for login and one for pressing the button.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast. Displays image of the button and pictures surrounding it for nice aesthetic
- **JavaScript** - Provides login, button click display, applying number of times button is pressed, plays audio whenever button is pressed, display number of times user pressed button, backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving audio
  - submitting a count for number of times button is pressed
  - retrieving number of times the user pressed the button
- **DB** - Store users and number of times they pressed the button in database.
- **Login** - Register and login users. Credentials securely stored in database. Can't press the button for flatulent fun unless authenticated.
- **WebSocket** - As each user presses the button, the number of times they pressed the button is broadcast to that user and that user alone.
- **React** - Application ported to use the React web framework.
