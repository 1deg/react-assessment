import React, { useState, useEffect, useContext } from 'react';
import classes from './Assessments.module.scss';
import ODAS from '../../api/odas';
import {Container} from 'react-bootstrap';
const Assessments = () => {
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    fetchAssessments()
  }, []);

  const fetchAssessments = async () => {
    const data = await ODAS.get('assessments', { public: false });
    setAssessments(data.assessments || []);
  }

  return (
    <Container>
      <h1>Assessments</h1>
      {assessments.map((a) => {
        return (
          <div key={a.id}>
            { a.title }
          </div>
        )
      })}

    </Container>
  )
};

export default Assessments;