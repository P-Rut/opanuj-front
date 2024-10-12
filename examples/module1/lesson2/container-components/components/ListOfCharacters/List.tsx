import CharacterCard from './CharacterCard';

function List({ character }: any) {
  return (
    <>
      <li key={character.id} className="flex flex-col items-center">
        <CharacterCard props={character} />
      </li>
    </>
  );
}

export default List;
