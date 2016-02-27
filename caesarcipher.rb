# caesarcipher.rb
# https://www.hackerrank.com/challenges/caesar-cipher-1/submissions/code/17708373
#!/bin/ruby

n = gets.strip.to_i
s = gets.strip
k = gets.strip.to_i

s_a = s.split("")
s_ascii = []
s_a.each do |letter| 
    s_ascii << letter.ord
end

s_csr = []
s_ascii.each do |dig|
    dig_csr = nil
    if dig>=65 && dig<91
        # ASCII:65 = 'A' ... 'A' = alpha:1 ... ASCII - 65 = 1..26
        dig_csr = ((dig-65+k)%26)+65
    elsif dig>=97 && dig<123
        # ASCII:97 = 'a'... "   "   "   "   "  ASCII - 97 = 1..26
        dig_csr = ((dig-97+k)%26)+97
    else
        dig_csr = dig
    end
    s_csr << dig_csr.chr
end

puts s_csr.join("")