import React, { useEffect, useState } from 'react';
import NaturalSynaptic from 'natural-synaptic';
import falseDataSet from './ai_dataset_false.json';
import trueDataSet from './ai_dataset_true.json';
import { shuffle } from 'lodash';

const QUESTIONS = ['did the tests pass?', 'did you buy a new drive?', 'What is the capacity?', 'Lets meet tomorrow?', 'I am talking'];

export const OpenEndedQuestion = () => {
  const [isOpenEndedQ, setIsOpenEndedQ] = useState([]);

  useEffect(() => {
    const trainData = [...falseDataSet, ...trueDataSet];
    const shuffledTrainData = shuffle(trainData).splice(0, 20);

    var classifier = new NaturalSynaptic();
    shuffledTrainData.forEach(({sentences, label})=> {
      classifier.addDocument(sentences, label);
    })
    classifier.train();

    const res = QUESTIONS.map((q) => {
      return { isOpenEnded: classifier.classify(q), q};
    });
    setIsOpenEndedQ(res);
  },[]);

  return (
    <div>{isOpenEndedQ.map((o)=> {
      return <div>{o.q}-{o.isOpenEnded}</div>
    })}</div>
  )
}
