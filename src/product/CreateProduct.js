import React from "react";
import "./product.scss";
import { IoChevronBack } from "react-icons/io5";
import { GrUpload } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import { IoMdAddCircle } from "react-icons/io";

const CreateProduct = () => {
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
                <button>Select image</button>
              </div>
            </div>
            <div className="edit2">
              <p>Name</p>
              <input
                type="      "
                placeholder="           Ex.: Salada Ceasar"
              />
            </div>
            <div className="edit3">
              <p>Category</p>
              <select>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
          </div>
          <div className="text">
            <h1>Ingredients</h1>
            <h1>Price</h1>
          </div>
          <div className="create--back__edit--ingredients">
            <div className="addIngredients">
              <TiDeleteOutline className="delete" />
              <button>Bread</button>
              <IoMdAddCircle className="add" />
              <button>Add</button>
            </div>
            <div className="price">
              <button>R$ 00,00</button>
            </div>
          </div>
          <div className="create--back__edit--ingredients__discribe">
            <h1>Discribe</h1>
            <div className="bg"></div>
            <button>Save editions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
