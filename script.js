const quizData = [
    {
        type: "question",
        content: "Quantas garrafas plásticas você usa por semana?",
        options: {
            a: "1-5",
            b: "6-10",
            c: "11-15",
            d: "Mais de 15"
        },
        values: {
            a: 1,
            b: 2,
            c: 3,
            d: 4
        }
    },
    {
        type: "curiosity",
        content: "Você sabia? Cada garrafa plástica demora até 450 anos para se decompor."
    },
    {
        type: "question",
        content: "Com que frequência você reutiliza suas sacolas plásticas?",
        options: {
            a: "Sempre",
            b: "Frequentemente",
            c: "Raramente",
            d: "Nunca"
        },
        values: {
            a: 1,
            b: 2,
            c: 3,
            d: 4
        }
    },
    {
        type: "curiosity",
        content: "Curiosidade: Cerca de 8 milhões de toneladas de plástico são despejadas nos oceanos todos os anos."
    },
    {
        type: "question",
        content: "Quantos produtos de plástico você compra por mês?",
        options: {
            a: "1-5",
            b: "6-10",
            c: "11-20",
            d: "Mais de 20"
        },
        values: {
            a: 1,
            b: 2,
            c: 3,
            d: 4
        }
    }
];

const quiz = document.getElementById('quiz');
const nextBtn = document.getElementById('next');
const results = document.getElementById('results');

let currentStep = 0;
let totalScore = 0;

function loadQuiz() {
    const currentData = quizData[currentStep];
    if (currentData.type === "question") {
        quiz.innerHTML = `
            <div class="quiz-question">${currentData.content}</div>
            <label>
                <input type="radio" name="answer" value="a">
                ${currentData.options.a}
            </label>
            <label>
                <input type="radio" name="answer" value="b">
                ${currentData.options.b}
            </label>
            <label>
                <input type="radio" name="answer" value="c">
                ${currentData.options.c}
            </label>
            <label>
                <input type="radio" name="answer" value="d">
                ${currentData.options.d}
            </label>
        `;
    } else if (currentData.type === "curiosity") {
        quiz.innerHTML = `
            <div class="quiz-curiosity">${currentData.content}</div>
        `;
    }
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let answer;
    answers.forEach(ans => {
        if (ans.checked) {
            answer = ans.value;
        }
    });
    return answer;
}

nextBtn.addEventListener('click', () => {
    if (quizData[currentStep].type === "question") {
        const answer = getSelected();
        if (answer) {
            totalScore += quizData[currentStep].values[answer];
            currentStep++;
            if (currentStep < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = '';
                results.innerHTML = `
                    Você completou o quizz!
                    <br>
                    Baseado em suas respostas, você consome aproximadamente ${totalScore * 10} Barbies de plástico por ano!
                `;
            }
        } else {
            alert('Por favor, selecione uma resposta!');
        }
    } else {
        currentStep++;
        if (currentStep < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = '';
            results.innerHTML = `
                Você completou o quizz!
                <br>
                Baseado em suas respostas, você consome aproximadamente ${totalScore * 10} Barbies de plástico por ano!
            `;
        }
    }
});

// Carregar a primeira pergunta ou curiosidade
loadQuiz();
