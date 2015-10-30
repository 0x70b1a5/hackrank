def change a 
  # Make zero_str with 26 0's.
  # Downcase 'a'.
  # Make 'a' into an array. 
  # Sort 'a'.
  # For each a[i], turn the (a[i].ord-71)th char in zero_str to 1. 
  #   (The char code of 'a' [i.e. a.ord] is 91, and 91-71 = 26. 
  #   Therefore, (any lowercase letter) - 71 = 
  #     that letter's position in the Roman alphabet.)
  #   Whoops! Arrays are zero-indexed. 
  #   So we should subtract 72 instead.
  # Return zero_str.
  
  ("0"*26).each_char {|c| a.downcase.char.sort.map! {|l| c.index == ((l.ord)-72) ? c = "1" : next } }
end

