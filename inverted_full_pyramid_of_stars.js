/*Expected Output

* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *
 */       


const no_of_level=5;
for(i=1;i<=no_of_level;i++){
    let star=`*`;
    let space=` `;
    let output=``;
    let limit=((2*no_of_level)-1);
    for(j=1;j<i;j++)
      output=`${output}${space}`;
    for(k=1;k<=(limit-(2*(i-1)));k++)
      output=`${output}${star}`;
    for(l=1;l<i;l++)
      output=`${output}${space}`;
    console.log(output);
    }

