/*Expected Output
12345
1234
123
12
1                                                 */




const pyramid_level=5;
for(i=1;i<=pyramid_level;i++){
    let output=``;
    let iterator=1;
    for(j=pyramid_level;j>=i;j--){
        output= `${output}${iterator}`;
        iterator++;
    }
    console.log(output);
}