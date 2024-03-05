try{
// Folgender Code wirft einen TypeError
    const zahl = 1024;

    zahl.map((item) => {
    console.log(item);
    });
    
}catch{
    console.log("I won't throw any type error")
}finally{
    console.log("I am finally done")
}