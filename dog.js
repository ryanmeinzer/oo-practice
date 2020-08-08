// instantiate class called Dog
class Dog {

// class should have a variable with all instances of the dogs in there (array)
    static all = []

// add in a name, age and breed
    constructor({name, age, breed}){
        // why isn't the id being defined upon creation? 
        this.name = name
        this.age = age
        this.breed = breed

        this.main = document.createElement('div')
        // this.main.id = `${this.id}`
    
        Dog.all.push(this)

    }

// have two instance methods:
// 1. increase age of dog and

    ageIncrement(){
        return this.age = this.age + 1
    }

// 2. renders html that puts dog out in div tag to index.html

    renderDog(){
        this.main.innerHTML = `
        Name: ${this.name}
        Age: ${this.age}
        Breed: ${this.breed}
        <button id='${this.name}'>Increment ${this.name}'s age by one</button>
        `
    }

// render all dogs

    static renderAllDogs(){
        Dog.all.forEach((dog) => {
            dog.renderDog()
            dogContainer.appendChild(dog.main)
        })
    }


}