$(readyNow);

// ready now function
function readyNow() {
    console.log('ARE YOU READY?!?!?')
    $('#inputSubmit').on('click', storeData)
}
// array to hold salaries needed for calc total
let salaryTotal = [];
// function to take input data and append dom
function storeData() {
    console.log('in store data')
    let firstName = $('#FirstName').val()
    let lastName = $('#LastName').val()
    let ID = $('#ID').val()
    let title = $('#title').val()
    let annualSalary = $('#annualSalary').val()
    //append to the dom with above info
    $('#salaryDisplay').append(`
    <td>${firstName}</td>
    `)
    $('#salaryDisplay').append(`
    <td>${lastName}</td>
    `)
    $('#salaryDisplay').append(`
    <td>${ID}</td>
    `)
    $('#salaryDisplay').append(`
    <td>${title}</td>
    `)
    $('#salaryDisplay').append(`
    <td>${annualSalary}</td>
    `)
    // add salary to salaryTotal
    salaryTotal.push(annualSalary)
    console.log(salaryTotal)
}
// function to store salary and calc total cost
// function to use deleteBtn to erase data
