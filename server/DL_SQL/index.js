

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
    return MediaQueryList(`INSERT INTO ${table} (id, name, categoryId, subCategoryId, price, image, description) VALUES ('${item.id}', '${item.name}', '${item.categoryId}', '${item.subCategoryId}', ${item.price}, '${item.image}', '${item.description}')`)
}


   con.connect(async err => {
       if(err) throw err

        await query(`CREATE TABLE IF NOT EXISTS products (
           id VARCHAR(255),
           name VARCHAR(255),
           categoryId VARCHAR(255),
           subCategoryId VARCHAR(255),
           price INT,
           image VARCHAR(255),
           description VARCHAR(255)
           ) `)

           const dataJSON = require('./dataPRO')
           const temp = []
           dataJSON.ProductCollection.filter(i => temp.push(i.Category))
           const categoryId = new Set(temp)
           
           console.log(categoryId)

        //    await Promise.all(dataJSON[0].map(pro => {
        //     create('products', {
        //         id: pro.ProductId,
        //    name: pro.Name,
        //    categoryId ,
        //    subCategoryId VARCHAR(255),
        //    price INT,
        //    image VARCHAR(255),
        //    description VARCHAR(255)
        //     }
        //     )
        //    }));
           console.log('o.k!')
    })

