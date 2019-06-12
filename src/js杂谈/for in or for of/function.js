function argumentsTest(params, ...rest) {
  console.log(arguments.length);

  for (let key in arguments) {
    console.log(`key: ${key}, value: ${arguments[key]}`);
  }

  for (let value of arguments) {
    console.log(`value: ${value}`);
  }

  console.log(arguments instanceof Array);
}

argumentsTest(1, 2, 3, 4, 5, 6);
