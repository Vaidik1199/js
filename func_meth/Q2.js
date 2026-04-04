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