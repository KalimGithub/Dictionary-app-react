import React from 'react'

const WordsDetailPage = () => {
  return (
      <div className='word-detail-page'>
          <h1>experience</h1>
          <p>word detail</p>
          <audio controls>
              <source src="https://api.dictionaryapi.dev/media/pronunciations/en/experience-us.mp3" type="audio/ogg"></source>
              Your browser does not support the audio tag.
          </audio>
          <p>word detail</p>
          <audio controls>
              <source src="https://api.dictionaryapi.dev/media/pronunciations/en/experience-us.mp3" type="audio/ogg"></source>
              Your browser does not support the audio tag.
          </audio>
          <h3>noun</h3>
          <p>noun paragraph</p>
          <h3>verb</h3>
          <p>verb paragraph</p>
      </div>
  )
}

export default WordsDetailPage