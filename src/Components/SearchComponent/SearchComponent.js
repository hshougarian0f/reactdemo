import { useEffect, useState } from "react";
import "./SearchComponent.css";
import AnimalComponent from "../AnimalComponent/AnimalComponent";

function SearchComponent() {
    const [animal, setAnimal] = useState('dog')
    const [imageUrl, setImageUrl] = useState('')
    const [fetchNewImage, setFetchNewImage] = useState(0)

    useEffect(() => {
        const fetchImage = async () => {
          const response = animal === 'dog' ? await fetch(
            "https://dog.ceo/api/breeds/image/random"
          ) : await fetch("https://api.thecatapi.com/v1/images/search");
          const data = await response.json();
          setImageUrl(animal === "dog" ? data['message'] : data[0]["url"]);
        };
    
        fetchImage();
    }, [animal, fetchNewImage]); 

    function handleClick() {
        setFetchNewImage(fetchNewImage + 1)
    }
    
    return (
        <div className="search-container">
            <h1>Pick an Animal</h1>
            <select value={animal} onChange={(e) => setAnimal(e.target.value)} className="animal-select">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
            </select>
            <button className="search-button" onClick={handleClick}>New Image</button>
            <AnimalComponent imageUrl={imageUrl} animalType={animal} />
        </div>
    );
}

export default SearchComponent;