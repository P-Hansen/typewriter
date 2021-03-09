const sentence = "hello there from lighthouse labs\n";
let i = 0;
for (const char of sentence) {
  i += 0.5
  setTimeout(() => {
    process.stdout.write(char);
  }, 100*i);
}