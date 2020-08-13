// create new Dog object
// let scruffyDog = new Dog("Scruffy", 4, "Terrier")

let dogContainer = document.getElementById('dog-container')
let dogFormContainer = document.getElementById('new-dog-form')

// somewhere random, create a form for user to do/create all this
// Select / Create Form
dogFormContainer.innerHTML = `
    <form id='new-doggy-form'>
        <label>Name:</label>
        <input type="text" name="name" value="">
        <label>Age:</label>
        <input type="text" name="age" value="">
        <label>Breed:</label>
        <input type="text" name="breed" value="">
        <input type="submit" value="Add New Dog">
    </form>
`
// Listen

dogFormContainer.addEventListener('submit', function(e) {
        e.preventDefault()
        let dog = {
            'name': document.querySelector("[name='name']").value,
            'age': document.querySelector("[name='age']").value,
            'breed': document.querySelector("[name='breed']").value
        }
// Do
        new Dog(dog.name, dog.age, dog.breed)
        Dog.renderAllDogs()
    })


// have some type of birthday widget to increase the dog's age

// Determine
// Observe
dogContainer.addEventListener('click', function (e) {
        e.preventDefault()
// Manipulate
        // debugger
        let dogName = e.target.id
        let dog = Dog.all.find(e => e.name === dogName)
        dog.age = parseInt(dog.age) + 1
        Dog.renderAllDogs()
})


// function scopeOne() { 
//     const scopeTwo = () => {
//         console.log(this);
//     }
//     scopeTwo()
// }

// scopeOne()