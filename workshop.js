// STATE

const freelancersNotDisplayedYet = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  { name: "Carol", price: 70, occupation: "programmer" },
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const freelancersToDisplay = []

const addFreelancerInterval = setInterval(addFreelancer, 2000)

function render(){
  // document.querySelector to find the container to put rows in
  const freelancerContainer = document.querySelector("#freelancers")

  // .map to turn freelancer objects into row elements
  const freelancerElements = freelancersToDisplay.map(freelancer=> {
      // freelancer looks like
      // { name: "Dr. Slice", price: 25, occupation: "gardener" }
      // if you forget: console.log("freelancer", freelancer)
      const rowElement = document.createElement("tr")

      const nameTd = document.createElement("td")
      nameTd.innerText = freelancer.name

      const occupationTd = document.createElement("td")
      occupationTd.innerText = freelancer.occupation

      const priceTd = document.createElement("td")
      priceTd.innerText = freelancer.price

      rowElement.append(nameTd, occupationTd, priceTd)
      return rowElement
  })

  // .replaceChildren(... ) to update the HTML
  freelancerContainer.replaceChildren(...freelancerElements)

  const averageElement =document.querySelector("#avg-msg")
  const averagePrice = calculateAveragePrice(freelancersToDisplay)
  const averagePriceRounded = averagePrice.toFixed(2)
  const message = `The average starting price is $${averagePriceRounded}`
  averageElement.innerText = message
}

function calculateAveragePrice(freelancers) {
  let count = freelancers.length
  // 1. set result variable to "nothing"
  let sum = 0
  // 2. for loop over input array
  for (const freelancer of freelancers){
  // freelancer looks like
  // { name: "Dr. Slice", price: 25, occupation: "gardener" }  
      const price = freelancer.price  
  // 3. update result variable with current item in array
      sum = sum + price
  }
  // 4. return result variable 
  const averagePrice = sum/count
  return averagePrice
}

function addFreelancer() {
  const nextFreelancer = freelancersNotDisplayedYet.shift()
  freelancersToDisplay.push(nextFreelancer)

  render()
}


