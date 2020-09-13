# DICTIONARY
#
# Write a function named "my_map" that takes a dictionary as a parameter.
# Return another dictionary that consists of the key/value pairs from the
# argument where the values are tripled. Use any construct that you want to
# implement "my_map".
#
#
#
#  --- YOUR CODE HERE ---

def my_map(dictionary):
    return {key: dictionary[key] * 3 for key in dictionary}


#
#  ------ EXAMPLES ------
#
print('filter', my_map({1: ".", 2: "..", 5: "..."}))     # => {1: "...", 2: "......", 3: "........."}
print('filter', my_map({}))                              # => {}
print('filter', my_map({1: 2, 2: 33, 5: 14}))            # => {1: 6, 2: 99, 5: 42}
