const userInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const normalizeInputString = (str) => {
    let cleanedStr = str.replace(/[^\w\s]|_/g, '');
    cleanedStr = cleanedStr.replace(/\s+/g, '');
    let normalizedStr = cleanedStr.toLowerCase();
    return normalizedStr;
}

const str = "_eye";
console.log(normalizeInputString(str));

const checkPalindrome = (input) => {

    if (input === '') {
        alert("Please input a value");
        return
    }

    result.replaceChildren();

    const normalizedStr = normalizeInputString(input);
    let resultMsg = `
        <strong>${input}</strong> is ${normalizedStr === [...normalizedStr].reverse().join('') ? '' : 'not'} a palindrome.
    `;

    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = resultMsg;
    result.appendChild(pTag);

    result.classList.remove('hidden');
}

checkBtn.addEventListener('click', () => {
    checkPalindrome(userInput.value);
    userInput.value = '';
})

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkPalindrome(userInput.value);
        userInput.value = '';
    }
})
