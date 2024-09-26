const s = "v2tech";
let count = 0;

for (let i = 0; i < s.length; i++) {
  for (let j = i + 1; j < s.length; j++) {
    if (s[i] !== s[j]) {
      console.log(i);
      count = 1;
      break;
    }
  }
  if (count === 1) {
    break;
  }
}

if (count === 0) {
  console.log(-1);
}
