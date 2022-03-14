import './App.css';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function GiffonApp() {
  const [categories, setCategories] = useState(['Naruto']);

  return (
    <div className="App">
      <header className="App-header">
        <h3 className='app-title animate__animated animate__flash animate__delay-1s'>Giffon</h3>
        <AddCategory setCategories={setCategories} />
        <hr />
        <ul>
          {categories.map((cat, index) =>
            <GifGrid
              key={index}
              category={cat} />
          )}
        </ul>
      </header>
    </div>
  );
}

export default GiffonApp;
