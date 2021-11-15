import { useState } from 'react';
import Input from '../components/InputComponent'
import MatchTable from '../components/MatchTable'
import Santa from '../pixl_santa.png'
import {computeMatches} from '../services/helpers'

function Randomizer() {

    const [names, setNames] = useState([])
    const [name, setName] = useState('')
    const [id, setId] = useState(1)
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

    const handleExceptionSelect = (name, exception) => {
        let newNames = names
        for(let n of newNames) {
            if(n.id === name.id) {
                n['exception'] = exception
            }
        }
        setNames(newNames)
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
                        return (<>
                            <div className='list-item' key={index}>
                                <div className='name'>- {item.name}</div>
                                <div onClick={() => handleRemove(item)} className='delete-button button'>x</div>
                            </div>
                            <div>
                                Exception:
                                <select onChange={(e) => handleExceptionSelect(item, Number(e.target.value))}>
                                    <option key='blank-select' value={0}>-------</option>
                                    {names.map((optionItem, optionIndex) => {
                                        if(item.id !== optionItem.id ) {
                                            return <option key={optionIndex + 'option'} value={optionItem.id}>{optionItem.name}</option>
                                        }
                                    })}
                                </select>
                            </div>
                            <br></br>
                            </>)
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
                ): (<>
                    <div className='title'>START SHOPPING!</div>
                    <MatchTable results={results}/>
                </>)}
                </>
            )}

        </div>
    );
}
  
export default Randomizer;
