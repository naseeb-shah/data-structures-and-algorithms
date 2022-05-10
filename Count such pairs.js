 var arr=[ 
    -1 ,1, -1, 1, -1 ] 
n=5, x=0
// return number of pairs
console.log(countpairs(arr,n,x))
function countpairs(arr,n,x){
    arr.sort((a,b)=>a-b)
    console.log(arr)
    var l=0;
    var r=n-1
    var no_pairs=0
    while(l<r){
        if(arr[l]+arr[r]==x){
            no_pairs++
            l++
            r--
        }else if(arr[l]+arr[r]>x){
            r--
        }else{
l++
        }
    }
    return no_pairs
}
function countSuchPairs(N,K,A){
    var count=0;
      var sum=0;
    for(var i =0; i<A.length;i++){
        for(var j =i+1;j<A.length;j++){
            
            
            if(A[i]+A[j]==K){
                
                count++;
            }
        }
        
      
       
            
        }
        
        
        
    console.log(count)
}
