# param max
# return array of even fibonacci number



def even_fibonacci(max,a,b)
  if a >= max
    return []
  end
 s =[ ]
 s=    [a]  if a.even?
 s  + even_fibonacci(max , a+b , a)
end
