/* PASCALS TRIANGLE

           1
         1   1
       1   2   1
     1   3   3   1
   1  4    6   4   1
 1  5   10   10  5   1
 
 */

const no_of_level= 4;
let space=' ';
let main_array=[];
main_array.length=no_of_level;
main_array[0]=[1];
//array_initialization
for(g=1;g<no_of_level;g++){
  main_array[g]=[];
  main_array[g].length=(g+1);
}
//fibonnaci_series_creater
for(m=1;m<no_of_level;m++){
    for(n=0;n<=m;n++){
        if(n===0||n===m)
        main_array[m][n]=1;
        else
        main_array[m][n]=main_array[m-1][n-1]+ main_array[m-1][n];
    };
};
//entering_loop
for(i=0;i<no_of_level;i++){
    let output = ``;
    //free_space
    for(j=1;j<=(no_of_level-i);j++)
    output=`${output}${space}`;
    for(k=0;k<=i;k++)
    output=`${output} ${main_array[i][k]}`;
    console.log(output);
};
