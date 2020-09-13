# BUILTINS
#
# Write a function named "filter_s_words" that accepts an iterable
#   containing strings and returns a list of the lists that have at least
#   one 's' character.
#
#  Use the "filter" method to do this.
#
#
#
#
#  --- YOUR CODE HERE ---
def filter_s_words(iterable_of_strings):
    return [w for w in iterable_of_strings if "s" in w]



#
#  ------ EXAMPLES ------
#
words = ["sassafras", "succotash", "balderdash", "ginger", "cinamon", "dog"]
print(filter_s_words(words))  # => ["sassafras", "succotash", "balderdash"]
