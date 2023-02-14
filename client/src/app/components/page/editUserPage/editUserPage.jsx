import React, { useState, useEffect } from "react";
import TextField from "../../common/form/textField";
import { validator } from "../../../utils/validator";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultySelectField from "../../common/form/multiSelectField";
import Loader from "../../common/loader";
import { useSelector, useDispatch } from "react-redux";
import { getQualities, getQualitiesLoadingStatus } from "../../../store/qualities";
import { getProfessions, getProfessionsLoadingStatus } from "../../../store/professions";
import { getCurrentUserData, updateUserData } from "../../../store/users";
import { useHistory } from "react-router-dom";

function EditUserPage() {
  const [data, setData] = useState();
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(true);
  const qualities = useSelector(getQualities());
  const qualitiesLoaidng = useSelector(getQualitiesLoadingStatus());
  const professions = useSelector(getProfessions());
  const professionsLoading = useSelector(getProfessionsLoadingStatus());
  const currentUser = useSelector(getCurrentUserData());
  const dispatch = useDispatch();

  const professionsList = professions.map((professionName) => ({
    label: professionName.name,
    value: professionName._id
  }));

  const qualitiesList = qualities.map((optionName) => ({
    label: optionName.name,
    value: optionName._id
  }));

  function getQualitiesById(qualitiesId) {
    const qualitiesArr = [];
    for (const qualityId of qualitiesId) {
      for (const quality of qualities) {
        if (quality._id === qualityId) {
          qualitiesArr.push(quality);
          break;
        }
      }
    }
    return qualitiesArr;
  }
  const transformData = (data) => {
    const result = getQualitiesById(data).map((quality) => ({
      label: quality.name,
      value: quality._id
    }));
    return result;
  };

  useEffect(() => {
    if (!qualitiesLoaidng && !professionsLoading && currentUser && !data) {
      setData({
        ...currentUser,
        qualities: transformData(currentUser.qualities)
      });
    }
  }, [qualitiesLoaidng, professionsLoading, currentUser, data]);

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Имя Фамилия обязательны для заполнения"
      }
    },
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения"
      },
      isEmail: {
        message: "Email введён некорректно"
      }
    },
    profession: {
      isRequired: {
        message: "Обязательно выберите вашу профессию"
      }
    }
  };

  useEffect(() => {
    if (data && isLoading) setLoading(false);
  }, [data]);

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const history = useHistory();
  // const goToUserPage = () => {
  //   history.push(`/users/${currentUser._id}`);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const newData = {
      ...data,
      qualities: data.qualities.map(q => q.value)
    };
    dispatch(updateUserData(newData));
    // goToUserPage();
  };
  return (
    <div className="container mt-5">
      <button
        className="btn btn-primary"
        onClick={() => history.goBack()}
      >
        <i className="bi bi-caret-left"></i>
        Назад
      </button>
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {!isLoading && Object.keys(professions).length > 0 ? (
            <form onSubmit={handleSubmit} >
              <TextField
                label="Имя Фамилия"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
              />
              <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
              />
              <SelectField
                label="Выберите вашу профессию"
                defaultOption="Выбор..."
                options={professionsList}
                value={data.profession}
                onChange={handleChange}
                error={errors.profession}
                name="profession"
              />
              <RadioField
                options={[{ name: "муж.", value: "male" }, { name: "жен.", value: "female" }, { name: "другое", value: "other" }]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Выберите ваш пол"
              />
              <MultySelectField
                options={qualitiesList}
                onChange={handleChange}
                defaultValue={data.qualities}
                name="qualities"
                label="Выберите ваши качества"
              />
              <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
              >Обновить</button>
            </form>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}

export default EditUserPage;
