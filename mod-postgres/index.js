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

const closepool = async() => {
    await pool.end();
    console.log("POOL CLOSED !!");
}

console.log("startig ...");
//This is also a promise chaining example. 
readData('SELECT NOW()', 'now').then((resolve)=>{
    console.log("Results1 found", JSON.stringify(resolve));
    return readData('SELECT NOW()', 'now'); //Skip this if chaining not required.
}).then((resolve)=>{ //Skip this if chaining not required.
    console.log("Results2 found", JSON.stringify(resolve));
    return closepool();
    
}).then((resolved)=>{
    console.log("POOL CLOSED AND Finalized");
})
.catch((err)=>{
    console.log("Catch ERROR",err);
    closepool();
});



