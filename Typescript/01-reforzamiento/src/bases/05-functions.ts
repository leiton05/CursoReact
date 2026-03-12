function greet( name: string ): string {
    return `Hola ${name}`
}

const greet2 = (name: string): string => {
    return `Hola ${name}`;
}


function getUser() {
    return {
        uid: 'ABC-123',
        username: 'leiton05'
    }
}

const getUser2 = () => {
    return {
        uid: 'EFG-456',
        username: 'nani'
    }
}




const message = greet('Leiton')
const message2 = greet2('Daniela')
const user = getUser();
const user2 = getUser2();


console.log(message, message2);
console.log(user, user2);
