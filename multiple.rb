# input limit
#return number multiple 3 or 5 between 0 and limit

def sum_multiple(limit, * numbers  )
  (2..limit).to_a.find_all{ |x| numbers.any? {|n| x % n == 0 or x % n == 0} }.reduce(:+)
end


def multiple_three_five(limit)
  sum_multiple(limit,3,5)
end
