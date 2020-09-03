(function() {

    const input = document.querySelector("input[type=text]");
    input.addEventListener("keyup", () => {
        // Remove Turkish characters & Trim
        input.value = input.value
            .replace("ı", "i")
            .replace("İ", "I")
            .replace("ç", "c")
            .replace("Ç", "C")
            .replace("ş", "s")
            .replace("Ş", "S")
            .replace("ö", "o")
            .replace("Ö", "O")
            .replace("ü", "u")
            .replace("Ü", "U")
            .replace("ğ", "g")
            .trim();
    });

})();