"""
    CODEWARS - Where My Anagrams At?
"""


def anagrams(word, words):

    def get_chars(word):
        return {char: word.count(char) for char in word}

    def equal(anagram_word, word=word):
        return anagram_word == get_chars(word)

    return list(filter(lambda x: equal(get_chars(x)), words))


def longest_consec(strarr, k):
    if k <= 0:
        return ""
    maxStr = ""
    for i in range(len(strarr) - k+1):
        string = "".join(strarr[i:i+k])
        if len(string) > len(maxStr):
            maxStr = string
    return maxStr

"""
    CODEWARS - Build a pile of cubes
"""


def find_nb(m):
    current = 1
    while m > 0:
        m -= (current ** 3)
        current += 1
    return (current - 1) if m == 0 else -1

"""
    CODEWARS - Write number in expanded form
"""


def expanded_form(num):
    string_num = str(num)
    expanded_nums = []
    for i in range(len(string_num)):
        char = string_num[i]
        if char != "0":
            expanded_nums.append(char + ("0" * (len(string_num) - i - 1)))
    return " + ".join(expanded_nums)


"""
    CODEWARS - Take a Number And Sum Its Digits Raised To
    The Consecutive Powers And ....¡Eureka!!
"""


def sum_dig_pow(a, b): # range(a, b + 1) will be studied by the function
    def eureka(num):
        return sum([int(x) ** (i + 1) for (i, x) in enumerate(str(num))]) == num
    return [num for num in range(a, b + 1) if eureka(num)]
