class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '')
  }
  static titleize(str) {
    const ex = "the a an but of and for at by from"
    let ary = str.split(" "), newStr = []
    ary.forEach((wrd) => {
      ex.includes(wrd) ? newStr.push(wrd) : newStr.push(Formatter.capitalize(wrd))
    })
    return newStr.join(" ")
  }
}