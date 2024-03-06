// Folgender Code wirft einen ReferenceError

try{
    meineLieblingsFunktion();
}catch{
    console.log("I won't catch the error");
}finally{
    console.log("I will be executed always");
}
