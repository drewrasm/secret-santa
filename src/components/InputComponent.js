
function Input(props) {

    const {handleOnChange, value} = props
    return (
        <div className='input-wrapper'>
            <input className='text-input' onChange={handleOnChange} type="text" value={value}/>
        </div>
    );
  }
  
  export default Input;