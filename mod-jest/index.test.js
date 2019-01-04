const calsqre = require('./index').calcsqre;

test ('squre function ', () =>{
    expect(calsqre(3)).toBe(9);
});