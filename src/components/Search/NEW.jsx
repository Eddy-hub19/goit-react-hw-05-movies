import { Movies } from 'Pages/Movies/Movies';
import { useRef, useState } from 'react';
import { Search } from './Search';

// Це те,що я пробував: воно не працює чомусь)) хоча вроді все прававильно в SearchBox повторював за Репетою тим прикладо,що в конспекті

export const NEW = () => {
  const [query, setQuery] = useState('');

  const inputEL = useRef(null);

  const handleChange = e => {
    e.preventDefault();
    const data = inputEL.current.value;
    if (data === '') {
      return ('Пуста строка! явно потрібно додати щось ще!');
    }
    return setQuery(data);
  };

  return (
    <>
      <Search handleChange={handleChange} inputEL={inputEL} />
      <Movies query={query}/>
    </>
  );
};
