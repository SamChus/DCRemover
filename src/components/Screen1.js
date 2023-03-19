

const Screen1 = ({value, setValue ,onsubmit}) => {


    return ( 
        <div>
            <h1>Screen 1</h1>
            <form onSubmit={onsubmit}>
                <input
                 type="text"
                 value={value}
                 onChange={e => setValue(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default Screen1;