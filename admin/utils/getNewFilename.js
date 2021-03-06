const getNewFilename = (data) => {
  // check whether file has contained folder path in filename
  // 5ff2779.jpg ==> need to format
  // 5ff2779/5ff2779.jpg ==> return original filename
  const { filename, id } = data.file
  const splitNameArray = filename.split('.')
  const ext = splitNameArray[splitNameArray.length - 1]

  // No matter what the path or name is, just return this format's filename
  const newFilename = `${id}.${ext}`

  return newFilename
}

module.exports = { getNewFilename }
