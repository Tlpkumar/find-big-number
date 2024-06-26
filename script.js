function findLargestNumber() {
    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(Number);
    
    if (numbers.some(isNaN)) {
        document.getElementById('result').innerText = 'Please enter valid numbers separated by commas.';
        return;
    }
    
    const largest = Math.max(...numbers);
    document.getElementById('result').innerText = `The largest number is: ${largest}`;
}

