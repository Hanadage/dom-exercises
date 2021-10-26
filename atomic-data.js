const allEntries = [
  { name: 'someone', blurb: 'Drunken recitations of Russian poetry' },
  { name: 'someone', blurb: 'being ambidextrous' },
  { name: 'someone', blurb: 'Juggling' },
  {
    name: 'someone',
    blurb: 'Drinking only one cup of coffee and having the effects last all day.'
  },
  { name: 'someone', blurb: 'Memorizing and singing patter songs' },
  { name: 'someone', blurb: 'photography' },
  { name: 'someone', blurb: 'Stress' },
  { name: 'someone', blurb: 'having the best Shakira impersonation' },
  { name: 'someone', blurb: 'Topping, Crying in Robarts' },
  { name: 'someone', blurb: 'Improvised Solutions' },
  { name: 'someone', blurb: 'anxiety.' },
  { name: 'someone', blurb: 'time travel, power of love' },
  {
    name: "someone",
    blurb: 'I make a mean cup of tea n coffee'
  },
  {
    name: 'someone',
    blurb: 'Managing to keep a four year old store-bought orchid alive, but not alive enough to bloom'
  },
  {
    name: 'someone',
    blurb: 'interdisciplinary landscape poetics to stay human'
  },
  {
    name: 'someone',
    blurb: 'Completing tasks using the slowest, most complicated methods possible.'
  },
  { name: 'someone', blurb: 'eating alot of pasta' },
  {
    name: 'someone',
    blurb: 'Wearing shorts until the temperature is in single digits'
  },
  {
    name: 'someone',
    blurb: 'Reviving dying plants/raising food from soil'
  },
  { name: 'someone', blurb: 'late night food munching' },
  { name: 'someone', blurb: 'oversleeping' },
  { name: 'Avatar', blurb: 'Master of All Four Elements' },
  { name: 'someone', blurb: 'Proscratination, Eating alot' },
  {
    name: 'Matt',
    blurb: 'cooking, I can cook good food quick and easily'
  },
  { name: 'Naruto', blurb: 'jinchūriki, ninjutsu' },
  {
    name: 'someone',
    blurb: 'knitting really fast when I am stressed'
  },
  { name: 'Wolverine', blurb: 'Pianist' },
  { name: 'someone', blurb: 'adding and dropping programs' },
  { name: 'Spidey', blurb: 'spidey-sense, sticky hands, venom sting' },
  { name: 'Keener', blurb: 'late night cramming' },
  { name: 'Bones', blurb: 'falling off cliffs, jumping off bridges' },
  { name: 'someone', blurb: 'staying alive' },
  { name: 'JOKER', blurb: 'Psychic' },
  { name: 'BumbleZ', blurb: 'remarkable ability to be distracted' }
],

sample = {name: 'matt', blurb: 'just some guy'};


function letsTag(a,c,b={}){output=`<${c} `;Object.keys(b).map((k,i)=>output+=`${k}="${b[k]}" `);output+=`>${a}</${c}>`;return output}

function makeHeader(name) {
  let title = letsTag(name, 'h1');
  let header = letsTag(title, 'header')
  return header
}
      
function makeMain (blurb) {
  let text = letsTag(blurb, 'p')
  let someMain = letsTag (text, 'main', {class:'card'})
  return someMain
}
      
function makeFooter() {
  let link = letsTag('A Project of HIS393','a',
  {href: "https://digitalhistory.github.io"})
  let someFooter = letsTag(link, 'footer')
  return someFooter
}

function makeCard(){
  let output = '';
  output += makeHeader(person.name);
  output += makeMain(person.blurb);
  output += makeFooter();
  let someCard = letsTag(output, 'card');
  return someCard;
}

let person = {name: "someone",
blurb: 'I make a mean cup of tea n coffee'};

let make = makeCard();
make;

makeDeck = [];

for(entry of allEntries){
  makeDeck.push(makeCard());
}

makeDeck