const gameBoard = {
    twoHundred: [{
        question: 'This tag dictates the use of paragraghs on a page',
        right: '< p >',
        wrong: ["< h1 >", "< h4 >",  "< body >"],
        value: 200,
        category: "HTML",
    }, {
        question: 'This propery changes the color of TEXT in any given element',
        right: 'color:',
        wrong: ["margin:", "background-color:", "font-style:"],
        value: 200,
        category: "CSS"
    }, {
        question: 'This character is equal to telling your terminal "home directory"',
        right: '~',
        wrong: ["cd", "pwd", "ls"],
        value: 200,
        category: "Terminal"
    }, {
        question: 'This is the shorthand method for declaring a variable',
        right: 'var',
        wrong: ["if", "const", "for"],
        value: 200,
        category: "JS"
           
    }],
    fourHundred: [{
        question: 'This tag is wrapped around your links to stylesheets',
        right: '< head >',
        wrong: ["< body >", "< header >", "< div >"],
        value: 400,
        category: "HTML"
    }, {
        question: 'This property exists between the Border and its Element',
        right: 'padding:',
        wrong: ["margin:", "border:", "bald-spot:"],
        value: 400,
        category: "CSS"
    }, {
        question: 'This bash command moves the user from directory to directory',
        right: 'cd',
        wrong: ["pwd", "ls", "mkdir"],
        value: 400,
        category: "Terminal"
    }, {
        question: 'Three letter word that starts off an iteration loop',
        right: 'for',
        wrong: ["let", "loo", "var"],
        value: 400,
        category: "JS"
    }],
    sixHundred: [{
        question: '',
        right: '',
        wrong: ["", "", ""],
        value: 600,
        category: ""
    }, {
        question: '',
        right: '',
        wrong: ["", "", ""],
        value: 600,
        category: ""
    }, {
        question: '',
        right: '',
        wrong: ["", "", ""],
        value: 600,
        category: ""
    }, {
        question: '',
        right: '',
        wrong: ["", "", ""],
        value: 600,
        category: ""
    }]
    
}
$('#200').on('click', '.column', (e) => {
    const index = $(e.currentTarget).data('questionindex')
    const question = gameBoard.twoHundred[index]
    $('.modal').toggleClass('is-active')
        $('.modal-card-title').append(`${question.category} for ${question.value}`)
        $('.modal-card-body').append(`${question.question}`)
        $('.A').append(`${question.right}`)
        $('.B').append(`${question.wrong[0]}`)
        $('.C').append(`${question.wrong[1]}`)
        $('.D').append(`${question.wrong[2]}`)
})
$('#400').on('click', '.column', (e) => {
    const index = $(e.currentTarget).data('questionindex')
    const question = gameBoard.fourHundred[index]
    $('.modal').toggleClass('is-active')
        $('.modal-card-title').append(`${question.category} for ${question.value}`)
        $('.modal-card-body').append(`${question.question}`)
        $('.A').append(`${question.right}`)
        $('.B').append(`${question.wrong[0]}`)
        $('.C').append(`${question.wrong[1]}`)
        $('.D').append(`${question.wrong[2]}`)
})
$('#400').on('click', '.column', (e) => {
    const index = $(e.currentTarget).data('questionindex')
    const question = gameBoard.fourHundred[index]
    $('.modal').toggleClass('is-active')
        $('.modal-card-title').append(`${question.category} for ${question.value}`)
        $('.modal-card-body').append(`${question.question}`)
        $('.A').append(`${question.right}`)
        $('.B').append(`${question.wrong[0]}`)
        $('.C').append(`${question.wrong[1]}`)
        $('.D').append(`${question.wrong[2]}`)


        // copy and paste keys
        // question: '',
        // right: '',
        // wrong: ["", "", ""],
        // value: ,
        // category: ""