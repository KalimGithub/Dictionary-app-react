import react,{useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {searchWord} from '../redux/actions/searchActions';




const Home = () => {
    
const [word, setWord] = useState('');
const dispatch = useDispatch();
// const searchWord = useSelector(state => state.searchWord);
const handleSearch = () => {
    dispatch(searchWord(word));
}
useEffect(() => {
    const data = axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/experience')
    .then(response => console.log(response.data))
    .catch(err => console.log(err));
},[])
    return (


        <div className='home'>
            <div className='search-div'>
                <input type='text' 
                placeholder='Enter text to search'
                value={word}
                onChange={(e) => setWord(e.target.value)}
                />
                <button id='search-btn'
                onClick={handleSearch(word)}
                >Search</button>
            </div>
        </div>

    )
}

export default Home;