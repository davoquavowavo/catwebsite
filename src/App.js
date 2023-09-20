import React, { useState, useEffect } from 'react';
import getBaseApi from './Api';
import getBreedsApi from './Breedapi';
import './App.css';

function App() {
  const [catImages, setCatImages] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
  
    const breedsApi = getBreedsApi();

    breedsApi
      .get('/v1/breeds')
      .then((response) => {
        setBreeds(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cat breeds:', error);
      });
  }, []);

  useEffect(() => {
    const baseApi = getBaseApi();
    const breedParam = selectedBreed ? `&breed_ids=${selectedBreed}` : '';

    baseApi
      .get(`/v1/images/search?limit=10${breedParam}`)
      .then((response) => {
        setCatImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cat images:', error);
      });
  }, [selectedBreed]);

  const handleBreedChange = (event) => {
    const selectedBreedId = event.target.value;
    setSelectedBreed(selectedBreedId);
  };

  return (
    <div>
      <h1>Cat Images</h1>
      <div>
        <label htmlFor="breedSelect">Select a Breed: </label>
        <select
          id="breedSelect"
          onChange={handleBreedChange}
          value={selectedBreed}
        >
          <option value="">All Breeds</option>
          {breeds.map((breed) => (
            <option key={breed.id} value={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {catImages.map((image, index) => (
          <li key={index}>
            <img src={image.url} alt={`Cat ${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;