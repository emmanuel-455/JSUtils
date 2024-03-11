// JSUtils Library
var JSUtils = (function() {
    // Private functions
  
    // Public API
    return {
        // String manipulation functions
        capitalize: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        reverseString: function(str) {
            return str.split("").reverse().join("");
        },
        
        // Array operations
        shuffleArray: function(arr) {
            var shuffledArr = arr.slice();
            for (var i = shuffledArr.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
            }
            return shuffledArr;
        },
        arrayUnique: function(arr) {
            return Array.from(new Set(arr));
        },
        
        // Date formatting
        formatDate: function(date, format) {
            var day = date.getDate();
            var month = date.getMonth() + 1; // Months are zero indexed
            console.log()
            var year = date.getFullYear();

            format = format.replace("dd", day < 10 ? "0" + day : day);
            format = format.replace("MM", month < 10 ? "0" + month : month);
            format = format.replace("yyyy", year);

            return format;

        },
        
        // Math calculations
        fibonacci: function(n) {
           
                var fibonacciSequence = [];
                var prev = 0;
                var curr = 1;
    
                for (var i = 0; i < n; i++) {
                    fibonacciSequence.push(curr);
                    var next = prev + curr;
                    prev = curr;
                    curr = next;
                }
    
                return fibonacciSequence;
        },

        isPrime: function(num) {
            if (num <= 1) return false;
            if (num <= 3) return true;
            if (num % 2 === 0 || num % 3 === 0) return false;
            for (var i = 5; i * i <= num; i += 6) {
                if (num % i === 0 || num % (i + 2) === 0) return false;
            }
            return true;
        },

         // Check if a number is even
         isEven: function(num) {
            return num % 2 === 0;
        }
        
        // More utility functions can be added here
    };
  })();
  