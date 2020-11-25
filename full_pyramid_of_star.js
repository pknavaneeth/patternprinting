/* Expected Output
    *
   ***
  *****
 *******
*********                       */
const pyramid_level=5;
for(i=1;i<=pyramid_level;i++){
    let space= ` `;
    let star=`*`;
    let output = ``;
    for(j=pyramid_level;j>i;j--){
        output=`${output}${space}`;
    };
    for(k=1;k<(2*i);k++){
        output=`${output}${star}`; 
    };
    for(l=pyramid_level;l>i;l--){
        output=`${output}${space}`;
    };
    console.log(output);
};