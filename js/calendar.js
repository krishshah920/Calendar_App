
var dt = new Date();
//calendar
function renderDate(){
dt.setDate(1);
var day = dt.getDay();

var endDate = new Date(
  dt.getFullYear(),
  dt.getMonth()+1,
  0
).getDate();

var prevDate = new Date(
  dt.getFullYear(),
  dt.getMonth(),
  0
).getDate();

var today = new Date();

var months = ['January','February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];

document.getElementById('month').innerHTML = months[dt.getMonth()];
document.getElementById('dateStr').innerHTML = dt.getFullYear(); 

var cells = "";

for(x=day; x>0; x--){
  cells += "<li class = 'prevDate'>" + (prevDate-x+1) +"</li>";
}

for(i=1;i<=endDate;i++){
  if(i==today.getUTCDate() && dt.getMonth() == today.getMonth()){
    cells += "<li class = 'active'>" + i +"</li>";
  }
  else{
    cells += "<li>" + i +"</li>";

  }
}
document.getElementsByClassName('days')[0].innerHTML = cells;

}

function moveDate(para){
  if(para == 'prev'){
    dt.setMonth(dt.getMonth()-1);
  }
  else if(para == 'next'){
    dt.setMonth(dt.getMonth() +1);
  }
  
  renderDate();
}
