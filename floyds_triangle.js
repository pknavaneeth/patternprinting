/* FLOYD'S TRIANGLE

1
2 3
4 5 6
7 8 9 10

 */
const no_of_level=4;
let input=1;
for(i=1;i<=no_of_level;i++){
    let output=``;
    for(j=1;j<=i;j++){
        output=`${output} ${input}`;
        input++;
    }
    console.log(output);
}
