const fruit = ['orange', 'apple', 'mango', 'grape', 'blueberry']

// toString() method
// The toString() returns a string with array values separated by commas. And it does not change the original array
const toString_method = fruit.toString()

console.log(toString_method)


// Join() method
// The Join() returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
// array.join(seprator)
const join_method = fruit.join("-")

console.log(join_method)

const firstname = "Adegbite"
const lastname = "Famosa"
const fullname = [firstname, lastname]

console.log(fullname)

const full_name = fullname.join(" ")

console.log(full_name)


// Pop() Method
//  The pop() method removes the last element of an array. and returns the removed element. And this method changes the original array.
// array.pop()
console.log(fruit)

const pop_method = fruit.pop()

console.log(pop_method)

console.log(fruit)



// Push() Method
// The push() add new items to the end of an array. and its changes the length of the array. 
// array.push(item1, item2, ......, itemX)

console.log(fruit)

const push_method = fruit.push("blueberry")

console.log(push_method)

console.log(fruit)


// Shift() Method
//  The shift() removes the first element of an array. and returns the removed element. And this method changes the original array.
// array.shift()

console.log(fruit)

const shift_method = fruit.shift()

console.log(shift_method)

console.log(fruit)


// Unshift() Method
//  The unshift() add new items to the begining of an array. and its changes the length of the array. 
// array.unshift(item1, item2, ....., itemX)

console.log(fruit)

const unshift_method = fruit.unshift('orange')

console.log(unshift_method)

console.log(fruit)


// Delete (operator) Method
// Array elements can be deleted using the  JavaSchript operator delete. Using delete leaves undefined holes in the array.
// delete array[index];

console.log(fruit)

const delete_method = delete  fruit[2]

console.log(delete_method)

console.log(fruit)


// concat() Method
// The concat() method concatenates (joins) two or more arrays. returns a new array, containing the joined arrays.
// Note: This method does not change the existing arrays.
// array1.concat(array2, array3, ..., arrayX)

const ary1 =  [1, 2, 3]
const ary2 = [23, 43, 53]
const ary3 = [111, 112]

const ary_new = ary1.concat(ary2, ary3)

console.log(ary_new)


// Sort() Method
// The sort() sorts the elements of an array, and overwrites the original array. Sorts the elements as strings in alphabetical and ascending order.
// array.sort()

console.log(fruit)

const sort_method = fruit.sort()

console.log(sort_method)

console.log(fruit)


// Splice() Method
// The splice() method adds and/or removes array elements. The method overwrites the original array.
//  array.splice(starting_index, howmany_items_to_replace, items_to_be_replace_with)
// array.splice(index, howmany, item1, ...., itemX)

console.log(fruit)

const splice_method = fruit.splice(2, 1, "banana")

console.log(fruit)


// Slice() Method
// The slice() slices out a piece from an array. It creates a new array.
// array.slice(start, end);

console.log(fruit)

const slice_method =  fruit.slice(2,4)

console.log(slice_method)


// Reverse() Method
// The reverse() method reverses the order of the elements in an array. The method overwrites the original array.
//  array.reverse()

console.log(fruit)

const reverse_method = fruit.reverse()

console.log(reverse_method)

console.log(fruit)





