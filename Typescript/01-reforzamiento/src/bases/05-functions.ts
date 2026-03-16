interface User {
    uid: string;
    username: string;
}



function greet( name: string ): string {
    return `Hola ${name}`
}

const greet2 = (name: string): string => `Hola ${name}`;



function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'leiton05'
    }
}

const getUser2 = () => ({
        uid: 'EFG-456',
        username: 'nani'
    })



const myNumbers: number[] = [1, 2, 3, 4, 5];

myNumbers.forEach((value)=>console.log({value}));



const message = greet('Leiton')
const message2 = greet2('Daniela')
const user = getUser();
const user2 = getUser2();


console.log(message, message2);
console.log(user, user2);
