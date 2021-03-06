
// expects an array of {name: name, id: id}
// returns an array of objects with name and match
export const computeMatches = (names) => {
    let warning = false
    let hat = names;
    let results = [];
    for(let i = 0; i < names.length; i++) {
        let currentPerson = names[i]
        let hatWithoutPerson = hat.filter(name => name.id !== currentPerson.id)
        if(currentPerson.exception) {
            hatWithoutPerson = hatWithoutPerson.filter(name => name.id !== currentPerson.exception)
        }
        let match = hatWithoutPerson[Math.floor(Math.random() * hatWithoutPerson.length)];
        if(match) {
            hat = hat.filter(name => name.id !== match.id)
            results.push({elf: currentPerson, match: match})
        } else {
            warning = true
        }
    }
    if(warning) {
        alert("you may have had more exceptions than mathmatically possible!")
    }
    return results
}
