const coutries = [
  "AC",
  "AF",
  "AG",
  "AJ",
  "AL",
  "AM",
  "AN",
  "AO",
  "AR",
  "AS",
  "AT",
  "BA",
  "BB",
  "BC",
  "BE",
  "BF",
  "BG",
  "BH",
  "BK",
  "BL",
  "BM",
  "BN",
  "BO",
  "BP",
  "BR",
  "BT",
  "BU",
  "BX",
  "BY",
  "CA",
  "CB",
  "CD",
  "CE",
  "CF",
  "CG",
  "CH",
  "CL",
  "CM",
  "CN",
  "CO",
  "CQ",
  "CS",
  "CT",
  "CU",
  "CV",
  "CY",
  "CZ",
  "DA",
  "DJ",
  "DO",
  "DR",
  "EC",
  "EG",
  "EK",
  "EN",
  "ER",
  "SV",
  "ET",
  "FI",
  "FJ",
  "FM",
  "FR",
  "GA",
  "GB",
  "GE",
  "GG",
  "GH",
  "GJ",
  "GR",
  "GT",
  "GV",
  "GY",
  "HA",
  "HO",
  "HR",
  "HU",
  "IC",
  "ID",
  "IE",
  "IN",
  "IR",
  "IS",
  "IT",
  "IV",
  "IZ",
  "JA",
  "JM",
  "JO",
  "KE",
  "KG",
  "KN",
  "KR",
  "KS",
  "KU",
  "KZ",
  "LA",
  "LE",
  "LG",
  "LH",
  "LI",
  "LS",
  "LT",
  "LU",
  "LY",
  "MA",
  "MD",
  "MG",
  "MI",
  "MK",
  "ML",
  "MN",
  "MO",
  "MP",
  "MR",
  "MT",
  "MU",
  "MV",
  "MX",
  "MY",
  "MZ",
  "NG",
  "NH",
  "NI",
  "NL",
  "NO",
  "NP",
  "NR",
  "NS",
  "NU",
  "NZ",
  "PA",
  "PE",
  "PK",
  "PL",
  "PM",
  "PO",
  "PP",
  "PU",
  "PW",
  "QA",
  "RM",
  "RO",
  "RP",
  "RQ",
  "RS",
  "RW",
  "SA",
  "SC",
  "SE",
  "SF",
  "SG",
  "SI",
  "SK",
  "SL",
  "SM",
  "SN",
  "SO",
  "SR",
  "ES",
  "ST",
  "SU",
  "SE",
  "SY",
  "SZ",
  "TC",
  "TD",
  "TM",
  "TH",
  "TI",
  "TN",
  "TO",
  "TP",
  "TS",
  "TU",
  "TV",
  "TW",
  "TX",
  "TZ",
  "UG",
  "UK",
  "UA",
  "US",
  "UV",
  "UY",
  "UZ",
  "VC",
  "VE",
  "VN",
  "VT",
  "WA",
  "WS",
  "WZ",
  "YE",
  "ZA",
  "ZI",
  "SD",
  "DZ",
  "AU",
  "GL",
  "RU",
];

function includeHTML(arg) {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  //console.log(z);
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute(arg);
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute(arg);
          includeHTML(arg);
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

var carte = document.querySelector("#map");
var paths = carte.querySelectorAll("path");

paths.forEach(function (path) {
  path.addEventListener("click", (a) => {
    const countryId = a.target.id;
    const contry = coutries.filter((item) => {
      return item === countryId;
    });
    var page = contry + ".html";

    document
      .getElementById("currentCountry")
      .setAttribute("include-html", page);

    includeHTML("include-html");
  });
});
