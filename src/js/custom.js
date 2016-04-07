$(document).ready(function(){

    //Se il browser NON supporta l'attributo Border Radius
    if (!Modernizr.borderradius) {
        // Border Radius viene assegnato a jquery
        $.getScript("js/jquery.corner.js", function () {
            $("#cornerDiv").corner();
            alert("Border Radius generato da jquery corner");
        });
    }


    // Se il browser NON supporta l'attributo autofocus
    if(!Modernizr.input.autofocus){ 
        // Il focus viene assegnato alla casella di testo da javascript
        document.getElementById("keyword").focus();
        alert("Focus generato da javascript");
    }

    
      if (Modernizr.canvas) {
    alert("Questo browser supporta i canvas!");
  } else {
    alert("No canvas :(");
  }
  
//var element = document.getElementById('reflection');
if (Modernizr.cssreflections) {
//    element.className = 'reflection';
    alert("Reflection Supportato")
    
} else {
//    element.className = 'no-reflection';
    alert("No Reflection")
}
    
});

