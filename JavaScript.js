var measureMentUnitSelected = "metric";
function changeMeasureUnit(unit) {
    measureMentUnitSelected = unit;
    var metricView = document.getElementById("metricView");
    var imperialView = document.getElementById("imperialView");

    console.log("Mesurement selected");
    if (measureMentUnitSelected == "metric") {
        metricView.style.display = 'block';
        imperialView.style.display = 'none';
    }
    else {
        metricView.style.display = 'none';
        imperialView.style.display = 'block';
    }

}


function calculateBmr() {
    var bmr;
    var cal;
    var age = document.getElementById("aValue").value;
    var male = document.getElementById("genderM").checked;
    var female = document.getElementById("genderF").checked;
    var activity = document.getElementById("alvalue").value;
    if (measureMentUnitSelected == "imperial" && male)
     {
        var fheight = document.getElementById("fValue").value;
        var iheight = document.getElementById("iValue").value;
    
        var pweight = document.getElementById("pValue").value;

        var height = parseInt(iheight) + parseInt(fheight * 12);
        var weight = parseInt(pweight); 

        bmr = Math.round(66 + (6.2 * weight) + (12.7 * height) - (6.76 * age));
        cal = Math.round(bmr * activity);
    }

    else if (measureMentUnitSelected == "imperial" && female)
     {
        var fheight = document.getElementById("fValue").value;
        var iheight = document.getElementById("iValue").value;
        
        var pweight = document.getElementById("pValue").value;

        var height = parseInt(iheight) + parseInt(fheight * 12);
        var weight = parseInt(pweight); 

        bmr = Math.round(655 + (4.35 * weight) + (4.7 * height) - (4.7 * age));
        cal = Math.round(bmr * activity);
    }

    else if(measureMentUnitSelected == "metric" && male) 
    {
       
        var cheight = document.getElementById("cmValue").value;
        var kweight = document.getElementById("kgValue").value;
       

        var height = parseInt(cheight); 
        var weight = parseInt(kweight);

        bmr = Math.round(66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age));
        cal = Math.round(bmr * activity);
    }

    else if (measureMentUnitSelected == "metric" && female)
    {
       
        var cheight = document.getElementById("cmValue").value;
        var kweight = document.getElementById("kgValue").value;


        var height = parseInt(cheight);
        var weight = parseInt(kweight);

        bmr = Math.round(655 + (9.563 * weight) + (1.85 * height) - (4.676 * age));
        cal = Math.round(bmr * activity);
    }
       
    document.getElementById("convertb").innerHTML = bmr;
    document.getElementById("convertc").innerHTML = cal;
}
document.getElementById("button").addEventListener("click", calculateBmr, false);