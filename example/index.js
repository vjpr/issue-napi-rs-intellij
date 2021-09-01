const { default: { sleep, sync } } = await import("../index.js");

const fixture = 42;
console.log(sync(fixture), fixture + 100);

const timeToSleep = 200;
const value = await sleep(timeToSleep);
console.log(value, timeToSleep * 2);
