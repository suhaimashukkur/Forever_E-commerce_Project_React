import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { backend_url } from "../App";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backend_url + "/product/add",
        formData,
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        console.log(formData);
        setName("");
        setDescription("");
        setPrice("");
        setCategory("");
        setSubCategory("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      } else {
        toast.error(response.data.messsage);
      }
    } catch (error) {
      console.log(error);
      toast.error("Server Error");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="ml-8 mt-8 font-semibold text-[gray] text-xl">
          Upload Image
        </div>
        <div className="flex">
          <label className="border-dotted border-2 h-24 w-24 mt-3 ml-8 text-[gray] flex items-center justify-center cursor-pointer overflow-hidden">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage1(e.target.files[0])}
              hidden
            />
            {image1 ? (
              <img
                src={URL.createObjectURL(image1)}
                alt="preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-sm text-gray-500">Upload</span>
            )}
          </label>

          <label className="border-dotted border-2 h-24 w-24 mt-3 ml-8  text-[gray] pt-6 text-center cursor-pointer">
            <input
              type="file"
              onChange={(e) => setImage2(e.target.files[0])}
              id="image2"
              hidden
              multiple
            />
            upload
          </label>
          <label className="border-dotted border-2 h-24 w-24 mt-3 ml-8  text-[gray] pt-6 text-center">
            <input
              type="file"
              onChange={(e) => setImage3(e.target.files[0])}
              id="image3"
              hidden
            />
            upload
          </label>
          <label className="border-dotted border-2 h-24 w-24 mt-3 ml-8  text-[gray] pt-6 text-center">
            <input
              type="file"
              onChange={(e) => setImage4(e.target.files[0])}
              id="image4"
              hidden
            />
            upload
          </label>
        </div>
        <div className="ml-8 mt-8 font-semibold text-[gray] text-xl">
          Product Name
        </div>
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name"
            className="border-solid border-2 border-gray-300 h-10 w-96 mt-3 ml-8 text-gray-700 pt-2 pl-2"
          />
        </div>
        <div className="ml-8 mt-8 font-semibold text-[gray] text-xl">
          Product Description
        </div>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border-solid border-2 border-gray-300 h-16 w-96 mt-3 ml-8 text-gray-700 pt-2 pl-2"
        />

        <div className="flex">
          <div className="flex flex-col">
            <div className="ml-8 mt-6 font-semibold text-[gray] text-xl">
              Product Category
            </div>
            <div className="border-solid border-2 w-40 h-11   pl-3 pt-2 border-gray-300 ml-8 mt-8">
              <select
                className="font-medium text-m text-gray-500  text-center border-none outline-none"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="Men"> MEN</option>
                <option value="Women">WOMEN</option>
                <option value="kids">KIDS</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="ml-8 mt-6 font-semibold text-[gray] text-xl">
              {" "}
              SubCategory
            </div>
            <div className="border-solid border-2 w-40 h-11   pl-3 pt-2 border-gray-300 ml-8 mt-8">
              <select
                className="font-medium text-m text-gray-500 text-center border-none outline-none"
                onChange={(e) => setSubCategory(e.target.value)}
                value={subCategory}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="Top"> Top Wear</option>
                <option value="Bottom">Bottom Wear</option>
                <option value="kids">Winter Wear</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="ml-10 mt-6 font-semibold text-[gray] text-xl">
              Product Price
            </div>

            <input
              className="ml-10 mt-8 border-solid border-2 border-gray-300 w-40 h-11 pl-2"
              type="number"
              name="number"
              min="1"
              max="10000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="ml-8 mt-8 font-semibold text-[gray] text-xl">
          Product Sizes
        </div>
        <div className="flex">
          <button
            className={`border-solid border-2 w-14 h-10 text-center  items-center  bg-slate-300 ml-8 mt-5  ${
              sizes.includes("S") ? "border-gray-700" : ""
            }`}
            type="button"
            onClick={() =>
              setSizes((prev) =>
                prev.includes("S")
                  ? prev.filter((item) => item !== "S")
                  : [...prev, "S"]
              )
            }
          >
            S
          </button>
          <button
            className={`border-solid border-2 w-14 h-10 text-center  items-center  bg-slate-300 ml-8 mt-5  ${
              sizes.includes("M") ? "border-gray-700" : ""
            }`}
            type="button"
            onClick={() =>
              setSizes((prev) =>
                prev.includes("M")
                  ? prev.filter((item) => item !== "M")
                  : [...prev, "M"]
              )
            }
          >
            M
          </button>
          <button
            className={`border-solid border-2 w-14 h-10 text-center  items-center  bg-slate-300 ml-8 mt-5  ${
              sizes.includes("L") ? "border-gray-700" : ""
            }`}
            type="button"
            onClick={() =>
              setSizes((prev) =>
                prev.includes("L")
                  ? prev.filter((item) => item !== "L")
                  : [...prev, "L"]
              )
            }
          >
            L
          </button>
          <button
            className={`border-solid border-2 w-14 h-10 text-center  items-center  bg-slate-300 ml-8 mt-5  ${
              sizes.includes("XL") ? "border-gray-700" : ""
            }`}
            type="button"
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XL")
                  ? prev.filter((item) => item !== "XL")
                  : [...prev, "XL"]
              )
            }
          >
            XL
          </button>
          <button
            className={`border-solid border-2 w-14 h-10 text-center  items-center  bg-slate-300 ml-8 mt-5  ${
              sizes.includes("XXL") ? "border-gray-700" : ""
            }`}
            type="button"
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XXL")
                  ? prev.filter((item) => item !== "XXL")
                  : [...prev, "XXL"]
              )
            }
          >
            XXL
          </button>
        </div>
        <div className="flex">
          <input
            className="ml-8 mt-8"
            type="checkbox"
            checked={bestSeller}
            id="bestSeller"
            onChange={() => setBestSeller((prev) => !prev)}
          />
          <label className="mt-8 ml-8 font-extrabold text-[gray]">
            {" "}
            Add To Best Seller
          </label>
        </div>
        <button
          type="submit"
          className="bg-black text-[white] ml-8 mt-10 w-24 h-10 "
        >
          ADD
        </button>
      </form>
    </>
  );
};

export default Add;
