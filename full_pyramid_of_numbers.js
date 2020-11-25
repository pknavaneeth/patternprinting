/* Expected output
        1
      2 3 2
    3 4 5 4 3
  4 5 6 7 6 5 4
5 6 7 8 9 8 7 6 5                              */
const no_of_level=5;
for(i=1;i<=no_of_level;i++){
    let output =``;
    let space=' ';
    let l=i;
    let limit=((2*i)-1);
    for(j=no_of_level;j>i;j--)
        output=`${output}${space}`;
    for(k=1;k<=limit;k++){
        if(k<=(limit-1)/2){
            output=`${output}${l}`;
            l++;    
        }
        else
        {
            output=`${output}${l}`;
            l--;
        }
    };
    for(m=no_of_level;m>i;m--)
        output=`${output}${space}`;
    console.log(output);
};
