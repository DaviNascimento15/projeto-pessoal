const questions = [
    {
        question: "Qual é a capital do Ceara?",
        options: ["A) Fortaleza", "B) General Sampaio", "C) Dep.Roberto mesquita", "D) Madri"],
        answer: "A"
    },
    {
        question: "Quem é o atual Diretor da escola Dep. Roberto Msquita'?",
        options: ["A) Germano", "B) Everson", "C) Julio Ferreira", "D) Jane Austen"],
        answer: "C"
    },
    {
        question: "Qual o melhor curso atualmente? na escola Dep. Roberto Mesquita",
        options: ["A) Administação", "B) Desenvolvimento de Sistemas", "C) Redes de computadores", "D) Financias"],
        answer: "B"
    },
    {
        question: "Qual o nome da professor de Portugues?",
        options: ["A) Janael", "B) Ana Maria", "C) Edvaldo", "D) Samuel"],
        answer: "A"
    },
    {
        question: "Quantos professores temos na base tecnica?",
        options: ["A) 1", "B) 2", "C) 3", "D) 4"],
        answer: "B"
    }
]

let score = 0
let i = 0

// While ultilizado para repetir o quiz
do {
    if (i >= questions.length) {
        alert('Você já respondeu todas as perguntas.')
        break
    }

    const currentQuestion = questions[i]
    
    // Aparecer as perguntas e opções
    let userAnswer = prompt(currentQuestion.question + "\n" + currentQuestion.options.join("\n"))

    // Swith ultilizado para verificar a resposta
    switch (userAnswer) {
        case currentQuestion.answer:
            alert('Resposta correta!')
            score++
            break
        case "A":
        case "B":
        case "C":
        case "D":
            alert(`Resposta incorreta. A resposta correta é ${currentQuestion.answer}.`)
            break
        default:
            alert("Resposta inválida. Tente novamente.")
            continue // Volta para a pergunta atual se a resposta for errada
    }

    i = i + 1 
} while (true)

// Exibir o resultado final
alert(`Você terminou o quiz! Sua pontuação: ${score}/${questions.length}`)