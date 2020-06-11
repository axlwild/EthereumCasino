

a = 10;
new Promise((resolve, reject) => {
    resolve(15);
    return;
}).then((result) => {
    console.log("El resultado es " + result)
    return 20;
}).then((anotherResult) => {
    console.log("El nuevo res es " + anotherResult)
    resolve(10);
}).then((anotherResultAgain) => {
    console.log("El nuevo res again es " + anotherResultAgain)
    return 10;
});