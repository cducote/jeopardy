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
//Global points
let points = 0
let currentQuestionValue
let skillLevel = "Innocent"
//Modal instance
$('.button').on('click', (e) => {
    //POINT SYSTEM
    if ($(e.currentTarget).hasClass('right')) {
        points += currentQuestionValue
        alert("CORRECT")
        $('html').append('<iframe width="0" height="0" src="https://www.youtube.com/embed/kKfU71APYUA?autoplay=1"></iframe>')
        newPoints(points)
        newSkill(skillLevel)
    } else {
        alert("WRONG")
        points -= currentQuestionValue
        $('html').append('<iframe width="0" height="0" src="https://www.youtube.com/embed/EmSmMUIC1no?autoplay=1"></iframe>')
        newPoints(points)
        newSkill(skillLevel)
        
    }
    $('.modal').toggleClass('is-active')
    $('.modal-card-title').empty()
    $('.modal-card-body').empty()
    $('.A').empty()
    $('.B').empty()
    $('.C').empty()
    $('.D').empty()
 
    //Skill level updater still within Modal instance scope
    if (points >= 2000) {
        $('.skill').text("Skill Level: " + "Exposed!")
    }
    if (points >= 3000 && points <= 3600) {
        $('.skill').text("Skill Level: " + "Apprentice!")
        $('html').append('<iframe width="0" height="0" src="https://www.youtube.com/embed/_Z3ra0CxCE0?autoplay=1"></iframe>')
    }
    if (points >= 4000) {
        $('.skill').text("Skill Level: " + "Practitioner!")
    }
    if (points >= 5000) {
        $('.skill').text("Skill Level: " + "Journeyman!")
    }
    if (points >= 6000 && points <= 7600) {
        $('.skill').text("Skill Level: " + "Master of WDI Unit 1")
        $('html').append('<iframe width="0" height="0" src="https://www.youtube.com/embed/vFrNxJoB768?autoplay=1"></iframe>')
    }
    if (points >= 8000) {
        $('.skill').text("Skill Level: " + "Researcher Level!!!")
    }
    if (points >= 9000) {
        $('.skill').text("Skill Level: " + "You're a Web Dev GOD!!!")
        $('html').append('<iframe width="0" height="0" src="https://www.youtube.com/embed/kAA0txXGigs?autoplay=1"></iframe>')
    }
    
    
})



//200 point modal
$('#200').on('click', '.column', (e) => {
    const index = $(e.currentTarget).data('questionindex')
    const question = gameBoard.twoHundred[index]
    currentQuestionValue = 200
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
    currentQuestionValue = 400
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
    currentQuestionValue = 600
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
    currentQuestionValue = 800
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
    currentQuestionValue = 1000
    $(e.currentTarget).addClass('disabled');
    $('.modal').toggleClass('is-active')
    $('.modal-card-title').append(`${question.category} for ${question.value}`)
    $('.modal-card-body').append(`${question.question}`)
    $('.A').append(`${question.right}`).addClass('right')
    $('.B').append(`${question.wrong[0]}`)
    $('.C').append(`${question.wrong[1]}`)
    $('.D').append(`${question.wrong[2]}`)
})
function newPoints(points) {
    $('.scoreboard').text("Points: " + points)
}
function newSkill(skillLevel) {
    $('.skill').text("Skill Level: " + skillLevel)
}
$('.reset').click(function() {
    location.reload();
});

    