function startClassification()
{
navigator.mediaDevices.getUserMedia({audio : true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1-f6naXr4/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults()
{
    console.log('gotResults');
}