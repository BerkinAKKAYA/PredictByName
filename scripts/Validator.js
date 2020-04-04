(function() {

    const input = document.querySelector("input[type=text]");
    input.addEventListener("keyup", Validate);

    function Validate()
    {
        let char = input.value.slice(-1);

        switch (char) {
            case " ": char = "";  break;
            case "ı": char = "i"; break;
            case "İ": char = "I"; break;
            case "ç": char = "c"; break;
            case "Ç": char = "C"; break;
            case "ş": char = "s"; break;
            case "Ş": char = "S"; break;
            case "ö": char = "o"; break;
            case "Ö": char = "O"; break;
            case "ü": char = "u"; break;
            case "Ü": char = "U"; break;
            case "ğ": char = "g"; break;
        }

        input.value = input.value.slice(0, -1);
        input.value += char;
    }

})();