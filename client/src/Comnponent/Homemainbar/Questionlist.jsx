import React from 'react';
import Question from './Question';

const Questionlist = ({ questionlist }) => {
  return (
    <div>
      {questionlist.map((question) => (
        <Question question={question} key={question._id} />
      ))}
    </div>
  );
};

export default Questionlist;
