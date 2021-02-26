var time = new Date();
time.setDate(time.getDate()+30);

var dd = String(time.getDate()).padStart(2, '0');
var mm = String(time.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = time.getFullYear();

var today = mm + '/' + dd + '/' + yyyy;

export default today;