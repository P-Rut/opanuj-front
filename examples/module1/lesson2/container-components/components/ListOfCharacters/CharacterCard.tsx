function CharacterCard({ props }: any) {
  return (
    <>
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} />
    </>
  );
}

export default CharacterCard;
