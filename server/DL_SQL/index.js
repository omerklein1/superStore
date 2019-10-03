

const mysql = require('mysql'),
    database = "LW2xRNJF3p",
    con = mysql.createConnection({
        host: 'remotemysql.com',
        user: database,
        password: 'mWdlJHyUkU',
        database
    })


function query(sqlString) {
    return new Promise((resolve, reject) => {
        con.query(sqlString, (err, result) => {

            if (err) reject(err.sqlMessage || err)
            resolve(result)

        })
    })
}


async function create(table, item) {
    let keys = Object.keys(item),
        values = '';

    for (let i = 0; i < keys.length; i++) {
        if (i == keys.length - 1) { values += `'${item[keys[i]]}'` }
        else { values += `'${item[keys[i]]}', ` }
    }

    console.log(`INSERT INTO ${table} (${keys.join(', ')})
    VALUES (${values})`)

    const res = await query(`INSERT INTO ${table} (${keys.join(', ')})
    VALUES (${values})`)
    if (res.affectedRows == 1)
        return read(table, product.id)
    throw 'create failed'
}



async function read(table, id) {
    let q = `SELECT * FROM ${table} `

    if (id) q += `WHERE id='${id}'`

    const res = await query(q)
    return id ? res[0] : res
}



async function update(table, product) {

    const res = await query(`UPDATE ${table} SET name='${product.name}', image='${product.image}', price='${product.price}' WHERE id='${product.id}'`)
    console.log(res)
    if (res.affectedRows == 1)
        return read(table, product.id)
    throw 'update failed'
}

async function del(table, id) {
    return query(`DELETE FROM ${table} WHERE id = '${id}';`)
}


// read('products', 'HT-1000').then(res => console.log(res))


// con.connect(async err => {
//     if(err) throw err

//      await query(`CREATE TABLE IF NOT EXISTS subCategories (
//         id VARCHAR(255),
//         name VARCHAR(255),
//         categoryId VARCHAR(255)
//         ) `)

//         await Promise.all(subCategories.map(pro => {
//          create('subCategories', {
//              id: pro.id,
//         name: pro.subCategory,
//         categoryId: pro.categoryId
//          }
//          )
//         }));
//      console.log('o.k!')
//  })


module.exports = { create, read, update, del }