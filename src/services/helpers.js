
// expects an array of {name: name, id: id}
// returns an array of objects with name and match
export const computeMatches = (names) => {
    let hat = names;
    let results = [];
    for(let i = 0; i < names.length; i++) {
        let currentPerson = names[i]
        let hatWithoutPerson = hat;
        hatWithoutPerson.filter(name => name.id !== currentPerson.id)
        let match = hatWithoutPerson[Math.floor(Math.random() * hatWithoutPerson.length)];
        hat.filter(name => name.id !== match.id)
        results.push({elf: currentPerson, match: match})
    }
    return results
}
