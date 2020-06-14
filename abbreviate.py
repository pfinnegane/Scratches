def abbreviation(name):
  """abbrevation(string) => string
  Concatenates the first letter of each word in a string preceeded by a full stop.
  Can also return a list if preferred by removing the join function.
    @param string - to be converted into an abbreviation
    @return string - abbreviation
  """
  return '.'.join([i.upper()[0] for i in name.split()])
print(abbreviation("a string here"))
