=begin 
Shave the Pincess, an effort to rank in some form on an obscure code-competition website.

Notes:
ASCII character codes for p, m, -: 
p : 112
m : 109
- :  45

Algorithm: 
0. Parse size parameter (m).
1. Generate a random number from 0 to 3.
  0. The four corners are: 
    UL: [0][0]     # 0
    UR: [0][n-1]   # 1
    BL: [n-1][0]   # 2
    BR: [n-1][n-1] # 3
2. Look in that corner first, then look in the others one by one.
  0. Potentially using a hash { :1:[0][0] ... :3:[n-1][n-1] } ? 
3. Presumably, we've found the princess. Store her corner in an integer.
4. Each int really only means one thing: which of four move-styles we use.
  0. i.e., whether we're going to move U,L; U,R; D,L; or D,R.
  1. So, if princess_corner == 0: # we could also use a case statement...
    2. updown = leftright = true
  3. if princess_corner == 1:
    4. updown = true
    5. leftright = false
  6. if princess_corner == 2:
    7. updown = false
    8. leftright = true
  9. if princess_corner == 3:
    10. updown = leftright = false
5. then, we just have to do this: 
  1. def move
  2.   updown ? UP : DOWN
  3.   leftright ? LEFT : RIGHT
  4. end
  5. 
  6. (m/2).times { move }
6. ???
7. PINCESS!
=end

# Autogenerate grids? # Tentatively DONE

updown = leftright = false # move flags
move_tracker = 0 

puts "How big-a you want-a the grid?\n"
m = gets.to_i

def look(corner) # looks in a corner for a Pincess.
  puts "look is getting called"
  
  if $grid && $grid[0] && $grid[0][0] 
    hash_corner = { 
      "0"=>$grid[0][0], 
      "1"=>$grid[0][n-1], 
      "2"=>$grid[n-1][0], 
      "3"=>$grid[n-1][n-1] 
    }  
  end
  
  princess_corner = hash_corner[corner]

  if princess_corner.ord == 112 # p
    puts "Found the Pincess!"
    case 
    when c == 0
      leftright = false
    when c == 1
      # we good
    when c == 2
      updown = true
    when c == 3
      updown = leftright = true
    else
      "ya screwed up."
    end
  else
    puts "Sorry Mario, but your Pincess is in another castle! c =" + c
    c.succ += 1
    if c > "3" then c = "0" end # this cycles us between "0" --> "3"
    look(c) # Keep looking until we find her.
  end
end

def displayPathtoPrincess(n,grid)
  puts grid 

  # Randomize starting square for better search
  roll = rand(4)
  puts "roll = " + roll.to_s
  look(roll)
  
  # we start out moving only up or down,
  # because the if statement returns
  # that direction first, unless
  # we've made it to the edge of the row
  # (symbolized by move_tracker).
  while move_tracker < n-1  
    if move_tracker < n/2
      if updown then puts("DOWN") else puts("UP") end
    else
      if leftright then puts("LEFT") else puts("RIGHT") end
    end
    move_tracker += 1 
  end
  # that's all, folks!
end

def makeu_griddu(m)
  grid = Array.new(m)

  (0...m).each do |i|
    s = ""
    m.times {s += "-"}
    grid[i] = s
  end
  
  # make-a tha Mario!
  grid[m/2][m/2] = "m"

  # make-a the Pincess!
  roll = rand(4)
  case 
  when roll == 0
    grid[0][0] = "p"
  when roll == 1
    grid[0][m-1] = "p"
  when roll == 2
    grid[m-1][0] = "p"
  else
    grid[m-1][m-1] = "p"
  end
  grid
end

$grid = makeu_griddu(m)

displayPathtoPrincess(m,grid)

# TODO: look() needs to return WHERE the Pincess is.