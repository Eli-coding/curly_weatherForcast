export const questions = [
  {
    id: 1,
    question: "How would you describe your curl pattern?",
    answers: [
      { text: "Loose S-waves, mostly flat (2A/2B)", curlType: "wavy", porosityPoints: 0 },
      { text: "Defined S-waves with some volume (2C)", curlType: "wavy", porosityPoints: 0 },
      { text: "Bouncy spirals, quarter to penny-sized (3A/3B)", curlType: "curly", porosityPoints: 0 },
      { text: "Tight corkscrews or coils, pencil-sized or smaller (3C/4A/4B/4C)", curlType: "coily", porosityPoints: 0 },

      
    ]
  },
  {
    id: 2,
    question: "How much shrinkage do you experience when your hair dries?",
    answers: [
      { text: "Little to none — what I see wet is what I get" , porosityPoints: 0},
      { text: "About 25-50% — noticeable but manageable", porosityPoints: 0 },
      { text: "50-75% — significantly shorter when dry", porosityPoints: 0 },
      { text: "75%+ — looks completely different dry vs wet", porosityPoints: 0 }
    
     
    ]
  },
  {
    id: 3,
    question: "How does your hair absorb and retain moisture?",
    answers: [
      { text: "Water beads up and sits on my hair, takes forever to absorb (low porosity)", porosityPoints: 0 },
      { text: "Absorbs moisture steadily, holds it reasonably well (medium porosity)", porosityPoints: 1 },
      { text: "Soaks up water instantly but feels dry again quickly (high porosity)", porosityPoints: 2 },
      { text: "I honestly don't know", porosityPoints: 1 }
    ]
  },
  {
    id: 4,
    question: "Is your hair chemically processed or heat damaged?",
    answers: [
      { text: "Virgin hair — no color, relaxer, or heat damage", porosityPoints: 0 },
      { text: "Color treated only", porosityPoints: 1 },
      { text: "Heat damaged or previously relaxed", porosityPoints: 2 },
      { text: "Color treated AND heat damaged/chemically processed", porosityPoints: 2 }
    ]
  },
  {
    id: 5,
    question: "What is your main hair concern?",
    answers: [
      { text: "Frizz and humidity" , porosityPoints: 2},
      { text: "Dryness and hydration" , porosityPoints: 2},
      { text: "Shrinkage and definition" , porosityPoints: 1},
      { text: "Breakage and damage" , porosityPoints: 2}
    ]
  }]




