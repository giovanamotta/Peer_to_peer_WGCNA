function calculateScore() {
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    let score = 0;

    for (let value of formData.values()) {
        score += parseInt(value);
    }

    const result = document.getElementById('result');
    result.innerHTML = `Você consome aproximadamente ${score} Barbies de plástico por ano!`;
}
