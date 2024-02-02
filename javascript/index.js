const getWeather = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 1000);
  });
};

const promise = getWeather();
console.log(promise);
const success = (data) => {
  console.log(`success ${data}`);
};
promise.then(success);
