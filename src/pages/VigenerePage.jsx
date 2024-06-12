import React from 'react'
import { useState } from 'react'
import { vigenereTable, vigEncrypt, vigDecrypt } from '../Utils'

function VigenerePage() {
    const [text1, setText1] = useState('')
    const [keyword1, setKeyword1] = useState('')

    const [text2, setText2] = useState('')
    const [keyword2, setKeyword2] = useState('')

    const handleSubmit_szyfr = (event) => {
        event.preventDefault()
        alert(vigEncrypt(text1, keyword1))
    }

    const handleSubmit_deszyfr = (event) => {
        event.preventDefault()
        alert(vigDecrypt(text2, keyword2))
    }


    return (
    <div className='center'>
        <h1>Zaszyfruj:</h1>
        <form onSubmit={handleSubmit_szyfr}>
            <label for="text1">
                Wstaw swój tekst (bez polskich znaków):
            </label><br />
            <textarea rows={4} cols={40} name="text1" value={text1} onChange={(e) => setText1(e.target.value)}/> <br />
            <label for="keyword1">
                Wpisz słowo-klucz (bez polskich znaków):
            </label><br />
            <input type="text" name="keyword1" value={keyword1} onChange={(e) => setKeyword1(e.target.value)} /> <br />
            <button type="submit" id="button1">Zaszyfruj</button>
        </form>
        <p id="zaszyfrowane"></p>
        <h1>Odszyfruj:</h1>
        <form onSubmit={handleSubmit_deszyfr}>
            <label>
                Wstaw swój tekst (bez polskich znaków):
            </label><br />
            <textarea rows={4} cols={40} name="text2" value={text2} onChange={(e) => setText2(e.target.value)}/> <br />
            <label>
                Wpisz słowo-klucz (bez polskich znaków):
            </label><br />
            <input type="text" name="keyword2" value={keyword2} onChange={(e) => setKeyword2(e.target.value)} /> <br />
            <button type="submit" id="button2">Odszyfruj</button>
        </form>
        <p id="odszyfrowane"></p>
    </div>
  )
}

export default VigenerePage