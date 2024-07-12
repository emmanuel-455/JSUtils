const jsUtils2 = {
  // Convert a string to title case
  toTitleCase: (str) => {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  },

  // Get a random integer between min (inclusive) and max (inclusive)
  getRandomInt: (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // Check if an email address is valid
  isValidEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  },

  // Get the current time in HH:MM:SS format
  getCurrentTime: () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  },

  // Remove duplicates from an array
  removeDuplicates: (arr) => {
    return [...new Set(arr)];
  },

  // Check if a given year is a leap year
  isLeapYear: (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  },

  // Convert an object to a query string
  toQueryString: (obj) => {
    return Object.keys(obj)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
      .join('&');
  },

  // Get a random element from an array
  getRandomElement: (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
};

// Example usage:

console.log(jsUtils2.toTitleCase("hello world")); // "Hello World"
console.log(jsUtils2.getRandomInt(1, 10)); // A random integer between 1 and 10
console.log(jsUtils2.isValidEmail("test@example.com")); // true
console.log(jsUtils2.getCurrentTime()); // Current time in HH:MM:SS
console.log(jsUtils2.removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(jsUtils2.isLeapYear(2024)); // true
console.log(jsUtils2.toQueryString({ name: "Alice", age: 25 })); // "name=Alice&age=25"
console.log(jsUtils2.getRandomElement(["apple", "banana", "cherry"])); // A random element from the array
