const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name, activity, music, meal, food, sport, superpower;

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer) => {
        meal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          food = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              superpower = answer;
              const profile = `My name is ${name} (${name.split(' ')[0]} to my friends), and I enjoy ${activity}. 
                I listen to ${music} while ${activity}, and my favourite ${meal} is ${food}. 
                When it comes to sports, nothing beats ${sport}. 
                Finally, my superpower is ${superpower}.`;
              console.log(profile);
              rl.close();
            });
          });
        });
      });
    });
  });
});