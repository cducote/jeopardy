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
        question: '',
        right: 'tying out anwewr s sucks',
        wrong: ["wrong 1", "wrong 2", "wrong 3"],
        value: 200,
        category: "Terminal"
    }, {
        question: 'which one #4?',
        right: 'tying out anwewr s sucks',
        wrong: ["wrong 1", "wrong 2", "wrong 3"],
        value: 200,
        category: "JS"
           
    }]
    
}
// $('#two').children().on('click', () => {
//     if ( $('.column').hasClass('.html')) {
//         $('.modal').toggleClass('is-active')
//         $('.modal-card-title').append(`${gameBoard.twoHundred[0].category} for ${gameBoard.twoHundred[0].value}`)
//         $('.modal-card-body').append(`${gameBoard.twoHundred[0].question}`)
//         $('.A').append(`${gameBoard.twoHundred[0].right}`)
//         // $('.A').append(e.curretTarget.right)
//         $('.B').append(`${gameBoard.twoHundred[0].wrong[0]}`)
//         $('.C').append(`${gameBoard.twoHundred[0].wrong[1]}`)
//         $('.D').append(`${gameBoard.twoHundred[0].wrong[2]}`)
//         gameBoard.twoHundred[0]
//     }
// })


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
console.log ($('#200').children().eq(0))
console.log (gameBoard.twoHundred[0].question)
console.log (gameBoard.twoHundred[0].category)
// console.log (`${gameBoard.twoHundred[0].right}, ${gameBoard.twoHundred[0].wrong}`)
// $(`${gameBoard.twoHundred[0].right}${gameBoard.twoHundred[0].wrong}`).pushStack(gameBoard.twoHundred[0].multipleChoice)
// console.log(gameBoard.twoHundred[0].multipleChoice)











// $('body').append(`<div class='column'>${gameBoard.html[1].value}</div>`)

// $('#html200').on('click', () => {
//     $('#modalh1').addClass('is-active')
// })
// $('.correct').on('click', () => {
//     alert("Correct!")
// })
// $('.wrong').on('click', () => {
//     alert("Incorrect!")
// })
// var points = 0
// $('.correct').on('click', () => {
//     points =+ 200
//     $('#modalh1').removeClass('is-active')
//     $('h1').append("Points: " + points)
// })



// console.log("im in here!")