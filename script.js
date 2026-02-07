function createPassword() {
    const length = 12;
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const charset = uppercase + lowercase + numbers + symbols;
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    document.getElementById('password').value = password;
}
function copyPassword() {
    //select the text inside the input
    const selectedPassword = document.getElementById('password').select(); 
    //copy the selected text
    document.execCommand('copy');
}  