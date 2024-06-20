import React, { useState } from "react";
import "./product.scss";
import { IoChevronBack } from "react-icons/io5";
import { GrUpload } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import { IoMdAddCircle } from "react-icons/io";
import Productcontext from "../context/Productcontext";

const CreateProduct = () => {
  const { createFood } = Productcontext();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState("");
  const [newIngredient, setNewIngredient] = useState("");

  function sendNew() {
    let newDish = {
      name: name,
      category: category,
      price: price,
      ingredients: ingredients,
      description: description,
    };

    createFood(newDish);
  }

  const deleteIng = (ingredient) => {
    const newList = ingredients.filter((ing) => ing !== ingredient);
    setIngredients(newList);
  };

  const addIngredient = () => {
    if (newIngredient.trim() !== "") {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient("");
    }
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "newIngredient":
        setNewIngredient(value);
        break;
      default:
        break;
    }
  };

  return (
    <div id="create">
      <div className="container">
        <div className="create">
          <div className="create--back">
            <IoChevronBack className="icon" />
            <h1>Back</h1>
          </div>
          <h1>Add dish</h1>
          <div className="create--back__edit">
            <div className="edit1">
              <p>Image of the dish</p>
              <div className="div">
                <span>
                  <GrUpload />
                </span>
                <input
                  type="text"
                  placeholder="  Select image"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="edit2">
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={name}
                onChange={inputChange}
                placeholder="Ex.: Salada Ceasar"
              />
            </div>
            <div className="edit3">
              <p>Category</p>
              <select name="category" value={category} onChange={inputChange}>
                <option value="">Select category</option>
                <option value="Salad">Salad</option>
                <option value="Main Course">Main Course</option>
                <option value="Dessert">Dessert</option>
                <option value="Beverage">Beverage</option>
                <option value="Snack">Snack</option>
              </select>
            </div>
          </div>
          <div className="text">
            <h1>Ingredients</h1>
            <h1>Price</h1>
          </div>
          <div className="create--back__edit--ingredients">
            <div className="addIngredients">
              {ingredients.map((ingredient, el) => (
                <div key={el} className="ingredient">
                  <TiDeleteOutline
                    className="delete"
                    onClick={() => deleteIng(ingredient)}
                  />
                  <span>{ingredient}</span>
                </div>
              ))}
              <input
                type="text"
                name="newIngredient"
                value={newIngredient}
                onChange={inputChange}
                placeholder="Add ingredient"
              />
              <IoMdAddCircle className="add" onClick={addIngredient} />
            </div>
            <div className="price">
              <input
                type="text"
                name="price"
                value={price}
                onChange={inputChange}
                placeholder="R$ 00,00"
              />
            </div>
          </div>
          <div className="create--back__edit--ingredients__discribe">
            <h1>Description</h1>
            <textarea
              name="description"
              value={description}
              onChange={inputChange}
              className="bg"
              placeholder="Describe the dish"
            />
            <button onClick={sendNew}>Save editions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
