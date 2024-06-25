function nextSection(sectionNumber) {
    // Obter a seção atual visível
    const currentSection = document.querySelector('.quiz-section:not([style*="display: none"])');
    if (currentSection) {
        // Ocultar a seção atual
        currentSection.style.display = 'none';
    }

    // Mostrar a próxima seção
    const nextSection = document.getElementById(`section-${sectionNumber}`);
    if (nextSection) {
        nextSection.style.display = 'block';
    }
}

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
