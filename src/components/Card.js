

const Card = ({character, onclick, id}) => {

    // console.log(id);
    return ( 
        <div>
            <h4 style={{margin: "20px"}} onClick={() => onclick(id)}>{character}</h4>
        </div>
     );
}
 
export default Card;

