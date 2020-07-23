var allQuestions = [{
    question: "",
    options: ["Please check this box to proceed."],
    answer: 0,
    explanation: ""
  }, {
    question: "Should you purchase a medical mask if you’re a non-medical professional?",
    options: ["Yes", "No"],
    answer: 1,
    explanation: "We should leave medical masks for the medical professionals, as they are in short supply."
  }, {
    question: "You don’t have a mask, but there is a pharmacy around the corner that sells them. What can I make a quick mask out of?",
    options: ["Underwear", "A scarf", "A t-shirt", "All of the above"],
    answer: 3,
    explanation: "Get any non-hazardous, opaque material as a quick alternative."
  }, {
    question: "If worn properly, which mask will keep you safe against the coronavirus?",
    options: ["N95", "Single-use Medical", "Fabric with filter","Fabric without Filter", "None of the Above"],
    answer: 4,
    explanation: "No mask fully protects you from the coronavirus."
  }, {
    question: "<img src='images/maskundernose.jpg'> This person is wearing her mask correctly.",
    options: ["True", "False"],
    answer: 1,
    explanation: "The mask must cover the nose or else it is pointless."
  },{
    question: "<img src='images/touchingmask.jpg'> What is wrong with this mask handling?",
    options: ["Nothing", "The mask is too low", "The user must not touch the front of the mask"],
    answer: 2,
    explanation: "Do not touch the front of the mask. Instead, handle the mask by its loops or the unfiltered top or bottom parts."
  },{
    question: "Worn properly, your N95 mask protects you from.. ",
    options: ["95% of hardest-to-capture particles", "95% of viruses", "95% of air pollution"],
    answer: 0,
    explanation: "Atleast 95% of micro particles are filtered out by the N95 mask."
  }, {
    question: "How many times should you wear a medical mask?",
    options: ["Once", "For a month", "Until it is visibly damaged"],
    answer: 0,
    explanation: "Medical masks are designed for single use. However, you can prolong its use by keeping the mask in an out-of-reach place for a day or two before using it again."
  },{
    question: "How do you test the level of protection a material provides?",
    options: ["How rough the material feels", "How well the material blocks light", "How long the material stays wet"],
    answer: 1,
    explanation: "The Light Test is used to discern the effectiveness of a material at blocking particles."
  },{
    question: "Are you completely safe if you go out with a mask?",
    options: ["Yes", "No"],
    answer: 1,
    explanation: "Masks do not fully protect you from viruses. In fact, if not used correctly and without taking the necessary precautions, masks can increase your risk to contract viruses."
  },{
    question: "I feel restricted when I breathe with mask means I’m wearing it incorrectly.",
    options: ["True", "False"],
    answer: 1,
    explanation: "Masks will probably feel uncomfortable at first and will take some time to get used to."
    }];

var quesCounter = 0;
var selectOptions = [];
var quizSpace = $('#quiz');
var showExplanation = true;
var correct = -1;

$(document).ready(function(){

  nextQuestion();
  
    
    $('#next').click(function () {
          chooseOption();
          if (isNaN(selectOptions[quesCounter])) 
          {
              alert('Please select an option.');
          } 
          else if (showExplanation === false){
            showExplanation = true;
            var explain = createExplanation(quesCounter);
            quizSpace.append(explain).fadeIn();

          }
          else 
          {
            quesCounter++;
            nextQuestion();
            showExplanation = false;
          }
      });

      $(document).on('keypress',function(e) {
        if(e.which == 13) {
            $('#next').click()
        }
    });
    
    $('#prev').click(function () 
      {
          chooseOption();
          quesCounter--;
          nextQuestion();
      });

    
    function createElement(index) 
      {
          var element = $('<div>',{id: 'question'});
          var header = $('<h2>Question No. ' + index + ' :</h2>');
          if (index > 0){
            element.append(header);
          }

          var question = $('<p>').append(allQuestions[index].question);
          element.append(question);

          var radio = radioButtons(index);
          element.append(radio);

          return element;
      }

    function createExplanation(index){
          var element = $('<div>',{id: 'explanation'});

          var mark = $('<span>',{class: 'bold'});
          if (selectOptions[index] === allQuestions[index].answer){
            mark.append('Correct. ');
            correct++;
          }
          else{
            mark.append('Incorrect. ');
          }
          element.append(mark);
 
          var explanation = $('<p>').append(allQuestions[index].explanation);
          element.append(explanation);

          return element;
    }
    
    function radioButtons(index) 
      {
          var radioItems = $('<ul>');
          var item;
          var input = '';
          for (var i = 0; i < allQuestions[index].options.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer" value=' + i + ' />';
            input += allQuestions[index].options[i];
            item.append(input);
            radioItems.append(item);
          }
          return radioItems;
    }
    
    function chooseOption() 
      {
          selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
      }
    
    function nextQuestion() 
      {
          quizSpace.fadeOut(function() 
              {

                $('#question').remove();
                $('#explanation').remove();
                if(quesCounter < allQuestions.length)
                  {
                      var nextQuestion = createElement(quesCounter);
                      quizSpace.append(nextQuestion).fadeIn();
                      if (!(isNaN(selectOptions[quesCounter]))) 
                      {
                        $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                      }
                      if(quesCounter === 1)
                      {

                        $('#prev').show();
                        $( "#warning" ).remove();
                        $( "#intro" ).remove();
                      } 
                      else if(quesCounter === 0)
                      {
                        $('#prev').hide();
                        $('#next').show();
                      }
                  }
                else 
                  {
                      var scoreRslt = displayResult();

                      quizSpace.append(scoreRslt).fadeIn();

                      quizSpace.append("<a class='link' href='/'> Return to homepage and review material</a> <br><br>");
                      quizSpace.append("<a class='link' href='https://app.effectivealtruism.org/funds/partners/biosecurity-and-pandemic-preparedness'> Donate to support COVID-19 relief</a>");
                      $('#prev').hide();
                      $('#next').hide();
                  }
          });
      }
    
    function displayResult() 
      {
          var score = $('<p>',{id: 'finalscore'});
          correct++;

          score.append('You scored ' + correct + ' out of ' + (allQuestions.length-1));

          return score;
    }
  })