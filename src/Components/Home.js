import react,{useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {searchWord} from '../redux/actions/searchActions';
import WordDisplayPage from './WordsDetailPage'



const Home = () => {
    
const [word, setWord] = useState('');
const dispatch = useDispatch();
// const search = useSelector((state) => state.search);
// console.log(search);
const handleSearch = () => {
    dispatch(searchWord(word));
}
useEffect(() => {
    const data = axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/experience')
    // .then(response => 
    //     // console.log(response.data)
    //  search = useSelector((state) => 
    // //  state.search

    // //  )
    // //  console.log(search)
    //  setWord(search.word)
    //  )
    .then(
        response => 
        console.log(response.data)
        // data.data.map(word => (
        //     <WordDisplayPage key={word.word}
        //     word={word.word}
        //     word_type={word.type}
        //     word_definition={word.meanings[0].definitions[0].definition}
        //     word_synonyms={word.meanings[0].definitions[0].synonyms}
        //     word_antonyms={word.meanings[0].definitions[0].antonyms}
        //     word_pronunciation={word.meanings[0].definitions[0].phonetics[0].audio}
        //     />)
    //  )
     )
    .catch(err => console.log(err));
},[])
    return (
        <div>
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
            <div>
                <h1>search</h1>

            </div>
            <WordDisplayPage/>
        </div>
    )
}

export default Home;