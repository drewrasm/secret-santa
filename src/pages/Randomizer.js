import { useState } from 'react';
import Input from '../components/InputComponent'
import Santa from '../pixl_santa.png'
import {computeMatches} from '../services/helpers'

function Randomizer() {

    const [names, setNames] = useState([])
    const [name, setName] = useState('')
    const [id, setId] = useState(0)
    const [results, setResults] = useState([])

    const [showResults, setShowResults] = useState(false);
    const [showSanta, setShowSanta] = useState(true);

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleAdd = () => {
        if(name.length > 0) {
            setNames(names.concat({name: name, id: id}))
            setName('')
            setId(id + 1)
        }
    }

    const handleRemove = (name) => {
        setNames(names.filter(n => n.id !== name.id))
    }

    const christmasTime = () => {
        setShowResults(true)
        const matches = computeMatches(names)
        setResults(matches)
        setTimeout(() => {
            setShowSanta(false)
        }, 2000)
    }

    return (
        <div className='page'>

            {!showResults ? ( <>
                <div className='title'>
                    Gather Your Elves
                </div>
                <div className='name-input'>
                    <Input value={name} handleOnChange={handleChange}></Input>
                    <div onClick={handleAdd} className='button button-red add-button'>add</div>
                </div>
                <div className='list-wrapper'>
                    {names.map((item, index) => {
                        return (
                            <div className='list-item' key={index}>
                                <div className='name'>- {item.name}</div>
                                <div onClick={() => handleRemove(item)} className='delete-button button'>x</div>
                            </div>)
                    })}
                </div>
                {names.length > 2 && (
                    <div onClick={christmasTime} className='random-button button button-green'>
                        CHRISTMAS TIME!
                    </div>
                )}
            </>) : (
                <>
                {showSanta ? (
                    <div className='rotate santa-wrapper'>
                        <img src={Santa}/>
                    </div>
                ): (
                    <>
                    <div className='title'>START SHOPPING!</div>
                    <div className='list-wrapper'>
                        <table className='name-table'>
                            <tbody>
                                {results.map((item, index) => {
                                return (
                                    <tr key={index + 'e'}>
                                        <td className='table-item'>{item.elf.name}</td>
                                        <td className='table-item'>YOU HAVE</td>
                                        <td className='table-item'>{item.match.name}</td>
                                    </tr>)
                                })} 
                            </tbody>
                        </table>
                    </div>
                    </>
                )}
                </>
            )}

        </div>
    );
}
  
export default Randomizer;
