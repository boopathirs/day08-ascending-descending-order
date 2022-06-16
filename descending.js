let a = 12;
let b = 21;
let c = 9;
function descending(x,y,z){
if(a>b && a>c){
    if(b>c){
        console.log(a,b,c);
    }else{
        console.log(a,b,c);
    }
}if(b>a && b>c){
    if(a>c){
        console.log(b,a,c);
    }else{
        console.log(b,c,a);
    }
}if(c>a && c>b){
    if(a>b){
        console.log(c,a,b);
    }else{
        console.log(c,b,a);
    }
}
}
let ans = descending(a,b,c);