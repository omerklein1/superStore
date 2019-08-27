
const obj = {
    name: 'omer',
    id: 14,
    email: 'oklein01@gmail.com'
}

let keys = Object.keys(obj),
values = ''

for (let i = 0; i < keys.length; i++) {
if(i == keys.length -1){
    values += `'${obj[keys[i]]}'`
}    else {
    values += `'${obj[keys[i]]}', `
}
}

console.log(values)
