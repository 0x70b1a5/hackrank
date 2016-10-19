#!/bin/ruby
# cavitymap.rb
# https://www.hackerrank.com/challenges/cavity-map/submissions/code/17815034

n = gets.strip.to_i
gird = Array.new(n)
for grid_i in (0..n-1)
    gird[grid_i] = gets.strip
end

grid = gird.map {|x| x.split('')}

outgrid = []

for i in (0..n-1)
    for j in (0..n-1)
        if i==0 || i==n-1 || j==0 || j==n-1
            next
        end
        if (grid[i-1]!=nil && grid[i+1]!=nil && grid[i][j-1]!=nil &&
            grid[i][j+1]!=nil)
            if (grid[i][j] > grid[i-1][j] &&
                grid[i][j] > grid[i+1][j] &&
                grid[i][j] > grid[i][j+1] &&
                grid[i][j] > grid[i][j-1])
                grid[i][j] = 'X'
            end
        end
    end
    
    outgrid << grid[i].join('')    
end

puts outgrid