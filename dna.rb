def DNA_strand(dna)
  out = ""
  hosh = { "G"=>"C", "C"=>"G", "A"=>"T", "T"=>"A" }
  dna.each_char { |p| hosh.each_key { |x| if x == p then out += hosh[x] end } }
  out
end