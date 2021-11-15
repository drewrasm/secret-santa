
function MatchTable(props) {

    const {results} = props
    return (
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
    );
  }
  
  export default MatchTable;