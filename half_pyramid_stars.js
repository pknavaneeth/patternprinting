/*Expected Output
*
**   
***
****
*****                                              */
const pyramid_level=5;

for(i=0;i<=pyramid_level;i++){
    let star='*';
    let output='';
    for(j=0;j<=i;j++)
        {
            output =output+star;
        };
    console.log(output);
};
