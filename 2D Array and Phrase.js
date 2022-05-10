m=['safer','amjad','babol','aaron','songs']
function twoArrayAndPhrase(n, m, matrix){
    //write code 
    console.log(`m=${matrix}`)
    var s ="saba"
 var cont=0;
    for(var i=0; i<n; i++){
        for(var j=0; j<m; j++){
            if(i<=n-4){
                /////for primaary diagonal
                var t= matrix[i][j]+matrix[i+1][j]+matrix[i+2][j]+matrix[i+3][j];
                
                if(t==s){
                    cont++;
                }
            }
            if(j<=m-4){
                //for rowscheck
                t= matrix[i][j]+matrix[i][j+1]+matrix[i][j+2]+matrix[i][j+3];
                 
                if(t==s){
                    cont++;
                }
            }
            if(j<=m-4 && i>=3){
                //for colum chek s
                t= matrix[i][j]+matrix[i-1][j+1]+matrix[i-2][j+2]+matrix[i-3][j+3];
               
                if(t==s){
                   cont++;
                }
            }
            if(i<=n-4 && j<=m-4){
                //for secondry dingonal 
                
                
                
                t = matrix[i][j]+matrix[i+1][j+1]+matrix[i+2][j+2]+matrix[i+3][j+3];
                if(t==s){
                    cont++;
                }
            }
        }
    }
    console.log(cont);
    
}
