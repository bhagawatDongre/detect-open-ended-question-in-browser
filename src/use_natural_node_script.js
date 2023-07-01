var natural = require('natural');
const QUESTIONS = ['did the tests pass?', 'did you buy a new drive?', 'What is the capacity?', 'Lets meet tomorrow?', 'I am talking'];

natural.BayesClassifier.load('/Users/bhagawatdongre/work/detect-open-ended-question-in-browser/src/open_ended_question_bayes_classifier.json', null, function(err, classifier) {
  const res = QUESTIONS.map((q)=>classifier.classify(q));
  console.log(res);
});
