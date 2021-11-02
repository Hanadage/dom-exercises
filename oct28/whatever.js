let allthewomen = [
    {first:'Emma',
    last:'Goldman',
    affiliation: 'Anarchist'},
    {first:'Elizabeth',
    last:'Sanger',
    affiliation: 'population control'},
    {first:'Margaret',
    last:'Sanger',
    affiliation: 'population control'}
];

const emma = {first:'Emma',
last:'Goldman',
affiliation: 'Anarchist'};

function makeSentence(feminist){
    let feminist = {first:'Emma',
    last:'Goldman',
    affiliation: 'Anarchist'};
    return feminist.first + ' ' + fiminist.last + ' ' + feminist.affiliation + '.\n'
}

function makeAllSentences(people){
    let result = ''
    for (p of people){
        result += makeSentence(p)
    }
    return result
}

let a = makeAllSentences(allthewomen);
a;