
function Input(props) {

    const {handleOnChange, value} = props
    return (
        <div>
            <input onChange={handleOnChange} type="text" value={value}/>
        </div>
    );
  }
  
  export default Input;