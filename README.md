# Registration Form with Validation

This project is an interactive registration form with data validation. It demonstrates the use of **static methods** in JavaScript to validate user input. After successful registration, the user sees a success message, and the form automatically resets after 5 seconds.

## Key Features
- **Email Validation:** Checks the correctness of the email format.
- **Password Validation:** The password must contain at least 8 characters, a digit, an uppercase letter, and a special character (@, !, &).
- **Password Confirmation:** The password and confirmation password must match.
- **Success Message:** Displayed after successful registration.
- **Form Reset:** The form automatically resets after 5 seconds.
- **Responsive Design:** The form and message are displayed correctly on all devices.

## Technologies Used
- **HTML**: Structure of the form and message.
- **CSS**: Styling and responsive design.
- **JavaScript**: Validation logic, static methods, and form reset.

## Static Methods in Action
The project uses **static methods** of the UserUtils class to handle validation logic. This approach makes the code organized and reusable. For example:
- UserUtils.validateEmail(email): Checks the correctness of the email format.
- UserUtils.validatePassword(password): Checks the complexity of the password.
