const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

const greaterThan25 = temperatures.filter((temp) => {
  if (temp >= 25) {
    return true;
  }
});

console.log(greaterThan25);

const lessThan20 = temperatures.filter((temp) => {
  if (temp < 20) {
    return true;
  }
});

console.log(lessThan20);

//(Celsius * 9/5) + 32

const fahrenheit = temperatures.map((temp) => {
  return temp * (9 / 5) + 32;
});

console.log(fahrenheit);

const tempGroup = temperatures.map((temp) => {
  if (temp >= 25) {
    return "warm";
  } else if (temp >= 20 && temp <= 24) {
    return "mild";
  } else if (temp < 20) {
    return "cool";
  }
});

console.log(tempGroup);

let max = 0;

temperatures.forEach((temp) => {
  if (temp > max) {
    max = temp;
    return max;
  }
});

console.log(max);

let min = Infinity;

temperatures.forEach((temp) => {
  if (temp < min) {
    min = temp;
    return min;
  }
});

console.log(min);
