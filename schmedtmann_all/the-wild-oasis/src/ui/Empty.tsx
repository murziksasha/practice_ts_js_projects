
interface IPropsEmpty {
  resource: string;
}

function Empty({ resource }: IPropsEmpty) {
  return <p>No {resource} could be found.</p>;
}

export default Empty;
