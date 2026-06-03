export const questions = [
  {
    id: 1,
    question: "How would you describe your curl pattern?",
    answers: [
      { text: "A) Loose S-waves, mostly flat (2A/2B)"},
      { text: "B) Defined curls, medium to tight (2C/3A)"},
      { text: "C) Tight curls, very defined (3B/3C)"},
      { text: "D) Very tight curls, almost straight (4A/4B)" },
      { text: "E) Extremely tight curls, very defined (4C/4D)", points: { chihuahua: 1 } },
      { text: "F) Very loose waves, mostly flat (2A/2B)", points: { corgi: 1 } }
    ]
  },
  {
    id: 2,
    question: "Your debugging process looks like:",
    answers: [
      { text: "console.log(EVERYTHING), Google frantically, maybe cry a little 🐶", points: { puppy: 1 } },
      { text: "Team debugging session! Let's pair on this! More eyes are better!", points: { golden: 1 } },
      { text: "Binary search the problem, use proper debugging tools, write test to prevent regression", points: { collie: 1 } },
      { text: "*Loud verbal processing for entire office to hear*", points: { husky: 1 } },
      { text: "Fight the code until it submits", points: { chihuahua: 1 } },
      { text: "Isolate issue, fix, done", points: { corgi: 1 } },
      { text: "Carefully add logging, terrified I'll break something else", points: { dane: 1 } },
      { text: "Start debugging X, discover Y is also broken, investigate Z, forget what X was", points: { beagle: 1 } },
      { text: "Try 5 things rapidly, one works, ship it", points: { greyhound: 1 } },
      { text: "Borrala, le pegas fuego y le hechas agua bendita, eso puede que solucione el problema 🤣", points:{husky:1,chihuahua:1,corgi:1}}
    ]
  },
  {
    id: 3,
    question: "Your Git commit messages are typically:",
    answers: [
      { text: "i think i did it? pls work 🙏 or just asdfasdf", points: { puppy: 1 } },
      { text: "Added awesome new feature! Team is gonna love this! 🎉✨", points: { golden: 1 } },
      { text: "feat(auth): Implement OAuth2.0 with PKCE flow per RFC-7636", points: { collie: 1 } },
      { text: "FINALLY!!! FIXED THE THING THAT WAS DRIVING ME INSANE!!!", points: { husky: 1 } },
      { text: "MADE IT WORK. DEAL WITH IT.", points: { chihuahua: 1 } },
      { text: "fix bug", points: { corgi: 1 } },
      { text: "Sorry, I think I broke something in my last commit, this might fix it?", points: { dane: 1 } },
      { text: "Started fixing login, found issue in nav, also updated footer", points: { beagle: 1 } },
      { text: "updates *48 files changed*", points: { greyhound: 1 } }
    ]
  },
  {
    id: 4,
    question: "How many Stack Overflow tabs do you currently have open?",
    answers: [
      { text: "47 tabs: half SO, half tutorials, also YouTube playing in background 🐶", points: { puppy: 1 } },
      { text: "3-5 tabs of helpful community discussions", points: { golden: 1 } },
      { text: "1-2, and only after exhausting official documentation", points: { collie: 1 } },
      { text: "TOO MANY AND THEY'RE ALL STRESSING ME OUT", points: { husky: 1 } },
      { text: "Zero. I AM Stack Overflow", points: { chihuahua: 1 } },
      { text: "1. Found my answer, closed it", points: { corgi: 1 } },
      { text: "5-6, worried my question is too dumb to ask", points: { dane: 1 } },
      { text: "23+ from following rabbit holes for the past 3 hours", points: { beagle: 1 } },
      { text: "0. Already implemented solution from first result", points: { greyhound: 1 } }
    ]
  },
  {
    id: 5,
    question: "You just made your code work, but you don't know why:",
    answers: [
      { text: "🎉 CELEBRATE LIKE I WON THE LOTTERY 🎉 then panic it might break 🐶", points: { puppy: 1 } },
      { text: "Share with team! Let's learn together why it works!", points: { golden: 1 } },
      { text: "Unacceptable. Must understand completely before proceeding", points: { collie: 1 } },
      { text: "IT WORKS! ...WAIT WHY DOES IT WORK?! *NEW PANIC*", points: { husky: 1 } },
      { text: "Works = victory. Who cares why", points: { chihuahua: 1 } },
      { text: "Make mental note to revisit later (probably won't)", points: { corgi: 1 } },
      { text: "Carefully document what I did, just in case", points: { dane: 1 } },
      { text: "Spend next 2 hours investigating why instead of moving on", points: { beagle: 1 } },
      { text: "Ship it. Next task.", points: { greyhound: 1 } }
    ]
  }]