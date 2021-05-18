function Render(template: string, args: object) {
  const mustache : RegExp = new RegExp('([{}])', 'g') //RegEx for just the { }
  const allMustache : RegExp = new RegExp('{([^{}]*)}') //RegEx for the whole word with {}
  let NewTemplate : string;
  const Strings: any = template.match(allMustache) //Get all {words} returns the {} also
  const NewStrings: Array<string> = [] //Create a new array where we will remove the {} from the words
  Strings.forEach((data: string) => { //For Each {word}
    let NewString = data.replace(mustache, " ").trim() //Remove the {}
    NewStrings.push(NewString)
    console.log("New Strings array: ", NewStrings)
  })
  console.log("Old Array:", Strings)
Strings.forEach((data: { [Symbol.replace](string: string, replaceValue: string): string; }) => { //For Each {word}
    Object.keys(args).forEach(key => { //For Each key in the Object
      NewStrings.forEach((_string: string) => { //For Each word in the New Strings array
        if (_string === key) { //if the word in the array matches the object key we have a match
          console.log("Match", _string, key)
          NewTemplate = template.replace(data, args[key]) //Replace the words in the Template with the words in the Object
          NewStrings.splice(NewStrings[key])
          console.log("Object Key Value", args[key])
        } else {
          console.log("MATCH FAILED", "Object Key:", key, "String array:", _string)
        }
      })
    })
})
console.log(NewTemplate) //Log the New template
}




const data = {
  name: "BOB"
}

Render('Hello World My Name is {name}', data)

