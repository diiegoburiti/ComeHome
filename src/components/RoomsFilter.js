import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
//get all unque values from data
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    min,
    Size,
    maxSize,
    breakfast,
    pets,
  } = context;
  //get unique types
  let types = getUnique(rooms, "type");
  //add all
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/*select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            className="form-control"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end selectt type*/}
      </form>
    </section>
  );
}
