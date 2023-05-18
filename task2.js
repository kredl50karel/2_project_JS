//objects
//field
const countriesPopulation = [
  { country: "China", population: 1439323776 },
  { country: "India", population: 1379302771 },
  { country: "USA", population: 331002651 },
  { country: "Indonesia", population: 269603400 },
  { country: "Pakistan", population: 220892340 },
  { country: "Bangladesh", population: 164970459 },
  { country: "Japan", population: 126451398 },
  { country: "Philippines", population: 109581078 },
  { country: "Vietnam", population: 97338579 },
  { country: "Turkey", population: 84339642 },
];

const populationTotal = 8000000000;

//task1
function pctCalculation(population, populationTotal) {
  const result_pct = ((population / populationTotal) * 100).toFixed(2);
  console.log(result_pct);
  return;
}

//check China
pctCalculation(countriesPopulation[0].population, populationTotal);

//task2
// copy field

const copyCountries = countriesPopulation.slice();

//check copy
console.table(copyCountries);

//rank
copyCountries.sort((a, b) => a.population - b.population);

// check rank
console.table(copyCountries);

//copyCountries = countriesPopulation.map((item, index) => ({
//id = item.country.slice(0, 3) + index
//item.percentage = ((item.population / populationTotal) * 100).toFixed(2),
//}));

console.table(copyCountries);

//copyCountries.forEach((item) => {
//item.percentage = ((item.population / populationTotal) * 100).toFixed(2);
//});
//check assign
//console.table(copyCountries);
const filteredCountries = copyCountries.filter(
  (c) =>
    c.country.length > 4 &&
    c.country.length <= 8 &&
    c.percentage > 1.5 &&
    c.percentage < 10
);

console.table(filteredCountries);
