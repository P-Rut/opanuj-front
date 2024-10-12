import CharacterList from '../components/ListOfCharacters/CharacterList';
import GenderInput from '../components/SearchForm/GenderInput';
import NameInput from '../components/SearchForm/NameInput';
import SortByInput from '../components/SearchForm/SortByInput';
import SearchTitle from '../components/SearchTitle';

import useSearch from '../customHooks/useSearch';
import useSort from '../customHooks/useSort';

function CharacterSearchContainer() {
  const { name, setName, setGender, gender, characters } = useSearch();
  const { sortedCharacters, sortOption, setSortOption } = useSort(characters);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle />
      <div className="pt-8" />
      <form className="space-x-4 flex items-end justify-center">
        <NameInput value={name} setValue={setName} />
        <GenderInput value={gender} setValue={setGender} />
        <SortByInput value={sortOption} setValue={setSortOption} />
      </form>
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
