(function() {

    const nameInput    = document.querySelector("input[type=text]");
    const submitButton = document.querySelector("input[type=submit]");

    submitButton.addEventListener("click", e => {
        Predict(nameInput.value);
        e.preventDefault();
    })

})();