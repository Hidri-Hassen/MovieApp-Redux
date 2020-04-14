import React from 'react';
import MovieApp from "./components/movieApp"
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash,faEdit)



function App() {
  return <MovieApp /> ;
}

export default App;
