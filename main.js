$('#html200').on('click', () => {
    $('#modalh1').addClass('is-active')
})
$('.correct').on('click', () => {
    alert("Correct!")
})
$('.wrong').on('click', () => {
    alert("Incorrect!")
})
var points = 0
$('.correct').on('click', () => {
    points =+ 200
    $('#modalh1').removeClass('is-active')
})


console.log("im in here!")