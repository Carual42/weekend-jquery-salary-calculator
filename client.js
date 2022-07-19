$(readyNow);

// ready now function
function readyNow() {
    console.log('ARE YOU READY?!?!?')
    $('#inputSubmit').on('click', storeData)
    $('body').on('click', '#deleteBtn', deleteEmployee)
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
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${ID}</td>
    <td>${title}</td>
    <td>${annualSalary}</td>
    <td>
        <button id="deleteBtn">Delete</button>
    </td>
    </tr>
    `)
    $('#FirstName').val('')
    $('#LastName').val('')
    $('#ID').val('')
    $('#title').val('')
    $('#annualSalary').val('')
    // add salary to salaryTotal
    salaryTotal.push(annualSalary);
    console.log(salaryTotal);
    salaryCalc(salaryTotal);

    // firstName.empty();
    // lastName.empty();
    // ID.empty();
    // title.empty();
    // annualSalary.empty();
}

// function to calc and total cost 
function salaryCalc(array) {
    let sum = 0;
    for (let i = 0; i<array.length; i++){
        sum += Number(array[i])
    }
    console.log(sum)
    let monthlySum = $('#monthCost')
    monthlySum.empty();
    monthlySum.append (`
    <h3>
    Total Monthly: ${sum}
    </h3>
    `)
}
// function to use deleteBtn to erase data
function deleteEmployee() {
    $(this).parent().parent().remove();
}
