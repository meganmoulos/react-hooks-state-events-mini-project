import React from "react";

function CategoryFilter({ categories, handleFilter, selectedCategory }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      
      {/* render <button> elements for each category here */}
      {categories.map((category) => <button onClick={() => handleFilter(category)} className={(selectedCategory === category) ? "selected" : ""} key={category}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
