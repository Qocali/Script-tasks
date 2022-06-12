function PassGeneric(passwordLength) {
    let upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    let lowerCase = upperCase.toLowerCase();
    let numbers = '1234567890';
    let pass = upperCase + lowerCase + numbers;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        password += pass[Math.floor(Math.random() * pass.length)];
    }
    return password;
}
console.log(PassGeneric(8))