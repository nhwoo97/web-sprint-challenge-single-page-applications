import React from "react";
import { Link } from "react-router-dom";



export default function Order(props) {
  const {
    values,
    submit,
    inputChange,
    checkboxChange,
    disabled,
    errors,
  } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    checkboxChange(name, checked);
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  return (
    <div>
      <Link to="/">
        <h1>HOME</h1>
      </Link>
      <form className="form" onSubmit={onSubmit}>
        <div>{errors.username}</div>
        <div>{errors.address}</div>
        <div>{errors.size}</div>
        <div>{errors.topping}</div>
        <h1>Make your own Pizza</h1>
        <label>
          <h3>User Name</h3>
          <input
            value={values.username}
            onChange={onInputChange}
            name="username"
            type="text"
          />
        </label>
        <label>
          <h3>Address</h3>
          <input
            value={values.address}
            onChange={onInputChange}
            name="address"
            type="text"
          />
        </label>

        <label>
          <h3>Pizza Size</h3>
          <select onChange={onInputChange} value={values.size} name="size">
            <option value="">- Select an option -</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

        {/* checkbox */}
        <div>
          <h3>Choose your topping </h3>
          <label>
            pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={values.topping.pepperoni === true}
              onChange={onCheckboxChange}
            />
          </label>

          <label>
            cheese
            <input
              type="checkbox"
              name="cheese"
              checked={values.topping.cheese === true}
              onChange={onCheckboxChange}
            />
          </label>

          <label>
            bacon
            <input
              type="checkbox"
              name="bacon"
              checked={values.topping.bacon === true}
              onChange={onCheckboxChange}
            />
          </label>

          <label>
            pineapple
            <input
              type="checkbox"
              name="pineapple"
              checked={values.topping.pineapple === true}
              onChange={onCheckboxChange}
            />
          </label>
          <label>
            {" "}
            chicken
            <input
              type="checkbox"
              name="chicken"
              checked={values.topping.chicken === true}
              onChange={onCheckboxChange}
            />
          </label>
          <label>
            black olives
            <input
              type="checkbox"
              name="blackolives"
              checked={values.topping.blackolives === true}
              onChange={onCheckboxChange}
            />
          </label>
        </div>

        <label>
            <h3>Gluten Free?</h3>
            <input
                type="checkbox"
                name='glutenfree'
                checked={values.topping.glutenfree === true}
                onChange={onCheckboxChange}
            >
            </input>
        </label>

        <label htmlFor="special">
          <h3>Special Instructions</h3>
        </label>
        <textarea
          name="special"
          id="special"
          type="text"
          onChange={onInputChange}
          value={values.special}
        />
        <button disabled={disabled}>Add to Order</button>
      </form>
    </div>
  );
}
