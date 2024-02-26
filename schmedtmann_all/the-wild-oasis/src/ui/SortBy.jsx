import { useSearchParams } from "react-router-dom"
import Select from "./Select"

function SortBy({options}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';

  const handleChange = (e) => {
    const target = e.target;
    searchParams.set('sortBy', target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select 
      options={options} 
      type='white' 
      onChange={handleChange}
      value={sortBy}
    />
  )
}

export default SortBy
