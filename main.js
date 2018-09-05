const gameBoard = {
    twoHundred: [{
        question: 'which one?',
        right: 'That one',
        wrong: ["wrong 1", "wrong 2", "wrong 3"],
        value: 200,
        category: "HTML",
        multipleChoice: []
    }, {
        question: 'which one #2?',
        right: 'THAT ONE',
        wrong: ["wrong 1", "wrong 2", "wrong 3"],
        value: 200,
        category: "CSS"
    }, {
        question: 'which one #3?',
        right: 'THAT ONE',
        wrong: ["wrong 1", "wrong 2", "wrong 3"],
        value: 200,
        category: "Terminal"
    }]
    
}
$('#two').children().on('click', () => {
    if ( $('.column').hasClass('html')) {
        $('.modal').toggleClass('is-active')
        $('.modal-card-title').append(`${gameBoard.twoHundred[0].category} for ${gameBoard.twoHundred[0].value}`)
        $('.modal-card-body').append(`${gameBoard.twoHundred[0].question}`)
        
    }
})
    
   














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



console.log("im in here!")