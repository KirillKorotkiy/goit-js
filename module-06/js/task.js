import users from "./users.js"; 

//-TASK 1

const getUserNames = users => {
    return users.flatMap(user => user.name);;
    // твой код
  };

  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
  

  //-TASK 2

  const getUsersWithEyeColor = (users, color) => {
    return  users.filter(user => user.eyeColor === color);
    // твой код
  };
  
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

  //-TASK 3

  const getUsersWithGender = (users, gender) => {
    return users.filter(user => user.gender === gender)
    .flatMap(user => user.name);
    // твой код
  };
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//-TASK 4

  const getInactiveUsers = users => {
    const inactiveUsers = users.filter(user => !user.isActive)
    return inactiveUsers;
    // твой код
  };
  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

  //-TASK 5

const getUserWithEmail = (users, email) => {
  const uniqueUsre = users.find(user => user.email === email )
  return uniqueUsre;
  // твой код
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//-TASK 6

const getUsersWithAge = (users, min, max) => {
    const userByAge = users.filter(user => user.age >= min && user.age <= max)
    return userByAge;

    // твой код
  };
  
  console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
  
  console.log(getUsersWithAge(users, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]  

//-TASK 7

  const calculateTotalBalance = users => {
    const amountOfUsers = users.flatMap(user => user.balance)
    .reduce((total, user) => total + user );
    return amountOfUsers;
    // твой код
  };
  
  console.log(calculateTotalBalance(users)); // 20916  

  //-TASK 8

  const getUsersWithFriend = (users, friendName) => {

    const usersByFrined= users.filter(user => user.friends.includes(friendName))
    .flatMap(user => user.name);
    return usersByFrined;
    // твой код
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

  //-TASK 9

  const getNamesSortedByFriendsCount = users => {
    const usersByFrinedsLength = users.sort((a,b) => a.friends.length - b.friends.length)
    .flatMap(user => user.name);

    return usersByFrinedsLength;
    // твой код
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//-TASK 10

  const getSortedUniqueSkills = users => {

    const uniqueSkills = users.flatMap(user => user.skills)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((first, second) => first.localeCompare(second));

    return uniqueSkills;
    // твой код
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]