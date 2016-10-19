# "Write a program that prints out a multiplication table of the first 10 prime numbers."
require 'rspec'

def next_prime n # must be fed a prime!
  if n > 2
    loop do
      i = 3
      n += 2
      q = Math.sqrt(n).to_i
      while (i <= q and (n % i != 0)) do
        i += 2
      end
      break if i > q
    end
    return n
  end

  n == 2 ? 3 : 2
end


def first_primes n
  a = [2]
  loop do
    break if a.length >= n
    a << next_prime(a[-1])
  end
  a
end


def pad(s,n)
  s = s.is_a?(String) ? s : s.to_s
  spaces = " " * ((n - s.length)/2)
  if s.length % 2 == 0 then s += " " end # for cases when division trims a space
  spaces + s + spaces
end


def table n
  list = first_primes(n)
  rows = []
  i = 0
  while i < list.length do 
    rows[i] = []
    j = 0
    while j < list.length do 
      rows[i][j] = list[i]*list[j]
      j += 1
    end
    i += 1
  end

  rows.each_with_index{|r,i| r.unshift(list[i])}
  rows.unshift(list.unshift(0))
end


# main body of program
string_table = ""
n = ARGV[0].to_i # accepts cmdline arguments
n > 0 ? n = n : n = 10 # default 10
rows = table(n)
maxlen = rows[-1][-1].to_s.length+2 # determine cell size from largest number
rows.each do |row|
  row.each do |col|
    string_table += pad(col,maxlen)+"|"
  end
  string_table += "\n" 
end

puts string_table
#/main body of program


# bdd function descriptors
describe "first_primes" do
  i = (100*rand).to_i+3 # so that we don't get less than 2

  it "should return prime numbers" do
    first_primes(i).each do |p|
      n = (2...p).to_a
      n.each do |factor|
        expect(p%factor).not_to eq(0)
      end
    end
  end

  it "should return as many primes as we ask for" do
   expect(first_primes(i).length).to eq(i)
  end
end


describe "next_prime" do
  i = (100*rand).to_i+3 

  it "should return a prime" do
    n = 2
    loop do
      n = next_prime(n)
      break if n >= i
    end

    (2...n).to_a.each do |factor|
      expect(n%factor).not_to eq(0)
    end
  end
end


describe "pad" do
  it "should accept numbers" do
    expect(pad(0,1).is_a?(String)).to eq(true)
  end

  it "should return strings of correct length" do
    j = (10*rand).to_i
    i = (12*rand).to_i + 10

    expect(pad("x"*j, i).length).to eq(i)
  end
end
