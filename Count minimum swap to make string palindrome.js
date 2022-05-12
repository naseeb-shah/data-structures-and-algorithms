
function countSwap(str){
    var n = str.length
    var count=0;
    var mid=Math.trunc(n/2)
    for(var i =0; i<mid; i++){
        var left=i
        var right=n-left-1
        while(left<right){
            if(str[right]==str[left]){
                break
            }else{
                right--
            }
        }
        if(left==right){
            return -1
    
        }
        // forswapelment
        for(var  j=right;j<n-left-1;j++){
            var temp=str[j]
            str[j]=str[j+1]
            str[j+1]=temp
            count++
        }
    }
    return count
}



// Driver code
var s = "aaaab";

// Function calling
var str = s.split("");
var str1 = s.split("");
var ans1 = countSwap(str);
rev = str1.reverse();
var ans2 = countSwap(rev);
console.log(Math.max(ans1, ans2));

// This code is contributed by ukasp.
