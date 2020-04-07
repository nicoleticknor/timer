//Implement an alarm clock / timer which will beep after a specified
//amount of time has passed. The user can specify an unlimited number
//of alarms using command line arguments

//so we need to use process.argv.slice(2) sorted a-b
const input = process.argv.slice(2);

//there's gotta be a way to do this inline with declaring input
const delays = input.reduce((acc, i) => {
  i = +i * 1000;
  //to control for negs and NaNs
  if (i >= 0) {
    acc.push(i);
    acc.sort((a, b) => a - b);
    return acc;
  } else {
    return acc;
  }
}, []);

// console.log(delays);

///okay let's make our timer function
//process.stdout.write('\x07') is not making a sound for me in node or here
//so I'm going with the string 'hello '
for (let i = 0; i < delays.length; i++) {
  setTimeout(() => {
    process.stdout.write('hello ');
    if (i === delays.length - 1) {
      process.stdout.write('\n');
    }
  }, delays[i]);
}

