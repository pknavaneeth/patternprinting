/*Expected Output
*****
****
***
**
*                                                  */
const pyramid_level = 5;
for(i=1;i<=pyramid_level;i++){
    let star='*';
    let output='';
    for(j=pyramid_level;j>=i;j--){
        output=output+star;
    }
console.log(output);
};
