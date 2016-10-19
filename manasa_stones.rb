# manasa_stones.rb
# https://www.hackerrank.com/challenges/manasa-and-stones/submissions/code/17845869

t = gets.to_i
for tee in (0..t-1)
    n = gets.to_i
    a = gets.to_i
    b = gets.to_i
    
    outs = Hash.new(0)
    ayy = n-1
    bee = 0
    for enn in (0..ayy)
        outs[(ayy-bee||0)*a+bee*b] = 0
        bee+=1
    end
    
    puts outs.keys.sort.join(" ")
end