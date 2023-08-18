
const passwordManger = document.getElementById("password")
const size =8;

const UpperCase= "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
const LowerCase = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const Special = "~`!@#$%^&*()_-+={[}]|:;'<>.?/";
const number = "0 1 2 3 4 5 6 7 8 9";
const allPass = UpperCase + LowerCase + Special + number; 


function createPassword (){
    let password = " ";
    password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
    password += Special[Math.floor(Math.random() * Special.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while(size > password.length){
        password += allPass[Math.floor(Math.random() * allPass.length)];
    }
    passwordManger.value = password;
}

function copyPassword() {
    passwordManger.select();
    document.execCommand("copy");
    
}