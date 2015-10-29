def pattern(n)
  case
  when n < 1
    out = ""
  when n == 1
    out = "1"
  else
  	out = (n.to_s*n.to_i + "," + pattern(n-1).to_s).split(",").reverse.join("\n")
  end  
  out
end

puts pattern(1)
puts pattern(5)
puts pattern(10)