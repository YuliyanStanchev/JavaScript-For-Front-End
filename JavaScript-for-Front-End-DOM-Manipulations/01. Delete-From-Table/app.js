function deleteByEmail() {
    let email = document.querySelector("input[type=text]").value;
    let emailsList = document.querySelectorAll("tbody tr td:last-child");
    let result = document.getElementById("result");

    Array.from(emailsList).forEach(e => {
        let currentEmail = e.textContent;

        if (currentEmail === email) {
          e.parentNode.remove();
          result.textContent = "Deleted";
          return;
        
        }
        result.textContent = "Not found.";
    });
}
