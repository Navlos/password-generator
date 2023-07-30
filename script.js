const passwordBox = document.getElementById('password');
const btn = document.getElementById('btn')
const length = 20;


const upperCase = "ABCDEFVHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefgijklmbnopqrstuvwxyz";
const numbers =" 123456790";
const symbols =  "@#$%^&*()|\/+-=";
const allChars = upperCase + lowerCase + numbers + symbols ; 

btn.addEventListener("click", function(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while (length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }


    passwordBox.value = password
    
} )




function copy(){
    passwordBox.select();
    document.execCommand("copy")
    alert("password copied succesfully")
}


