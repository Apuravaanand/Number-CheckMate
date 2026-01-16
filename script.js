function checkValue() {
    const type = document.getElementById("checkerType").value;
    const input = document.getElementById("userInput").value.trim();
    const result = document.getElementById("result");

    result.textContent = "";

    if (!type) {
        result.textContent = "Please select an option";
        return;
    }

    if (!input) {
        result.textContent = "Please enter a value";
        return;
    }

    switch (type) {
        case "prime": {
            const num = Number(input);
            if (!Number.isInteger(num) || num < 2) {
                result.textContent = "Enter a valid integer ≥ 2";
                return;
            }
            result.textContent = isPrime(num)
                ? `${num} is a Prime Number`
                : `${num} is NOT a Prime Number`;
            break;
        }

        case "armstrong": {
            const num = Number(input);
            if (!Number.isInteger(num) || num < 0) {
                result.textContent = "Enter a valid positive integer";
                return;
            }
            result.textContent = isArmstrong(num)
                ? `${num} is an Armstrong Number`
                : `${num} is NOT an Armstrong Number`;
            break;
        }

        case "palindrome":
            result.textContent = isPalindrome(input)
                ? `"${input}" is a Palindrome`
                : `"${input}" is NOT a Palindrome`;
            break;

        case "evenOdd": {
            const num = Number(input);
            if (!Number.isInteger(num)) {
                result.textContent = "Enter a valid integer";
                return;
            }
            result.textContent = num % 2 === 0 ? `${num} is Even` : `${num} is Odd`;
            break;
        }

        case "reverse":
            result.textContent = `Reversed: ${input.split("").reverse().join("")}`;
            break;
    }
}

function generateValue() {
    const type = document.getElementById("checkerType").value;
    const input = document.getElementById("userInput");
    const result = document.getElementById("result");

    result.textContent = "";

    if (!type) {
        result.textContent = "Please select an option first";
        return;
    }

    switch (type) {
        case "prime":
            input.value = randomPrime();
            result.textContent = "Prime number generated";
            break;

        case "armstrong":
            input.value = randomArmstrong();
            result.textContent = "Armstrong number generated";
            break;

        case "palindrome":
            input.value = randomPalindrome();
            result.textContent = "Palindrome generated";
            break;

        default:
            result.textContent = "Generate works only for Prime, Armstrong, or Palindrome";
            input.value = "";
    }
}


function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function isArmstrong(n) {
    let sum = 0;
    let temp = n;
    const digits = n.toString().length;

    while (temp > 0) {
        const digit = temp % 10;
        sum += digit ** digits;
        temp = Math.floor(temp / 10);
    }
    return sum === n;
}

function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

/* ===== GENERATORS ===== */
function randomPrime() {
    const primes = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
        31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
        73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
        127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
        179, 181, 191, 193, 197, 199, 211, 223, 227, 229
    ];
    return primes[Math.floor(Math.random() * primes.length)];
}

function randomArmstrong() {
    const nums = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        153, 370, 371, 407,
        1634, 8208, 9474
    ];
    return nums[Math.floor(Math.random() * nums.length)];
}

function randomPalindrome() {
    const values = [
  "madam", "level", "racecar", "deed", "noon",
  "civic", "radar", "refer", "rotor", "kayak",
  "reviver", "redder", "wow", "tenet", "solos",
  "stats", "peep", "minim", "mum", "pop",
  "abba", "eke", "gig", "bob", "eve",
  "anna", "otto", "hannah", "tat", "nan",

  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "11", "22", "33", "44", "55", "66", "77", "88", "99", "121"
];
    return values[Math.floor(Math.random() * values.length)];
}
