import React from "react";

function CategoryFilter({categories, handleClick, selected}) {
  const btn = categories.map((category) =>{
    const btnClass = category === selected ? "selected" : "";
    return (
    <button 
            className={btnClass} 
            onClick={(() => handleClick(category))} 
            key={category}>{category}
    </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {btn}
    </div>
  );
}

export default CategoryFilter;
