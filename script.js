let string = "";

    let buttons = document.querySelectorAll(".button");
    Array.from(buttons).forEach((button) => {
      button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
          string = eval(string);
          document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "C") {
          string = "";
          document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "Del") {
          string = string.slice(0, -1);
          document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "%") {
          // Implement percentage calculation
          string = eval(string) / 100;
          document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "^") {
          // Implement power calculation
          let parts = string.split("^");
          if (parts.length === 2) {
            string = Math.pow(parseFloat(parts[0]), parseFloat(parts[1]));
            document.querySelector("input").value = string;
          } else {
            // Handle invalid input
            string = "Invalid Input";
            document.querySelector("input").value = string;
          }
        } else {
          string = string + e.target.innerHTML;
          document.querySelector("input").value = string;
        }
      });
    });
