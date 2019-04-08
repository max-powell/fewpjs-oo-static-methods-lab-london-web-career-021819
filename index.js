class Formatter {
  static capitalize(string) {
    return string.slice(0,1).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-z1-9-'' ]/gi, '')
  }

  static titleize (string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const output = string.split(' ').map(function(word) {
      if (!exceptions.includes(word)) {
        return Formatter.capitalize(word)
      } else {
        return word
      }
    }).join(' ')
    return output[0].toUpperCase() + output.slice(1)
  }
}
