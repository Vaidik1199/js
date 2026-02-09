function quiz(a) {
    let count = 0;
    for (const char of a){
        if (char === 'a' ||
            char ==='e' || 
            char === 'i' || 
            char === 'o' || 
            char === 'u'
        ) {
            count++;
        }
    } 
    console.log(count);
}

quiz("hello there");