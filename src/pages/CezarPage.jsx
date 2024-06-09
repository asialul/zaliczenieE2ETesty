import { encryptCezar, decryptCezar } from '../Utils'
import { useState } from 'react'
import '/src/pages/Szyfry.module.css'

function CezarPage() {
    const [text1, setText1] = useState('')
    const [shift1, setShift1] = useState(0)

    const [text2, setText2] = useState('')
    const [shift2, setShift2] = useState(0)
    
    
    const handleSubmit_szyfr = (event) => {
        event.preventDefault()
        alert(encryptCezar(text1, shift1))   
    }

    const handleSubmit_deszyfr = (event) => {
        event.preventDefault()
        alert(decryptCezar(text2, shift2))
    }


  return (
    <div className='center'>
    <h1>Zaszyfruj:</h1>
        <form onSubmit={handleSubmit_szyfr}>
            <label for="tekst1">
                Wstaw swój tekst (bez polskich znaków):
            </label><br />
            <textarea rows={4} cols={40} name="tekst1" value={text1} onChange={(e) => setText1(e.target.value)}/> <br />
            <label for="shift1">
                Wpisz wartość przesunięcia (liczba całkowita większa lub równa zero):
            </label><br />
            <input type="number" id="shift1" name="shift1" min="0" step="1" value={shift1} onChange={(e) => setShift1(e.target.value)}/> <br />  
            <button type="submit">Zaszyfruj</button>
        </form>
        <p id="zaszyfrowane"></p>
        <h1>Odszyfruj:</h1>
        <form onSubmit={handleSubmit_deszyfr}>
            <label for="tekst2">
                Wstaw swój tekst (bez polskich znaków):
            </label><br />
            <textarea rows={4} cols={40} name="tekst2" value={text2} onChange={(e) => setText2(e.target.value)}/> <br />
            <label for="shift2">
                Wpisz wartość przesunięcia (liczba całkowita większa lub równa zero)
            </label><br />
            <input type="number" id="shift2" name="shift2" min="0" step="1" value={shift2} onChange={(e) => setShift2(e.target.value)}/> <br />  
            <button type="submit">Odszyfruj</button>
        </form>
    <p id="odszyfrowane"></p>
    </div>
  )
}

export default CezarPage