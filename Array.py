def reverse_array(array):
    def swap(pos1, pos2, array):
        temp = array[pos1]
        array[pos1] = array[pos2]
        array[pos2] = temp
    length_array = len(array)
    for i in range(int((length_array/2))):
        swap(i, length_array - i - 1, array)
    return array

A = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(reverse_array(A))
