async function fun() {
    try {
        var result = await sync();
        console.log(result);
    } catch (e) {
        console.log("rejected: "+e);
    }
}

async function sync() {
    return 1;
    return Promise.resolve(1);
}

fun();