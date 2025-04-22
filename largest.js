let n=[3,5,6,7,4,9] ;

let temp;
for(let i=0;i<n.length;i++){
    for(let j=i;j<n.length;j++){
        if(n[i]>n[j]){
            temp=n[i];
            n[i]=n[j];
            n[j]=temp
        }
    }
}
console.log(n[n.length-2])