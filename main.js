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
           
    }]
    
}
$('#200').on('click', '.column', (e) => {
    const index = $(e.currentTarget).data('questionindex')
    const question = gameBoard.twoHundred[index]
    $('.modal').toggleClass('is-active')
        $('.modal-card-title').append(`${question.category} for ${question.value}`)
        $('.modal-card-body').append(`${question.question}`)
        $('.A').append(`${question.right}`)
        // $('.A').append(e.curretTarget.right)
        $('.B').append(`${question.wrong[0]}`)
        $('.C').append(`${question.wrong[1]}`)
        $('.D').append(`${question.wrong[2]}`)

})
