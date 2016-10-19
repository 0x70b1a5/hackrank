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

  # okay, that didn't work. Too bad.

  # Try this: add "0" * (letters before l) for each letter, and "1" for the letter itself.
  
  #(a.downcase.chars.uniq.sort.map.with_index {|l,i| "0"*(((l.ord)-97)-(i+l.ord-) + "1"}).join()

  # Back to the original plan...
  #(("0"*26).chars.map.with_index { |d,i| (a.downcase.chars.uniq.sort.map { |c| c.ord-97 == i ? "1" : nil })||"0" }).join
  # THIS IS THE SOUND OF A MAN GIVING UP
end

puts "butts\n"*rand(50)
