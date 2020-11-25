/*Expected Output
1
12
123
1234
12345                                              */


const pyramid_level= 5;
for(i=1;i<=pyramid_level;i++){
    output='';
    for(j=1;j<=i;j++){
        output=`${output}${j}`
    }
    console.log(output);
}