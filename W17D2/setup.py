'''
  Testing Python files and programs
'''

def track_robot(lst):
  final = [0, 0]
  for move in lst:
    [direction, amt] = move.split(" ")
    if direction == "left": final[0] = final[0] - int(amt)
    if direction == "right": final[0] = final[0] + int(amt)
    if direction == "up": final[1] = final[1] + int(amt)
    if direction == "down": final[1] = final[1] - int(amt)
  return final


print(track_robot(["right 10", "up 50", "left 30", "down 10"]))
# Prints [-20, 40]

print(track_robot([]))
# Prints [0, 0]
# If there are no instructions, the robot doesn't move.

print(track_robot(["right 100", "right 100", "up 500", "up 10000"]))
# Prints [200, 10500]
