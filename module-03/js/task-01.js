const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};


user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
const newArray = Object.keys(user);
console.log(newArray)
for (const arr of newArray){
  console.log(`${arr} - ${user[arr]}`)
}