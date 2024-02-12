function purplebutton(){
    if (customerName.trim() !==""){
        var inputDay = parseInt(document.getElementById('day').value);
        var inputMonth = parseInt(document.getElementById('month').value) - 1;
        var inputYear = parseInt(document.getElementById('year').value);
        
        var today = new Date();
        var birthDate = new Date(inputYear, inputMonth, inputDay);

        var years = today.getFullYear() - birthDate.getFullYear();
        var months = today.getMonth() - birthDate.getMonth();
        var days = today.getDate() - birthDate.getDate();
        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        document.getElementById('yearsdisplay').innerText = years;
        document.getElementById('monthsdisplay').innerText = months;
        document.getElementById('daysdisplay').innerText = days;
    }else{
        
    }
}