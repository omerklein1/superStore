const mysql = require('mysql'),
    database = "sdfsdvxcvdsrg",
    con = mysql.createConnection({
        host: 'gg',
        user: 'gg',
        password: 'gg',
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
        valuse = ''

    for (let i = 0; i < keys.length; i++) {
        if (i == keys.length - 1) { valuse += `'${item[keys[i]]}'` }
        else { valuse += `'${item[keys[i]]}', ` }
    }

    console.log(`INSERT INTO ${table} (${keys.join(', ')})
    VALUES (${valuse})`)

    const res = await query(`INSERT INTO ${table} (${keys.join(', ')})
    VALUES (${valuse})`)
    if (res.affectedRows == 1)
        return read(table, product.id)
    throw 'create failed'
}

