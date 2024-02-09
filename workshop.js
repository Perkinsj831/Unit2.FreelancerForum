const freeLancers = [
    {
        lancerName: "Alice",
        occupation: "Writer",
        startingPrice: 30  
    },
    {
        lancerName: "Bob",
        occupation: "Teacher",
        startingPrice: 50  
    },
    {
        lancerName: "Carol",
        occupation: "Programmer",
        startingPrice: 70  
    },
  ];

  const maxAmount = 1

  let title = document.getElementById("title")
  title.innerText = "Freelance Forum"

  let averagePrice = document.getElementById("averagePrice")
  averagePrice.innerText = "The Average Starting Price is $50"

  for(i=0; i < freeLancers.length; i++){

  let name = document.createElement("tr")
  name.innerHTML = `<td>${freeLancers[i].lancerName}</td><td>${freeLancers[i].occupation}</td><td>${freeLancers[i].startingPrice}</td>`
  document.getElementById("tbody").append(name)
  }


  const newFreelancers = [
    { name: "Dr. Slice", price: 25, occupation: "Gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
    { name: "Prof. Prism", price: 81, occupation: "Teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
    { name: "Prof. Spark", price: 76, occupation: "Programmer" },
    { name: "Dr. Wire", price: 47, occupation: "Teacher" },
    { name: "Prof. Goose", price: 72, occupation: "Driver" },
  ];

  const addInfoIntervalId = setInterval(addInfo, 2000)
  
  render()

  function addInfo(){
    for(i=0; i < newFreelancers.length; i++){

    let newName = document.createElement("tr")
    newName.innerHTML = `<td>${newFreelancers[i].name}</td><td>${newFreelancers[i].occupation}</td><td>${newFreelancers[i].price}</td>`
    document.getElementById("tbody").append(newName)
    }

    render()

    if(newFreelancers.length >= maxAmount){
        clearInterval(addInfoIntervalId)
    }
  }

  

//   const addFreeLancerInterval = setInterval(addFreeLancer, 2000)


// function addFreeLancer(newFreelancer)

// i = 0
// setInterval() => {
    
//     addFreeLancer( freelancers[i])
//     i++
// },2000