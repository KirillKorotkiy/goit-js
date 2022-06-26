
 

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   // Change code below this line
//   updatePotionName(oldName, newName) {
//    const newArray =[];
//    for (const key of this.potions){
//     newArray.push(key.name);
//    }
//    console.log(newArray)
//   const findNumber = newArray.indexOf(oldName);
//   const keys = newArray.splice(findNumber, 1, newName)   

//    console.log(keys)
//    return keys
//   }
  
//   // Change code above this line

// }

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')



const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
  const findNumber = this.potions.indexOf(oldName);
  const key = this.potions.splice(findNumber, 1, newName)
  return key
    // Change code above this line
  },
};


console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))