function recommendCrop() {

    let nitrogen =
        Number(document.getElementById("nitrogen").value);

    let phosphorus =
        Number(document.getElementById("phosphorus").value);

    let potassium =
        Number(document.getElementById("potassium").value);

    let ph =
        Number(document.getElementById("ph").value);

    let result =
        document.getElementById("result");


    if (!nitrogen || !phosphorus || !potassium || !ph) {

        result.innerHTML =
            "⚠️ Please enter all soil values.";

        result.style.background = "#fff3cd";

        return;
    }


    let crop;


    if (ph >= 6 && ph <= 7.5 && nitrogen > 50) {

        crop = "🌾 Rice";

    }

    else if (ph >= 5.5 && ph <= 7 &&
             phosphorus > 40) {

        crop = "🌽 Maize";

    }

    else if (ph >= 6 && ph <= 7.5 &&
             potassium > 40) {

        crop = "🥔 Potato";

    }

    else if (ph >= 6 && ph <= 7.5) {

        crop = "🌱 Vegetables";

    }

    else {

        crop = "🌿 Groundnut";
    }


    result.innerHTML =
        "🤖 AI Recommendation: " + crop +
        "<br><br>Consider checking local soil and weather conditions before planting.";

    result.style.background = "#d9ffd9";
}
