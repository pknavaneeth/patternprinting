/*Expected Output
A
BB
CCC
DDDD
EEEEE                            */
const pyramid_level=5;
let alphavalue=65;
for(i=1;i<=pyramid_level;i++){
    let output=``;
    let alphabet=String.fromCharCode(alphavalue);
    for(j=1;j<=i;j++){
        output=`${output}${alphabet}`
    }
    alphavalue++;
    console.log(output);
}