async function a() {
    // return new Promise((resolve, reject) => {
    //     resolve(1);

    // });
    return 1;
}

async function main() {
    return await a();
}

console.log(a());

console.log(main());

// main().then((res) => {
//     console.log(res);
// });

// console.log(a().then(() => {
//     console.log('In then');
// }));
