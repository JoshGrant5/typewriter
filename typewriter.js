const sentence = "hello there from lighthouse labs";

const delay = sentence => {
  let timePer = 50; 
  let index = 0;
  const printLetter = () => { 
    if (index < sentence.length) {
      process.stdout.write(sentence[index]); 
    } else {
      console.log('\n');
      return null; // is there a better way to break the loop?
    }
    index++;
    timePer += 10;
    setTimeout(printLetter, timePer);
  }
  printLetter();
}

delay(sentence);