import "./AnimalComponent.css";

function AnimalComponent(props) { 
    return (
        <div>
            <img className="image-container" src={props.imageUrl} alt={props.animalType}/>
            <p>Wow look! {props.animalType}!</p>
        </div>
    );
}

export default AnimalComponent;