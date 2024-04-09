import { useState } from "react";
import "./SearchComponent.css";

function SearchComponent() {
    const [animal, setAnimal] = useState('')
    
    return (
        <div className="search-container">
            <h1>Pick an Animal</h1>
            <select value={animal} onChange={(e) => setAnimal(e.target.value)} className="animal-select">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
            </select>
            <button className="search-button">Show me a picture!</button>
        </div>
    );
}

export default SearchComponent;