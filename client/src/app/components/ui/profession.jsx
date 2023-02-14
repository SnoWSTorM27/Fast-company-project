import React from "react";
import PropTypes from "prop-types";
import Loader from "../common/loader";
import { useSelector } from "react-redux";
import { getProfessionById, getProfessionsLoadingStatus } from "../../store/professions";

const Profession = ({ id }) => {
  const profession = useSelector(getProfessionById(id));
  const professionsLoading = useSelector(getProfessionsLoadingStatus());
  if (!professionsLoading) {
    return (
      <p>{ profession.name }</p>
    );
  } else return <Loader />;
};

Profession.propTypes = {
  id: PropTypes.string
};

export default Profession;
