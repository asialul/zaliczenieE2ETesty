export function encryptCezar(text, s) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let encrypted = []

    for (let i = 0; i < text.length; i++) {

        let letter = text[i].toUpperCase()
        let index = alphabet.indexOf(letter)

        if(index === -1) {
            encrypted.push(letter)
        } else {
            encrypted.push(alphabet[(index + s) % 26])
        }
    }

return (encrypted.join(""))
}  

export function decryptCezar(text, s) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let decrypted = []

    for (let i = 0; i < text.length; i++) {

        let letter = text[i].toUpperCase()
        let index = alphabet.indexOf(letter)

            if(index === -1) {
                decrypted.push(letter)
            } else {
                decrypted.push(alphabet[(index + (25 * s)) % 26])
            }
        }

    return (decrypted.join(""))
}


export const vigenereTable = (text) => {
        const table = [];

        for (let j = 0; j < text.length; j++) {
            let shifted = []
            for (let i = 0; i < text.length; i++) {
                shifted.push(text[(i + j) % text.length])
            } 
            table.push(shifted)
        } 
        return table
    }

export const vigEncrypt = (text, codeWord) => {
        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        const table = vigenereTable(alphabet)
        const encrypted = []
    
        for(let i = 0; i < text.length; i++) {
            
            let num1 = alphabet.indexOf(text[i].toUpperCase())
            let num2 = alphabet.indexOf(codeWord[i % codeWord.length].toUpperCase())
            let letter = ""
    
            if (num1 === -1 || num2 === -1) {
                letter = text[i]
            } else {
                letter = table[num1][num2]
            }
            
            encrypted.push(letter)
        }
        
        return encrypted.join("")
    }

export const vigDecrypt = (text, codeWord) => {
        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        const decrypted = []

        for(let i = 0; i < text.length; i++) {
            let num1 = alphabet.indexOf(text[i].toUpperCase())
            let num2 = alphabet.indexOf(codeWord[i % codeWord.length].toUpperCase())
            let letter;  

            if (num1 === -1 || num2 === -1) {
                letter = text[i]
            } else {
            if(num1 < num2) {
                    letter = alphabet[num1 + alphabet.length - num2]
            } else if (num1 > num2) {
                    letter = alphabet[num1 - num2]
            } else {
                    letter = alphabet[0]
            }
            }
            
            decrypted.push(letter)
        }          
        
        return decrypted.join("")

}