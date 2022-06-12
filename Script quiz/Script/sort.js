const persons = [
    { ad: "Qocali", soyad: "Babayev" },
    {
        ad: "ali",
        soyad: "Huseynov"
    }
]
console.log(persons.map(x => [x.ad, x.soyad].join(" ")))