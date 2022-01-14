function view2(_n,_e,_m,_w){
  var a=document.getElementById('yo');
  var div=document.createElement('div');



  div.style.padding = "10px";
  div.style.margin = "10px";
  div.style.backgroundColor = "#fff";
  div.style.borderRadius = "2%";
  
    div.innerHTML = `<h4 style='color: rgb(54, 52, 52); font-weight: ; "font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"'>${_n}</h4> <h6 style='color: rgb(54, 52, 52); font-size: medium'> ${_m}<br></h6>`
    a.appendChild(div);
  
    }
  function view(){

    firebase.database().ref('User/').once('value').then(function(snapshot) {
    snapshot.forEach(function(child) {
    var n = child.val().name;
    var e = child.val().email;
    var m = child.val().comment;
    var w =child.val().website;
    view2(n,e,m,w);
      

      
    });      
    
            
     }, function(error) {
         if (error) {

         } else {

         }
       });
}
  


function show() {

  var name = document.getElementById("name").value;
  var website= document.getElementById("website").value;
  var email= document.getElementById("email").value;
  var comment=document.getElementById("comment").value;
  if(name==""||email==""||website==""||comment=="")
  {
    alert('Provide all information');
  }

  else
  {
    firebase.database().ref('User/' + name).set({
      comment: comment,
      name : name,
      website : website,
      email : email
      
    }, function(error) {
      if (error) {
        // The write failed...
        alert("Not done");
      } else {
          view();
          document.getElementById("name").value="";
          document.getElementById("email").value="";
          document.getElementById("comment").value="";
          document.getElementById("website").value="";
          alert("DONE");
         location.reload();
         
     
      }
    });
  }
} 

view();