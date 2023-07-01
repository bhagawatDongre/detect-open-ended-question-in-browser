const formatMemoryUsage = (data) => `${Math.round(data / 1024 / 1024 * 100) / 100} MB`;
const memoryData = process.memoryUsage();

const memoryUsage = {
  rss: `${formatMemoryUsage(memoryData.rss)} -> Resident Set Size - total memory allocated for the process execution`,
  heapTotal: `${formatMemoryUsage(memoryData.heapTotal)} -> total size of the allocated heap`,
  heapUsed: `${formatMemoryUsage(memoryData.heapUsed)} -> actual memory used during the execution`,
  external: `${formatMemoryUsage(memoryData.external)} -> V8 external memory`,
};

console.log(memoryUsage);

const falseDataSet = require('./ai_dataset_false.json');
const trueDataSet = require('./ai_dataset_true.json');
const { shuffle } = require('lodash');
var natural = require('natural');
var classifier = new natural.BayesClassifier();

const QUESTIONS = ['did the tests pass?', 'did you buy a new drive?', 'What is the capacity?', 'Lets meet tomorrow?', 'I am talking'];

const trainData = [...falseDataSet, ...trueDataSet];
const shuffledTrainData = shuffle(trainData);

shuffledTrainData.forEach(({sentences, label})=> {
  classifier.addDocument(sentences, label);
})

classifier.train();

classifier.save('open_ended_question_bayes_classifier.json', function(err, classifier) {});
const res = QUESTIONS.map((q) => {
  return { isOpenEnded: classifier.classify(q), q};
});

console.log(res);

const memoryUsage1 = {
  rss: `${formatMemoryUsage(memoryData.rss)} -> Resident Set Size - total memory allocated for the process execution`,
  heapTotal: `${formatMemoryUsage(memoryData.heapTotal)} -> total size of the allocated heap`,
  heapUsed: `${formatMemoryUsage(memoryData.heapUsed)} -> actual memory used during the execution`,
  external: `${formatMemoryUsage(memoryData.external)} -> V8 external memory`,
};

console.log(memoryUsage1);
