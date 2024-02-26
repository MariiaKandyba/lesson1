let currentDate = new Date(); 
module.exports.date = currentDate; 
 
module.exports.getMessage = function (name) { 
    let hour = currentDate.getHours(); 
    if (hour > 18) 
        return `добрий вечір ${name}`; 
    else if (hour > 10) 
        return "добрий день" + name; 
    else 
        return "добрий ранок" + name; 
 
}
