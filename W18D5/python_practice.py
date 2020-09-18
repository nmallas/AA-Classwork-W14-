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
