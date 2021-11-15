import { useState } from 'react';
import Input from '../components/InputComponent'
import Santa from '../pixl_santa.png'

function Randomizer() {

    const [names, setNames] = useState([]);
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleAdd = () => {
        setNames(names.concat(name))
        setName('')
    }

    const handleRemove = (name) => {
        setNames(names.filter(n => n !== name))
    }

    return (
        <div className='page'>
            <div className='title'>
                Randomizer
            </div>
            <div className='name-input'>
                <Input value={name} handleOnChange={handleChange}></Input>
                <div onClick={handleAdd} className='button button-red'>add</div>
            </div>
            <div className='name-wrapper'>
                {names.map((name, index) => {
                    return (
                        <div key={index}>
                            <div className='name'>- {name}</div>
                            <div onClick={() => handleRemove(name)} className='button'>X</div>
                        </div>)
                })}
            </div>
            <div className='hide rotate santa-wrapper'>
                <img src={Santa}/>
            </div>
        </div>
    );
}
  
export default Randomizer;
