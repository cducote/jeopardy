const gameBoard = {
    twoHundred: [{
        question: 'This tag dictates the use of paragraghs on a page',
        right: '< p >',
        wrong: ["< h1 >", "< h4 >", "< body >"],
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
        question: 'Complete this line... < meta charset="...',
        right: 'utf-8" >',
        wrong: ["english > ", "spanish >", "ufc-9 >"],
        value: 600,
        category: "HTML"
    }, {
        question: 'To style a given class, add this character before your property',
        right: '.',
        wrong: [",", "#", "~"],
        value: 600,
        category: "CSS"
    }, {
        question: 'This Terminal command creates a file inside of a directory',
        right: 'touch',
        wrong: ["pinch", "grab", "caress"],
        value: 600,
        category: "Terminal"
    }, {
        question: 'this jQuery symbol goes before any command to interact with jQuery',
        right: '$',
        wrong: ["~", ".", "{}"],
        value: 600,
        category: "JS"
    }],
    eightHundred: [{
        question: 'This tag is the most global possible tag on a page',
        right: '< html >',
        wrong: ["< main >", "< global >", "< beef >"],
        value: 800,
        category: "HTML"
    }, {
        question: 'The C ins CSS for...',
        right: 'Cascading',
        wrong: ["Colorful", "Creative", "Computer"],
        value: 800,
        category: "CSS"
    }, {
        question: 'This following command lists all files including hidden ones in a directory',
        right: '-a',
        wrong: ["-r", "-all", "-B"],
        value: 800,
        category: "Terminal"
    }, {
        question: 'What is the name of this character: %',
        right: 'Modulus',
        wrong: ["Stimulus", "Bopis", "Dangus"],
        value: 800,
        category: "JS"
    }],
    oneThousand: [{
        question: 'This tag creates a space break on an HTML page',
        right: '< br >',
        wrong: ["< hr >", "< sb >", "< beef >"],
        value: 1000,
        category: "HTML"
    }, {
        question: 'This property creates rounded edges on an Element',
        right: 'border-radius:',
        wrong: ["round-margins:", "circle-sides:", "round-off:"],
        value: 1000,
        category: "CSS"
    }, {
        question: 'This Terminal command deletes a directory',
        right: 'rm',
        wrong: ["mv", "cp", "del"],
        value: 1000,
        category: "Terminal"
    }, {
        question: 'This is the proper way to say AND in a statement',
        right: '&&',
        wrong: ["||", "|&", "and"],
        value: 1000,
        category: "JS"
    }]
    
}
var points = 0

$('.button').on('click', (e) => {
    //POINT SYSTEM
    
    
    if ($(e.currentTarget).hasClass('right')) {
        points += ($(e.currentTarget.value))
        alert("CORRECT")
    } else {
        alert("WRONG")
    }
    $('.modal').toggleClass('is-active')
    $('.modal-card-title').empty()
    $('.modal-card-body').empty()
    $('.A').empty()
    $('.B').empty()
    $('.C').empty()
    $('.D').empty()
})



//200 point modal
$('#200').on('click', '.column', (e) => {
    const index = $(e.currentTarget).data('questionindex')
    const question = gameBoard.twoHundred[index]
    $(e.currentTarget).addClass('disabled');
    //fill modal with appropriate question and answers
    $('.modal').toggleClass('is-active')
    $('.modal-card-title').append(`${question.category} for ${question.value}`)
    $('.modal-card-body').append(`${question.question}`)
    $('.A').append(`${question.right}`).addClass('right')
    $('.B').append(`${question.wrong[0]}`)
    $('.C').append(`${question.wrong[1]}`)
    $('.D').append(`${question.wrong[2]}`)

    //empty modal after question answered

})
//400 point modal
$('#400').on('click', '.column', (e) => {
    const index = $(e.currentTarget).data('questionindex')
    const question = gameBoard.fourHundred[index]
    $(e.currentTarget).addClass('disabled');
    $('.modal').toggleClass('is-active')
    $('.modal-card-title').append(`${question.category} for ${question.value}`)
    $('.modal-card-body').append(`${question.question}`)
    $('.A').append(`${question.right}`).addClass('right')
    $('.B').append(`${question.wrong[0]}`)
    $('.C').append(`${question.wrong[1]}`)
    $('.D').append(`${question.wrong[2]}`)
})
//600 point modal
$('#600').on('click', '.column', (e) => {
    const index = $(e.currentTarget).data('questionindex')
    const question = gameBoard.sixHundred[index]
    $(e.currentTarget).addClass('disabled');
    $('.modal').toggleClass('is-active')
    $('.modal-card-title').append(`${question.category} for ${question.value}`)
    $('.modal-card-body').append(`${question.question}`)
    $('.A').append(`${question.right}`).addClass('right')
    $('.B').append(`${question.wrong[0]}`)
    $('.C').append(`${question.wrong[1]}`)
    $('.D').append(`${question.wrong[2]}`)
})
//800 point modal
$('#800').on('click', '.column', (e) => {
    const index = $(e.currentTarget).data('questionindex')
    const question = gameBoard.eightHundred[index]
    $(e.currentTarget).addClass('disabled');
    $('.modal').toggleClass('is-active')
    $('.modal-card-title').append(`${question.category} for ${question.value}`)
    $('.modal-card-body').append(`${question.question}`)
    $('.A').append(`${question.right}`).addClass('right')
    $('.B').append(`${question.wrong[0]}`)
    $('.C').append(`${question.wrong[1]}`)
    $('.D').append(`${question.wrong[2]}`)
})
//1000 point modal
$('#1000').on('click', '.column', (e) => {
    const index = $(e.currentTarget).data('questionindex')
    const question = gameBoard.oneThousand[index]
    $(e.currentTarget).addClass('disabled');
    $('.modal').toggleClass('is-active')
    $('.modal-card-title').append(`${question.category} for ${question.value}`)
    $('.modal-card-body').append(`${question.question}`)
    $('.A').append(`${question.right}`).addClass('right')
    $('.B').append(`${question.wrong[0]}`)
    $('.C').append(`${question.wrong[1]}`)
    $('.D').append(`${question.wrong[2]}`)
})