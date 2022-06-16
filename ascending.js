let a = 12;
let b = 45;
let c = 32;
function ascending(x,y,z){
    if(x>y && x>z){
        if(y>z){
         console.log (z,y,x);
        }else{
        console.log(z,x,y);
        }
    }if(b>c && b>a){
        if(c>a){
            console.log(x,z,y);
        }else{
         console.log(y,z,x);
        }
    }if(c>a && c>b){
        if(b>a){
            console.log(x,y,z);
        }else{
            console.log(y,x,z);
        }
    }
}
let result = ascending(a,b,c);