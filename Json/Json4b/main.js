var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function() {
  if(xhr.status === 200){
    var myStaff = JSON.parse(xhr.responseText);
    console.log(myStaff);
    
    var myString = "";
    for(i = 0; i < myStaff.presidents.length; i++){
      var x = i + 1;
      myString += "President"+x+"was";
      myString += myStaff.presidents[i].first+" ";
      myString += myStaff.presidents[i].last+" ";
    }
    document.getElementById('message').innerHTML = myString;
  }
}