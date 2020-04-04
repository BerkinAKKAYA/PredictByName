function Predict(name)
{
    let age = 0;
    let gender = "";
    let countries = [];

    FetchData("agify",       name, result => { age       = result.age     })
    FetchData("genderize",   name, result => { gender    = result.gender  })
    FetchData("nationalize", name, result => { countries = result.country })

    const IsDataReady = () => (age!=0 && gender!="" && countries.length>0);

    function FetchData(website, name, callback)
    {
        fetch(`https://api.${website}.io?name=${name}`)
            .then(event => event.json())
            .then(result => {
                callback(result);

                if (website == "agify" && result.age == null)
                    PrintWarning();

                if (IsDataReady())
                    PrintResult();
            });
    }

    function PrintWarning()
    {
        document.getElementById("output-fieldset").style.display = "block";
        const output = document.getElementById("output-container");
        output.innerHTML = `
            <p style="text-align:center"><b>No Results Found!</b></p>
            <p style="text-align:justify">
                Either your input is not valid or
                there is a problem. Please try again soon!
            </p>
        `;
    }

    function PrintResult()
    {
        document.getElementById("output-fieldset").style.display = "block";
        const output = document.getElementById("output-container");

        output.innerHTML = `
            <p><b>Age:</b>     ${age} </p>
            <p><b>Gender:</b>  ${gender} </p>
            <p><b>Country:</b> ${Country()} </p>
        `;

        function Country() {
            const CountryCode = index => countries[index].country_id;
            const CountryName = index => ISOtoCountryName(CountryCode(index));

            if (countries.length == 1)
                return CountryName(0);
            else
                return `${ CountryName(0)} or ${ CountryName(1) } `
        }
    }
}