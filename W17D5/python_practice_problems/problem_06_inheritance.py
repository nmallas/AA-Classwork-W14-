# INHERITANCE
#
# Define two classes in this file. Neither need a constructor/__init__
#
# The "Rabbit" class should have a tell_us_about_yourself() method, that
#    prints a list of rabbitty attributes such as "floppy ears".
# The "Jackalope" class should inherit from the "Rabbit" class. It should also
#    have the same tell_us_about_yourself() method as a Rabbit, but should
#    additionally print "and antlers" on the line following the rabbit's
#    attributes to it's list of attributes.

# WRITE YOUR CODE HERE
class Rabbit:
    def tell_us_about_yourself(self):
        print("floppy ears, jump high")


class Jackalope(Rabbit):
    def tell_us_about_yourself(self):
        super().tell_us_about_yourself()
        print("and antlers")

jack = Jackalope()
print(jack.tell_us_about_yourself())
# => Prints the rabbit's string of attributes and
#    the jackalope's antlers on the next line
