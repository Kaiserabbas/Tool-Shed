import React, { useState } from 'react';

function WordDefinitions() {
  const [word, setWord] = useState('');
  const [definitions, setDefinitions] = useState([]);

  const fetchDefinitions = () => {
    if (word.trim() === '') {
      return;
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => {
        setDefinitions(data);
      })
      .catch((error) => {
        console.error('Error fetching definitions:', error);
      });
  };

  return (
    <div className="dictionary">
      <h3>Get Word Definitions</h3>
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button type="button" onClick={fetchDefinitions}>
        Fetch Definitions
      </button>

      {definitions.length > 0 && (
        <div className="definitions">
          {definitions.map((entry, index) => (
            <div key={index}>
              <h4>{entry.word}</h4>
              {entry.phonetics &&
                entry.phonetics.map((phonetic, index) => (
                  <div key={index}>
                    <p>Phonetic: {phonetic.text}</p>
                    {phonetic.audio && <audio controls src={phonetic.audio} />}
                  </div>
                ))}
              {entry.meanings.map((meaning, index) => (
                <div key={index}>
                  <p>{meaning.partOfSpeech}</p>
                  {meaning.definitions.map((definition, index) => (
                    <div key={index}>
                      <p>Definition: {definition.definition}</p>
                      {definition.example && (
                        <p>Example: {definition.example}</p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WordDefinitions;
