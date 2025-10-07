function showCurrentDate() {
    let birthDate = new Date(document.getElementById("birthDate").value)
    let UserDate = birthDate.getDate()
    let UserMonth = birthDate.getMonth()
    let UserYear = birthDate.getFullYear()
    let today = new Date()
    let date = today.getDate()
    let Month = today.getMonth()
    let Year = today.getFullYear()
    let display = document.querySelector(".display")
    let displayDate = document.getElementById("day")
    let displaymonth = document.getElementById("month")
    let displayyear = document.getElementById("year")

    console.log(birthDate)
    
    display.style.display = "flex"
    
    if ( birthDate == "Invalid Date") {
        display.style.display = "none"
        alert("please fill the required values")
    }
    
    displayyear.innerText = Year - UserYear
    displaymonth.innerText = Month - UserMonth
    displayDate.innerText = 31 - (UserDate - date) 
    
    


    
    
    
    if (UserMonth >= Month && UserDate > date) {
        displayyear.innerText = Number(displayyear.innerText) - 1
    } 
    
    
    if (UserDate > date){
        displaymonth.innerText = Number(displaymonth.innerText) - 1
    }
     
    displaymonth.innerText = Number(displaymonth.innerText) + (Year - UserYear - Number(displayyear.innerText)) * 12;
    

    displaymonth.innerText < 0 ? 0 : displaymonth.innerText ;


    if (displayyear.innerText == 0) {
        displayyear.innerText = 1
    } else if (displayDate.innerText == 0) {
        displayDate.innerText = 1
    } else if (displaymonth.innerText == 0) {
        displaymonth.innerText = 1
    }
     

}
