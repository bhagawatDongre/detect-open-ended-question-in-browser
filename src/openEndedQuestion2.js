import React, { useEffect } from 'react';
import modalJson from './open_ended_question_bayes_classifier.json';
import natural from 'natural';

export const OpenEndedQuestion = () => {
  useEffect(() => {
    var restoredClassifier = natural.BayesClassifier.restore(modalJson);
    console.log(restoredClassifier.classify('what are you doing'));
  },[]);

  return (
    <div>Check in console log</div>
  )
}
