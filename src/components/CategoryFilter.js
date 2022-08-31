import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory, handleFilter }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => <button onClick={handleFilter} key={category}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
