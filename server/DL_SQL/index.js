
// const addId = (object) => {
//     let i = 1;
//     object.forEach(e => { e.id = i; e.icon = 'none'; i++ })
//     return object
// }

// const changeId = (arrayChange, dataArray, same, diffrent) => {
//     arrayChange.forEach(s => {
// let i = dataArray.findIndex(c => s[same] == c[same])
// s[diffrent] = dataArray[i].id
// })
// }

// function removeDuplicates(originalArray, prop) {
//     var newArray = [];
//     var lookupObject = {};
    
//     for (var i in originalArray) {
//         lookupObject[originalArray[i][prop]] = originalArray[i];
//     }

//     for (i in lookupObject) {
//         newArray.push(lookupObject[i]);
//     }
    
//     return newArray;
// }



// const dataJSON = require('./dataPRO'),
//     jsonfile = require('jsonfile'),
//     { ProductCollection } = dataJSON;
//     let temp = [],
//     category = [],
//     subCategory = [];

    
// ProductCollection.filter(i => temp.push({ subCategory: i.subCategory, category: i.category }))
// category = removeDuplicates(temp, 'category')
// subCategory = removeDuplicates(temp, 'subCategory')

// temp = []

// category.forEach(c => {
//     temp.push({ category: c.category })
// });

// category = temp;
// addId(category)
// addId(subCategory)

// changeId(subCategory, category, "category", "categoryId")
// changeId(ProductCollection, category, "category", "categoryId")
// changeId(ProductCollection, subCategory, "subCategory", "subCategoryId")

// jsonfile.writeFileSync('subCategories.json', subCategory);
// jsonfile.writeFileSync('categories.json', category);
// jsonfile.writeFileSync('dataAfterChange.json', ProductCollection);

const data = require('./dataAfterChange'),
categories = require('./categories'),
subCategories = require('./subCategories');

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
    return query(`INSERT INTO ${table} (id, name, categoryId)
    VALUES ('${item.id}', '${item.name}', '${item.categoryId}')`)
}


   con.connect(async err => {
       if(err) throw err

        await query(`CREATE TABLE IF NOT EXISTS subCategories (
           id VARCHAR(255),
           name VARCHAR(255),
           categoryId VARCHAR(255)
           ) `)

           await Promise.all(subCategories.map(pro => {
            create('subCategories', {
                id: pro.id,
           name: pro.subCategory,
           categoryId: pro.categoryId
            }
            )
           }));
        console.log('o.k!')
    })


