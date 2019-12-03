var main = async () => {
    var value = await retryCall(printer);
    console.log("Final Value: " + value);
};

async function retryCall(call) {
    for(let i = 0; i < 3; i++) {
        try {
            var middle = await call(i);
            return middle;
        } catch (error) {
            console.log("Didn't Work for { " + error + " } time.");   
        }
    }
};

function printer(i) { 
    return new Promise((resolve, reject) => {
        if(i == 2) {
            resolve(i);
        }
        reject(i);
    });
}

main();
