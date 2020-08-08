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
        new Dog(dog)
        Dog.renderAllDogs()
    })


// Do


dogContainer.addEventListener('click', function (e) {
    // Do
        e.preventDefault()
        debugger
        // e.target.id 
})