def change a 
  # Make zero_str with 26 0's.
  # Downcase 'a'.
  # Make 'a' into an array. 
  # Sort 'a'.
  # For each a[i], turn the (a[i].ord-96)th char in zero_str to 1. 
  #   (The char code of 'a' [i.e. a.ord] is 97, and 97-96 = 1. 
  #   Therefore, (any lowercase letter) - 96 = 
  #   that letter's position in the Roman alphabet.)
  # Whoops, make that 97 because zero-index.
  # Return zero_str.
  
  (("0"*26).split("").map.with_index {|c, i| a.downcase.chars.sort.map {|l| i == ((l.ord)-97) ? c = "1" : next } }).join("")
end

puts change("butts")
