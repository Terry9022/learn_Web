// java script link to comment html file
function show(){
    var name = document.getElementById("name").value;

    var image = document.querySelector(".myImg");
    image.style["display"] = "block";

    document.getElementById("message").innerHTML =  "Comment sent. Dear "+name + " , thank you for your precious comment.";
    
    setTimeout(function(){
        document.getElementById("message").innerHTML = ''; }, 1500);
 
    setTimeout(function(){
        window.location.reload(); }, 1500);
};
