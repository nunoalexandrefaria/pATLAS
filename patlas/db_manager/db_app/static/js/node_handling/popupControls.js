const arrayToCsv = (array) => {
  // should parse an array with key: value, e.g. [
  let csvContent = "data:text/csv;charset=utf-8,"
  array.forEach( (entry) => {
    // each array will correspond to a row
    csvContent += entry + "\n"
  })
  const encodedUri = encodeURI(csvContent)
  // window.open(encodedUri)
  const link = document.createElement("a")
  link.setAttribute("href", encodedUri)
  link.setAttribute("download", "pATLAS_entry.csv")
  document.body.appendChild(link) // Required for FF
  link.click() // This will download the data file named "my_data.csv".
}