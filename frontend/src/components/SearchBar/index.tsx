import { useState } from 'react';
import './styles.css';

type Props = {
  onSearch: Function
}

export default function SearchBar({onSearch} : Props) {

  const [text, setText] = useState('');

    function handleSubmit(event: any) {
      event.preventDefault();
      onSearch(text);
    }

    function handleChange(event: any) {
      setText(event.target.value)
    }

    function handleResetClick(event: any) {
      setText('');
      onSearch(text);
    }

    return (
        <form className="dsc-search-bar" onSubmit={handleSubmit}>
          <button type="submit">🔎︎</button>
          <input 
          type="text"
          placeholder="Nome do produto"
          name="text"
          value={text}
          onChange={handleChange}
          />
          <button onClick={handleResetClick}>🗙</button>
        </form>
    );
}