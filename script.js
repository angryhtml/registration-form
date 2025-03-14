class UserUtils {
    static validateEmail(email) {
        return email.includes('@') && email.split('@')[1].includes('.')
    }

    static validatePassword(password) {
        const isLongEnough = password.length >= 8;
        const hasNumber = /\d/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasSpecialChar = /[@!&?]/.test(password);

        return isLongEnough && hasNumber && hasUppercase && hasSpecialChar;
    }
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const successMessage =  document.querySelector('.sucessForm');
    const registrationForm = document.getElementById('registrationForm');

    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    successMessage.style.display = 'none';

    if(!UserUtils.validateEmail(email)) {
        emailError.textContent = 'Error: Invalid email';
        return;
    }

    if(!UserUtils.validatePassword(password)) {
        passwordError.textContent = 'The password must contain at least 8 characters, a number, an uppercase letter and the special character @!&?';
        return;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Error: Passwords do not match';
        return;
    }

    registrationForm.style.display = 'none';
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
        registrationForm.style.display = 'block';
        registrationForm.reset();
      }, 5000);

});
