function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const textAreaRef = document.querySelector("textArea");
   const bestRestaurantInfo = document.querySelector("#bestRestaurant p")
   const bestRestaurantWorkers = document.querySelector("#workers p")

   function onClick() {
      let data = JSON.parse(textAreaRef.value)
      let result = {};

      for (let line of data) {
         let [name, workers] = line.split(" - ");
         if (!result.hasOwnProperty(name)) {
            result[name] = {
               averageSalary: 0,
               bestSalary: 0,
               workers: []
            }
         }
         let currentWorkers = getArrOfWorkers(workers, result[name].workers);
         result[name].workers = sortWorkers(currentWorkers);
         reviewSalary(result[name]);
      }
      let bestRestaurant = findBestRestaurant(result);
      appendBestRestaurantInfo(bestRestaurant);
      appendBestRestaurantWorkersInfo(bestRestaurant[1].workers);
   }

   function appendBestRestaurantWorkersInfo(workers) {
      let buff = "";
      workers.forEach(worker => buff += `Name: ${worker.name} With Salary: ${worker.salary} `);

      bestRestaurantWorkers.textContent = buff
   }

   function appendBestRestaurantInfo(data) {
      bestRestaurantInfo.textContent = `Name: ${data[0]} Average Salary: ${data[1].averageSalary.toFixed(2)} Best Salary: ${data[1].bestSalary.toFixed(2)}`
   }

   function findBestRestaurant(restaurants) {
      return Object.entries(restaurants).sort((a, b) => {
         return b[1].averageSalary - a[1].averageSalary
      })[0];
   }

   function sortWorkers(workers) {
      return workers.sort((a, b) => b.salary - a.salary)
   }

   function reviewSalary(restaurant) {
      let salarySum = 0;
      let bestSalary = 0;
      restaurant.workers.forEach(worker => {
         salarySum += worker.salary
         if (bestSalary < worker.salary) {
            bestSalary = worker.salary
         }
      })
      restaurant.bestSalary = bestSalary;
      restaurant.averageSalary = salarySum / restaurant.workers.length
   }

   function getArrOfWorkers(workersData, existingWorkers) {
      let workersArr = workersData.split(", ");
      for (let tokens of workersArr) {
         let [name, salary] = tokens.split(" ")
         salary = Number(salary)
         existingWorkers.push({
            name,
            salary
         })
      }
      return existingWorkers;
   }

}