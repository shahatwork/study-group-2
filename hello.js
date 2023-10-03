function printHelloName(name) {
    if (!name) {
        name ="Shah";
    }

    for (let i = 0; i < 5; i++) {
console.log(`Hello ${name}`);
    }
}

const args = process.argv.slice(2);

if (args.length === 0) {
    printHelloName();
} else {
    printHelloName(args[0]);
}
