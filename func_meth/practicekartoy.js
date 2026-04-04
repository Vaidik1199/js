// practicing Q1
function numOfVowels (str) {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        if(str[index]=="a" || 
            str[index]=="e" ||
            str[index]=="i" ||
            str[index]=="o" ||
            str[index]=="u"
        ){
            count++;
        }
    }
    return count;
}

// practicing Q2 
const Vowels = (str)=>{
    let cnt = 0;
    for(let char of str){
        if (char == 'a' ||
            char == 'e' ||
            char == 'i' ||
            char == 'o' ||
            char == 'u'
        ){
            cnt++;
        }
    }
    console.log(cnt);
}