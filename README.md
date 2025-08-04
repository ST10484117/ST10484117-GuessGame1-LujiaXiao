Number Guessing Game App
App Experience Description
How the Game Was Designed
The game was designed as a simple number guessing challenge where the app generates a random number between 1 and 100. The thought process began with creating a pseudocode outline, focusing on random number generation, user input handling, feedback display, and guess counting. Transitioning to React Native was straightforward for basic components like TextInput and TouchableHighlight, but we initially faced challenges in managing state dynamically. Adjusting from static pseudocode to reactive state updates required rethinking event handlers and state initialization.
Key Learning Points
Our team learned several key skills while building this app:

How to use React Native components such as Text, TextInput, and TouchableHighlight to create an interactive UI.
Managing state with useState to track the secret number, user guesses, and guess count effectively.
Structuring an interactive mobile app with a clear flow for user input, feedback, and game reset functionality.

Challenges and Solutions
We encountered a few challenges during development:

Handling user input validation was tricky at first, as invalid inputs caused errors. We solved this by adding basic parsing with parseInt and providing feedback for invalid entries.
Managing app state reset was initially done with window.location.reload(), which worked in a web environment but not natively. We switched to resetting state variables manually with setState functions.
Coordinating state updates across multiple components required careful planning, which we addressed by centralizing state management in the App component.

Reflection
The group collaborated well using version control and regular discussions to align on design and fixes. What worked well included the iterative testing approach, which helped catch issues early. Next time, we would improve by setting up a more robust state management plan from the start and exploring additional React Native features like navigation to enhance the user experience.

GitHub IRL : https://github.com/ST10484117/ST10484117-GuessGame1-LujiaXiao.git

Screenshots of the App

Both Screens 
<img width="1917" height="1075" alt="BothScreen" src="https://github.com/user-attachments/assets/1f5936dc-99eb-404a-9ab2-9a77737403e8" />

Geussed too high
<img width="561" height="996" alt="GuessedToHigh" src="https://github.com/user-attachments/assets/3926b310-b4e5-4009-b3e6-4dd96e6e5ccb" />

Guessed too low
<img width="553" height="889" alt="GeussToLow" src="https://github.com/user-attachments/assets/99a6f09e-82b6-465c-9a12-ae9806ea27c8" />

Guessed Correct
<img width="559" height="995" alt="GuessRight" src="https://github.com/user-attachments/assets/e7d5de93-8a57-4465-a8ec-781c3370a463" />



