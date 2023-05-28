import React, { useState } from "react";
import Title from "../resource/Title";
import Input from "../forms/Input";

function Categories() {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState([]);

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title className="text-[40px]">Categories</Title>
      <div className="mt-5">
        <div className="flex gap-4 flex-1 items-center w-full">
          <Input
            placeholder="Add a new Category"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <button
            className="btn-primary"
            onClick={() => {
              setCategories([...categories, inputText]);
              setInputText("");
            }}
          >
            Add
          </button>
        </div>
        <div className="mt-10">
          {categories.map((category, index) => {
            return (
              <div className="flex justify-between mt-4" key={index}>
                <b className="text-xl">{category}</b>
                <button
                  className="btn-primary !bg-red-500"
                  onClick={() => {
                    setCategories(categories.filter((cat) => cat !== category));
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
