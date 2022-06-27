# Module 03 Challenge: JavaScript Password Generator

## User Story

```bash
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```bash
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Application

### Password generator from starter code
![Password generator page](./images/screenshot01.jpg)

### When the 'Generate Password' button is clicked, a series of prompts
![Prompt: How many characters should your password include?](./images/screenshot02.jpg)
![Prompt: Select OK to include capitals](./images/screenshot03.jpg)
![Prompt: Select OK to include numbers](./images/screenshot04.jpg)
![Prompt: Select OK to include special characters](./images/screenshot05.jpg)

### THEN a password is generated based on the criteria
![Result: password generated based on criteria](./images/screenshot06.jpg)