# 
# @param string object
# 

def abbreviation(name):
  """Concatenates the first letter of each word in a string preceeded by a full stop.
  Arguments:
  string - to be converted into an abbreviation
  Returns:
  string - abbreviation
  --- can also return a list if preferred by removing the join function.
  """
    return '.'.join([i.upper()[0] for i in name.split()])
print(function("a string here"))
