

import { Search } from "lucide-react";
const SearchForm = ({ state,setState,handleSubmit }) => {


  return (
    <div className="flex bg-[#03346E] p-2 rounded-md w-full " >
      <input
        name="query"
        defaultValue={state}
        onChange={(e)=>setState(e.target.value)}
        className="border border-1 w-full h-10 rounded-md p-2"
        placeholder="Search "
      />
      <div className="flex ">

        <button onClick={handleSubmit}  className="hover:bg-slate-600 p-2 ml-2 rounded-md bg-white text-bg-[#4f5691] ">
          <Search className="size-5"/>
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
