// ARRAYS

const numbers: number[] = [2,3,4,5,7,]

// numbers.push('8') // só aceita números
numbers.push(8)

console.log(numbers, typeof numbers)

const names: string[] = ['João', 'Maria', 'Paulo', 'Pedro']

names.push('Lucas')

console.log(names, typeof names)

// OUTRA SINTAXE DE ARRAY

const nums: Array<number> = [1000, 2000, 3000]
const animals: Array<string> = ['Cat', 'Dog']

console.log(nums, typeof nums)
console.log(animals, typeof animals)


// ANY => O any transmite ao TS que qualquer tipo satisfaz a variável

console.log('-------------------------------ANY--------------------------------')

const items: any = [7, true, {}, 'Manga']

items.push([80, 90, 100])

console.log(items, typeof items)


