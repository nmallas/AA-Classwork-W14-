def parse(string):
    special = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    }

    normal = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    value = 0

    while len(string):
        pair = string[0:2]
        if pair in special:
            value += special[pair]
            string = string[2:]
        else:
            value += normal[string[0]]
            string = string[1:]

    return value
