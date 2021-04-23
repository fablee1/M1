const quizTopics = [
  {topic: 'Computers', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ktfJLH99Z3K7KV1-wQW_TlQ8LNafyL-lCSI6NlwkWSIeJ_R3H8P3EgsAvcozrELwcKY&usqp=CAU', description: 'This quiz is about computer, they are interesting arent they?', questions: [
    {
      img: 'https://icons-for-free.com/iconfiles/png/512/computer+cpu+device+frequency+microchip+processor+icon-1320161974175701938.png',
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      img: 'https://miro.medium.com/max/8642/1*iIXOmGDzrtTJmdwbn7cGMw.png',
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      img: 'https://www.citypng.com/public/uploads/preview/-41600902915lb9a39o2ub.png',
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      img: 'https://wikimediafoundation.org/wp-content/uploads/2018/05/cropped-wikimedia-logo_black-svg-2.png?w=240',
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      img: 'https://pixelmechanics.com.sg/wp-content/uploads/2019/04/css.jpg',
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Android_logo_2019.svg/1200px-Android_logo_2019.svg.png',
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      img: 'https://help.twitter.com/content/dam/help-twitter/brand/logo.png',
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png',
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      img: 'https://miro.medium.com/max/820/1*x8Fp9uOPgEaQdig7hV70qw.png',
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    }
  ]},
  {topic: 'Geography', img: 'https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/earth_ver_1.png', description: 'This quiz is about geography, lets find that country!', questions: [
    {
      img: 'https://www.myneobuxportal.com/wp-content/uploads/2019/02/country-shape-quiz/5.png',
      type: "multiple",
      difficulty: "easy",
      question: "Which country is on the image?",
      correct_answer: "United Kingdom",
      incorrect_answers: [
        "Japan",
        "Venezuela",
        "Chile",
      ],
    },
  ]},
  {topic: 'Animals', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6XhIGtLCT3ELs0IqAEbu47brbPSRX9MBh6b4ETgSNn6_pdx86DlotoSQg4rYn6VJYxM&usqp=CAU', description: 'This quiz is about animals, what are they?', questions: [
    {
      img: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-09/14/16/enhanced/buzzfeed-prod-web-05/enhanced-29092-1536956328-1.jpg?output-format=webp&output-quality=auto',
      type: "multiple",
      difficulty: "easy",
      question: "What is this animal?",
      correct_answer: "Hedgehog",
      incorrect_answers: [
        "Shark",
        "Panther",
        "Elephant",
      ],
    },
  ]},
  {topic: 'Nature', img: 'https://i.pinimg.com/originals/95/58/bc/9558bccc477433c4d33f73a184752d47.png', description: 'This quiz is about nature, find out what you know!', questions: [
    {
      img: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_640,f_auto/DCTM_Penguin_UK_DK_AL526021_adrg5o.jpg',
      type: "multiple",
      difficulty: "easy",
      question: "Which tree is this?",
      correct_answer: "Oak tree",
      incorrect_answers: [
        "Fir tree",
        "Walnut tree",
        "Ash tree",
      ],
    },
  ]}
]

let totalQuestionsInQuiz = 0
let questionNumber = 0
let currentQuiz
let correctAnswers = 0

const removeTopics = function() {
  document.getElementById('menu').innerHTML = ''
}

const statsPage = function() {
  let menu = document.getElementById('menu')
  menu.innerHTML = ''

  let thanksText = document.createElement('h4')
  thanksText.innerText = 'Thank you for completing this Quiz!'
  thanksText.classList.add('thanksText')

  let thanksTopic = document.createElement('h4')
  thanksTopic.classList.add('thanksTopic')
  thanksTopic.innerText = `Topic of the quiz was: ${currentQuiz.topic}.`

  let counter = document.createElement('h4')
  counter.classList.add('thanksCounter')
  counter.innerText = `You made ${correctAnswers} correct answers out of ${totalQuestionsInQuiz} questions.`

  let backToTopics = document.createElement('button')
  backToTopics.classList.add('backToMenu')
  backToTopics.innerText = 'Back to menu'
  backToTopics.onclick = generateTopics

  let statsBlock = document.createElement('div')
  statsBlock.classList.add('statsBlock')

  statsBlock.appendChild(thanksText)
  statsBlock.appendChild(thanksTopic)
  statsBlock.appendChild(counter)
  statsBlock.appendChild(backToTopics)

  menu.appendChild(statsBlock)

  questionNumber = 0
  correctAnswers = 0
}

const checkAnswer = function(e) {
  let buttons = document.querySelectorAll('.chooseAnswer > button')
  for(button of buttons) {
    button.disabled = true
    button.style.color = 'white'
    button.style.backgroundColor = 'red'
  }

  let currentQuestion = currentQuiz.questions[questionNumber]
  let userAnswer = e.currentTarget.innerText
  if(currentQuestion.correct_answer == userAnswer) {
    correctAnswers++
    e.currentTarget.style.backgroundColor = 'green'
  } else {
    for(button of buttons) {
      if(button.innerText == currentQuestion.correct_answer) {
        button.style.backgroundColor = 'green'
      }
    }
  }
  document.querySelector('.quizContainerMain > button').style.opacity = '1'
  document.querySelector('.quizContainerMain > button').disabled = false
  questionNumber++
}

const startQuiz = function(name) {
  removeTopics()

  let quiz
  let menu = document.getElementById('menu')
  
  for(topic of quizTopics) {
    if(topic.topic === name) {
      quiz = topic
      break
    }
  }

  totalQuestionsInQuiz = quiz.questions.length
  questionNumber = 0
  currentQuiz = quiz

  let line = document.createElement('hr')
  menu.appendChild(line)

  let quizContainer = document.createElement('div')
  quizContainer.classList.add('quizContainer')
  menu.appendChild(quizContainer)

  let quizContainerTopBar = document.createElement('div')
  quizContainerTopBar.classList.add('quizContainerTopBar')
  let quizContainerTopic = document.createElement('h3')
  quizContainerTopic.classList.add('topic')
  quizContainerTopic.innerText = `Quiz topic: ${currentQuiz.topic}`
  let quizContainerDiff = document.createElement('h3')
  quizContainerDiff.classList.add('diff')
  let quizContainerCounter = document.createElement('h3')
  quizContainerCounter.classList.add('counter')
  quizContainerTopBar.appendChild(quizContainerTopic)
  quizContainerTopBar.appendChild(quizContainerDiff)
  quizContainerTopBar.appendChild(quizContainerCounter)
  quizContainer.appendChild(quizContainerTopBar)

  let quizContainerMain = document.createElement('div')
  quizContainerMain.classList.add('quizContainerMain')
  let quizContainerMainImg = document.createElement('img')
  let quizContainerMainQuestion = document.createElement('h4')
  let quizContainerMainChoose = document.createElement('div')
  quizContainerMainChoose.classList.add('chooseAnswer')
  let quizContainerMainAnswer = document.createElement('button')
  quizContainerMainAnswer.innerText = 'Next question'
  quizContainerMainAnswer.disabled = true
  quizContainerMainAnswer.onclick = nextQuestion
  quizContainerMain.appendChild(quizContainerMainImg)
  quizContainerMain.appendChild(quizContainerMainQuestion)
  quizContainerMain.appendChild(quizContainerMainChoose)
  quizContainerMain.appendChild(quizContainerMainAnswer)

  quizContainer.appendChild(quizContainerMain)

  nextQuestion()
}

const nextQuestion = function() {
  if(questionNumber === totalQuestionsInQuiz) {
    statsPage()
    return
  }

  let quiz
  for(topic of quizTopics) {
    if(topic.topic === currentQuiz.topic) {
      quiz = topic
      break
    }
  }

  let question = quiz.questions[questionNumber]

  let quizCounter = document.querySelectorAll('h3')[2]
  quizCounter.innerText = `${questionNumber+1}/${totalQuestionsInQuiz}`

  let quizImg = document.querySelector('.quizContainerMain > img')
  quizImg.src = question.img
  let quizQuestion = document.querySelector('h4')
  quizQuestion.innerText = question.question
  let quizDiff = document.querySelector('.diff')
  quizDiff.innerText = `Difficulty: ${question.difficulty}`

  let quizAnswers = document.querySelector('.chooseAnswer')
  quizAnswers.innerHTML = ''
  if(question.type === 'boolean') {
    let answerTrue = document.createElement('button')
    answerTrue.classList.add('boolButton')
    answerTrue.innerText = 'True'
    answerTrue.onclick = function(e) {
      checkAnswer(e)
    }

    let answerFalse = document.createElement('button')
    answerFalse.classList.add('boolButton')
    answerFalse.innerText = 'False'
    answerFalse.onclick = function(e) {
      checkAnswer(e)
    }

    quizAnswers.appendChild(answerTrue)
    quizAnswers.appendChild(answerFalse)
  } else {
    questions = [question.correct_answer].concat(question.incorrect_answers)
    for(let a=0; a<questions.length; a++) {
      let answerButton = document.createElement('button')
      answerButton.classList.add('multipleButton')
      answerButton.innerText = questions[a]
      answerButton.onclick = function(e) {
        checkAnswer(e)
      }
      quizAnswers.appendChild(answerButton)
    }
  }
  document.querySelector('.quizContainerMain > button').style.opacity = '0'
  document.querySelector('.quizContainerMain > button').disabled = true
  if(questionNumber == totalQuestionsInQuiz-1) {
    document.querySelector('.quizContainerMain > button').innerText = 'Finish quiz'
  }
}

const generateTopics = function() {
  let menu = document.getElementById('menu')
  menu.innerHTML = ''

  let h2Menu = document.createElement('h2')
  h2Menu.innerText = 'CHOOSE THE TOPIC OF YOUR QUIZ'
  let hrMenu = document.createElement('hr')
  let divMenu = document.createElement('div')
  divMenu.id = 'topicContainer'

  menu.appendChild(h2Menu)
  menu.appendChild(hrMenu)
  menu.appendChild(divMenu)


  for(topic of quizTopics) {
    let name = topic.topic
    let description = topic.description
    let img = topic.img 
    
    let topicCard = document.createElement('div')
    topicCard.classList.add('topicCard')

    let topicCardOverlay = document.createElement('div')
    topicCardOverlay.classList.add('topicCardOverlay')

    let topicCardImg = document.createElement('img')
    topicCardImg.classList.add('topicCardImg')
    topicCardImg.src = img

    let topicCardName = document.createElement('h3')
    topicCardName.classList.add('topicCardName')
    topicCardName.innerText = name

    let topicCardDesc = document.createElement('p')
    topicCardDesc.classList.add('topicCardDesc')
    topicCardDesc.innerText = description

    let topicCardLine = document.createElement('hr')
    topicCardLine.classList.add('topicCardLine')

    topicCard.appendChild(topicCardImg)
    topicCard.appendChild(topicCardName)
    topicCard.appendChild(topicCardLine)
    topicCard.appendChild(topicCardDesc)

    topicCard.onclick = function() {startQuiz(name)}

    document.getElementById('topicContainer').appendChild(topicCard)
  }
}

window.onload = function () {
  generateTopics()
};