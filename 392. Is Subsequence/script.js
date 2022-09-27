const isSubsequence  = (s, t) => {
    let p1 = 0
    let p2 = 0
    
    for(let i = 0; i < t.length; i++){

        if(s[p1] === t[p2]){
            p1++
            p2++
        }else{
            p2++
        }
    }
    return p0 = p1 === s.length;
}