function generateRandomId() {
    // Random number between 0 and 999 for the first segment
    const segment1 = Math.floor(Math.random() * 1000);

    // Random number between 0 and 9999 for the second segment
    const segment2 = Math.floor(Math.random() * 10000);

    // Random number between 0 and 9999 for the third segment
    const segment3 = Math.floor(Math.random() * 10000);

    // Random letter between A and Z
    const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));

    // Format the segments
    const id = ('000' + segment1).slice(-3) + '-' + ('0000' + segment2).slice(-4) + '-' + ('0000' + segment3).slice(-4) + letter;

    return id;
}

// Example usage
console.log(generateRandomId());



function generateRandomId2() {
    function randomLetter() {
        return String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }

    function randomNumber(max) {
        return Math.floor(Math.random() * max);
    }

    // Random number between 0 and 999 for the first segment
    let segment1 = randomNumber(1000);

    // Random number between 0 and 9999 for the second segment
    let segment2 = randomNumber(10000);

    // Random number between 0 and 9999 for the third segment
    let segment3 = randomNumber(10000);

    // Randomize the position of the letter
    const position = randomNumber(3); // 0, 1, or 2

    // Random letter between A and Z
    const letter = randomLetter();

    // Insert the letter into one of the segments
    if (position === 0) {
        segment1 = ('000' + segment1).slice(-3) + letter;
    } else if (position === 1) {
        segment2 = ('0000' + segment2).slice(-4) + letter;
    } else {
        segment3 = ('0000' + segment3).slice(-4) + letter;
    }

    // Format the segments
    const id = ('000' + segment1).slice(-3) + '-' + ('0000' + segment2).slice(-4) + '-' + ('0000' + segment3).slice(-4);

    return id;
}

// Example usage
console.log(generateRandomId2());




function generateRandomId3() {
    function randomLetter() {
        return String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }

    function randomNumber(max) {
        return Math.floor(Math.random() * max);
    }

    // Random number between 0 and 999 for the first segment
    let segment1 = randomNumber(1000);

    // Random number between 0 and 9999 for the second segment
    let segment2 = randomNumber(10000);

    // Random number between 0 and 9999 for the third segment
    let segment3 = randomNumber(10000);

    // Randomize the position and inclusion of the letter
    const includeLetter = Math.random() < 0.5; // 50% chance of including a letter
    const position = randomNumber(3); // 0, 1, or 2

    // Random letter between A and Z
    const letter = randomLetter();

    // Insert the letter into one of the segments if required
    if (includeLetter) {
        if (position === 0) {
            segment1 = ('000' + segment1).slice(-3) + letter;
        } else if (position === 1) {
            segment2 = ('0000' + segment2).slice(-4) + letter;
        } else {
            segment3 = ('0000' + segment3).slice(-4) + letter;
        }
    }

    // Format the segments
    const id = ('000' + segment1).slice(-3) + '-' + ('0000' + segment2).slice(-4) + '-' + ('0000' + segment3).slice(-4);

    return id;
}

// Example usage
console.log(generateRandomId3());
