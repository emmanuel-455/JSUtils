const jsUtils = {
  // Deep clone an object
  deepClone: (obj) => {
    return JSON.parse(JSON.stringify(obj));
  },

  // Debounce function to limit how often a function can fire
  debounce: (func, wait) => {
    let timeout;
    return function (...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Format a date as YYYY-MM-DD
  formatDate: (date) => {
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate()}`.padStart(2, '0');
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  },

  // Generate a random string of given length
  randomString: (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },

  // Check if an object is empty
  isEmptyObject: (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },

  // Capitalize the first letter of a string
  capitalizeFirstLetter: (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  // Get query parameters from a URL
  getQueryParams: (url) => {
    const params = {};
    new URL(url).searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  },

  // Throttle function to ensure a function is only called at most once in a given period
  throttle: (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
};

// Example usage:

// Deep clone an object
const original = { name: 'Alice', age: 25 };
const clone = jsUtils.deepClone(original);
console.log(clone);

// Debounce a function
const debouncedFunc = jsUtils.debounce(() => console.log('Debounced!'), 300);
window.addEventListener('resize', debouncedFunc);

// Format a date
console.log(jsUtils.formatDate(new Date()));

// Generate a random string
console.log(jsUtils.randomString(10));

// Check if an object is empty
console.log(jsUtils.isEmptyObject({})); // true

// Capitalize the first letter of a string
console.log(jsUtils.capitalizeFirstLetter('hello')); // Hello

// Get query parameters from a URL
console.log(jsUtils.getQueryParams('https://example.com?foo=bar&baz=qux'));

// Throttle a function
const throttledFunc = jsUtils.throttle(() => console.log('Throttled!'), 1000);
window.addEventListener('scroll', throttledFunc);
