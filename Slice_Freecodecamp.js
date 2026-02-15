const truncateString =(str, num) => {
  // check wenn die länger von str kleiner gleich num
  if (str.length <= num) {
  return str
}
// sonst wird str länge nach num ( von 0 ) ausgeben.
else{
    return str.slice(0,num) + "..."
}}
;

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

console.log(truncateString("A-tisket a-tasket A green and yellow basket","A-tisket a-tasket A green and yellow basket".length)); 

console.log(truncateString("A-tisket a-tasket A green and yellow basket","A-tisket a-tasket A green and yellow basket".length + 2));