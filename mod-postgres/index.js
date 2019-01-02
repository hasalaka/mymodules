const Pool = require('pg').Pool
const pool = new Pool();

const readtime = async()=>{
    let data;
    console.log("f1");
    try{
        let dbReesult =  await pool.query('SELECT NOW()1');
        console.log('XXXXXXXXXXXX' + dbReesult)
        
        if(dbReesult){
            data = dbReesult.rows[0]['now'];
        }
        console.log("f2");
    }catch(err){
        console.log("e2");
        //throw err;
        //return await Promise.reject("Error with the query");
        return await Promise.reject(new Error("Whoops!"));
    }finally{
        console.log("f3");
        await pool.end();
    }
    

    
    return data;
    
}

console.log("startig ...");
let results = readtime().then((resolve, reject)=>{
    console.log("ERROR",reject);
    console.log("Results found", JSON.stringify(resolve));
}).catch((err)=>{
    console.log("Catch ERROR",err);
});
//console.log("Found results" +results);

