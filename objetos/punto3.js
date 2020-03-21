'use strict';

const geekgirl = {
    name: 'Susana',
    age: 34,
    ocuppation: 'journalist',
    showBio: `My name is ${geekgirl.name}, I am ${geekgirl.age} years old and I\'m a ${geekgirl.ocuppation}`
};


geekGirl.showBio = () => {
 return(`My name is ${geekGirl.name}, I am ${geekGirl.age} years old and I\'m a ${geekGirl.ocuppation}`);
    //return 'mi nombre es'+ this.name+' tengo '+ this.edad + ' y soy '+ this.profesion;
  //}
}
console.log(geekGirl.showBio());


//forma larga
/*geekGirl.showBio = function (){
    return 'mi nombre es'+ this.name+' tengo '+ this.edad + ' y soy '+ this.profesion;
  }

console.log(geekGirl.showBio());*/