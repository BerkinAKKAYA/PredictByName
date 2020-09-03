function Predict(name)
{
    let age, gender, countries;

    FetchData("agify",       name, result => { age       = result.age     })
    FetchData("genderize",   name, result => { gender    = result.gender  })
    FetchData("nationalize", name, result => { countries = result.country })

    async function FetchData(website, name, Callback)
    {
        const response = await fetch(`https://api.${website}.io?name=${name}`);
        const json = await response.json();

        Callback(json);

        // If couldn't fetch the age, print warning.
        if (website == "agify" && !json.age) {
            PrintWarning();
        }

        // If there is nothing to fetch
        if (age && gender && countries) {
            PrintResult();
        }
    }

    function PrintWarning()
    {
        document.getElementById("output-fieldset").style.display = "block";
        const output = document.getElementById("output-container");
        output.innerHTML = `
            <p class="error"><b>No Results Found!</b></p>
            <p class="error">Couldn't guess. Please check the name and try again.</p>
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