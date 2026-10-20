import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch()



  const submitHandler = (e)=>{
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{submitHandler(e)}} action="" className="flex gap-5 p-1">
        <input
        value={text}
        onChange={(e)=>{
            setText(e.target.value)
        }}

        required 
        className="border-2 px-4 py-2 rounded outline-none" 
        type="text" 
        placeholder="Search anything..." />

        <button className="active:scale-96 cursor-pointer border-2 px-4 py-2 rounded outline-none">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
