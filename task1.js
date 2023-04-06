//Karel Kredl
//k.kredl@centrum.cz
//Karel K.#2080

//field
const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

// Prvni cast

function checkCountry(country, countries) {
  if (typeof country != "string" || country.length == 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}.`);
    return;
  } else if (countries.includes(country)) {
    console.log(
      `Zadaná krajina: ${country} se nachází v seznamu krajin na indexu:
      ${countries.indexOf(country)}.`
    );
    return;
  } else {
    console.log(`Zadaná krajina: ${country} se nenachází v seznamu krajin.`);
    return;
  }
}

// check
// checkCountry("Germany", countries);
// checkCountry("Japan", countries);
// checkCountry(1000, countries);

// Druha cast

function addCountry(country, countries) {
  if (typeof country != "string" || country.length == 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}.`);
    return;
  } else if (countries.includes(country)) {
    console.log(
      `Zadaná krajina: ${country} se nachází v seznamu krajin na indexu: ${countries.indexOf(
        country
      )}.`
    );
    return;
  } else {
    countries.push(country);
    console.log(
      `Zadaná krajina: ${country} byla úspěšně přidána do seznamu krajin na indexu ${countries.indexOf(
        country
      )}. Celkový počet krajin v seznamu je: ${countries.length}.`
    );
  }
  return;
}

//check
// addCountry("Vietnam", countries);
// addCountry("Mexico", countries);
// addCountry("Poland", countries);
// addCountry("", countries);

// Treti cast

function removeCountry(country, countries) {
  if (typeof country != "string" || country.length == 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}.`);
    return;
  } else if (countries.includes(country)) {
    const remove_Country_index = countries.indexOf(country);
    countries.splice(remove_Country_index, 1);
    console.log(
      `Zadaná krajina ${country} byla odstraněná ze seznamu krajin na indexu 
      ${question_Country_index}.
       Aktuální počet krajin v seznamu je: ${countries.length}.`
    );
    return;
  } else {
    console.log(`Zadaná krajina: ${country} se nenachází v seznamu.`);
  }
  return;
}

// check
// removeCountry("", countries);
// removeCountry("Vietnam", countries);
// removeCountry("Laos", countries);
// removeCountry("Thailand", countries);
