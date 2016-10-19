# gridsearch.rb
# https://www.hackerrank.com/challenges/the-grid-search/submissions/code/17711733
#!/bin/ruby

t = gets.strip.to_i
for a0 in (0..t-1)
    R,C = gets.strip.split(' ')
    R = R.to_i
    C = C.to_i
    G = Array.new(R)
    for G_i in (0..R-1)
        G[G_i] = gets.strip
    end
    r,c = gets.strip.split(' ')
    r = r.to_i
    c = c.to_i
    P = Array.new(r)
    for P_i in (0..r-1)
        P[P_i] = gets.strip
    end
    gr = 0
    great = false
    while gr < R
        gc = 0
        while gc < C
            catch :nope do
                pr = 0   
                while pr < r
                    pc = 0
                    while pc < c
                        if G[gr+pr] != nil && P[pr] != nil
                            throw :nope unless G[gr+pr][gc+pc] == P[pr][pc]
                        end
                        pc+=1
                    end 
                pr+=1
                if pc == c && pr == r then great = true end
                end
            end
        gc+=1
        end
    gr+=1
    end
if great then puts "YES" else puts "NO" end    
end