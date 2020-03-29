let menuItem = {
    name: 'Kale Caesar Salad',
    nickName: 'All Hail Kale',
    referenceID: 'SLD001',
    description: 'Kale is king in this hearty, flavorful salad that pays homage to the traditional - but with a healthy twist',
    highInCalories: false,
    ingredients: ['Kale', 'Caesar dressing', 'Anchovy paste', 'Grilled corn', 'Parmesan cheese', 'Croutons'],
    numIngredients: function() {
      return this.ingredients.length;
    }
  }

//1. salad was added in 2017.
  // menuItem.year = 2017;
  // console.log(menuItem.name);

//2. Please add something to track which menu the dish will be featured on. The Caesar salad is for
//lunch and dinner.

// menuItem.time = ['lunch', 'dinner'];

//add property to object.

//3: Yikes! When I first did the menu, I broke dishes down to low and high in calories.  I don't
// like this anymore, so can you remove it and change it to the number of calories?
// The salad stands at 560 calories
// menuItem.highInCalories= 560;

// 4: Don't you think the nickname is stupid?  Remove it.  Sooo not needed.
// delete menuItem.nickName;

//5: OMG!  I forgot to add lemon juice to the list of ingredients.  Can you add this?
menuItem.ingredients.push('lemon juice');

//**WILL PRINT key/value pairs for menuItem
console.log("\n\n******menuItem Object******");
Object.entries(menuItem).forEach(([key, value]) => {
  if (key != 'numIngredients')
    console.log(`${key}: ${value}`)
  });
console.log(`Number of ingredients = ${menuItem.numIngredients()}`);




