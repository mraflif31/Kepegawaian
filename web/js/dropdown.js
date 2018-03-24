        
toggle = "none";
last = "none";

function myFunction(id_name) {
    
        if(toggle === "none") {
            document.getElementById(id_name).classList.toggle("show");
            toggle = id_name;
            last = id_name;
        } else if (last === id_name) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
            
            toggle = "none";
        } else {
            
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
            
            if (id_name != toggle) {
                document.getElementById(id_name).classList.toggle("show");
                toggle = id_name;   
                last = id_name;
            }
        }
}

        window.onclick = function(event) {
            
          if (!event.target.matches('.dropbtn')) {
              
              toggle = "none";
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        }