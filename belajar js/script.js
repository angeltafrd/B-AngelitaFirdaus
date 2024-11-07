
//materi tgl 6//
function divideNumbers(a, b) {
    try {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Input harus berupa angka.");
        }
        if (b === 0) {
            throw new Error("Tidak bisa membagi dengan nol.");
        }
        return a / b;
    } catch (error) {
        console.error("Terjadi kesalahan: " + error.message);
        return error.message;
    }
}

document.getElementById('divisionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = divideNumbers(num1, num2);
    
    const resultElement = document.getElementById('result');
    
    if (result === "Input harus berupa angka." || result === "Tidak bisa membagi dengan nol.") {
        resultElement.innerHTML = `<span class="error">${result}</span>`;
    } else {
        resultElement.innerHTML = `Hasil: ${result}`;
    }
});
