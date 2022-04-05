
# LIMITACIONES:


# MEJORAS:

my_dictionary = {}


def add_value(key, value):
    my_dictionary[key] = value


def get_value(key):
    if key in my_dictionary:
        return my_dictionary[key]
    return None


def get_all_values():
    return my_dictionary.items()


def count_global_repeats(input):
    for char in input:
        if char != ' ':
            # El get y add value del hash map es O(1)
            current_char_count = get_value(char)
            # Not repearted value
            if current_char_count == None:
                add_value(char, 1)
            else:
                add_value(char, 1+current_char_count)
    # Complejidad O(n)


def length_without_repeats(string):
    string_without_repeats = ''
    for char in string:
        # El get value del hash map es O(1)
        current_char_count = get_value(char)
        if current_char_count == 1:
            string_without_repeats += char
    # Complejidad O(m) donde m es la cantidad de caracteres en string
    return len(string_without_repeats)


# Suponga un input de tamanio n
def find_max_length(input):
    # Esto es O(n) pues recorre una unica vez el input
    # e internamente usa un hash map que busca y guarda en tiempo constante
    count_global_repeats(input)
    strings = input.split(" ")
    max_len = 0
    current_len = -1
    # Este for es O(n) pues vuelve a iterar todos los caracteres, pero en partes separadas
    for string in strings:
        current_len = length_without_repeats(string)
        if current_len > max_len:
            max_len = current_len
    # Complejidad O(n)
    return max_len


# Pseudo codigo:
# 1. Para la hilera original, recorra una vez toda la hilera y cuente la cantidad de repetidos usando un hash map (ignorando espacios)
# 2. Divida la hilera principal por espacios, para obtener un arreglo de strings
# 3. Para cada string S en el arreglo, inicializa una nueva hilera en blanco B, recorra cada caracter C de S
# 4. Si el caracter C de S en el hash map (que se lleno en paso 1) tiene un valor asociado igual a 1, concatena el C en B
# 5. Retorna el length B quien no tiene ningun caracter repetido

print(find_max_length('xyzabc aaa123x45'))
