import random

guesses = 0
won = False

playerName = input("Hello! What is your name?\n")

randomNumber = random.randint(1,20)

print(f'Well, {playerName}, I am thinking of a number between 1 and 20.')



while guesses < 6:
  guess = input("Take a guess.\n")
  if int(guess) is randomNumber:
    guesses += 1
    print(f'Good job {playerName}! You guessed the number in {guesses} guesses!')
    won = True
    break
  if int(guess) < randomNumber:
    print("Your guess is too low")
  if int(guess) > randomNumber:    
    print("Your guess is too high.")
  guesses += 1

if not won:
  print(f"Sorry, {playerName}. You could not guess my number {randomNumber}.")
