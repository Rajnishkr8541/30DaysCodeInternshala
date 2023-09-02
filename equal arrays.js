function  equalarray {
let a= [1,2,5,4,0];
let b= [1,2,5,4,0];

if (a.length != b.length)
return "false";
else{
    for (let i=0; i<a.length; i++)
    if (a[i] != b[i])
    return " false";
return "true"
}
}
let v= equalarray();
console.log(v);