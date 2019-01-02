const Pool = require('pg').Pool
const pool = new Pool();

const readData = async(query, resparam)=>{
    let data;
    console.log("f1");
    try{
        let dbReesult =  await pool.query(query);
        
        if(dbReesult){
            data = dbReesult.rows[0][resparam];
        }
        console.log("f2");
    }catch(err){
        console.log("e2");
        return await Promise.reject(new Error("Whoops!"));
    }finally{
        console.log("f3");
        //await pool.end();
    }
    
    return data;
    
}

console.log("startig ...");
readData('SELECT NOW()', 'now').then((resolve)=>{
    console.log("Results1 found", JSON.stringify(resolve));
    return readData('SELECT NOW()', 'now');
}).then((resolve)=>{
    console.log("Results2 found", JSON.stringify(resolve));

}).catch((err)=>{
    console.log("Catch ERROR",err);
});

// readData('SELECT NOW()', 'now').then((resolve)=>{
//     console.log("Results2 found", JSON.stringify(resolve));
// }).catch((err)=>{
//     console.log("Catch ERROR",err);
// });
//console.log("Found results" +results);

