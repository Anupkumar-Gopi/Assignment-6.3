var limit = 1000; // variable to hold upper limit of number
var sum = null; // display sum variable
var j = 0; // variable to hold lower limit of number
for(i=1;i<=limit;i++){
	sum+=i;
}
console.info("Using For Loop\n","The sum of numbers upto",limit,"is",sum);// console output of sum using for loop
sum = null; // re-initialise sum to null
while(j<=limit){
	sum+=j;
	j++;
}
console.info("Using While Loop\n","The sum of numbers upto",limit,"is",sum);// console output of sum using while loop
