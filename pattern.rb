def pattern(n)
  (1..n).map{|x| x.to_s*x}.join("\n")
end

# the first time, i needed to know two things: 
# 1. String * int = StringStringString...(int)String
# 2. Range method was a good idea, but use MAP instead of each/do/whatever.
puts pattern(1)
puts pattern(5)
puts pattern(10)