import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextAreaField from "../form/textAreaField";
import { validator } from "../../../utils/validator";

function AddCommentsForm({ onSubmit }) {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const validatorConfig = {
    content: {
      isRequired: {
        message: "Сообщение не может быть пустым"
      }
    }
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const clearForm = () => {
    setData({});
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    onSubmit(data);
    clearForm();
  };

  return (
    <div>
      <h2>Новый комментарий</h2>
      <form onSubmit={handleSubmit} >
        <TextAreaField
          label="Текст комментария"
          name="content"
          value={data.content || ""}
          onChange={handleChange}
          error={errors.content}
        />
        <div className="d-flex justify-content-end">
          <button
            type="submit"
            disabled={!isValid}
            className="btn btn-primary"
          >Написать</button>
        </div>
      </form>
    </div>
  );
}
AddCommentsForm.propTypes = {
  onSubmit: PropTypes.func
};

export default AddCommentsForm;
