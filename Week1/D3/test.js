let me = {
    name: 'Viljams',
    surname: 'Carevs',
    email: 'william.carevs@gmail.com',
    age: 21
}
me.license = true
console.log(me)

let me2 = {
    name: 'Viljams',
    surname: 'Carevs',
    email: 'fabler65@gmail.com',
    age: 21
}
if(me.email !== me2.email) {
    console.log('me1 and me2 have different emails')
} else {
    console.log('me1 and me2 are the same')
}