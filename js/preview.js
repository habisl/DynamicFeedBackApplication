/*
    Backend team implements the final version of this function.
    
    @return array of json elements with attributes:
        type            Type of the question
        questionBody    html content that shows the question content, headers, etc. Does not contain form elements, only the question.
*/
/*for multiple checkbox item*/
$(document).ready(function(){


          $('.to-uncheck').change(function(){
          $('.check').prop('checked', false);
          });

          $('.check').change(function(){
            $('.to-uncheck').prop('checked', false);
            });
});

getQuestions = function () {
    return JSON.parse(localStorage.getItem('questions'));    
}

/*
    Ville team implements the final version of this function.
*/
sendSubmission = function (questionAnswers) {
    localStorage.put('questionAnswers', JSON.stringify(questionAnswers));
}
/*
    This gets called when preview submit button is pressed. It collects the user's answers from all of the questions.
*/
collectQuestionAnswers = function () {    
    var allQuestions = $('div[data-question]'); // it selects the heading and questions only.
    for (var i = 0; i < allQuestions.length; ++i) {
        var currentQuestion = allQuestions.eq(i);
        // TODO create a answer collector for each question type:
    // getAnswerForYesNoQuestion(questionID)
    }
}



function sliderChangeHandler() {
    var a = $(this).parent().find('.currentValue').html($(this).val());
}



/*slider*/
function insertSlider(parent,questionObj, editable) {
    if((typeof(questionObj)!== 'object') && editable){
        questionObj = {
            type: 'rangeQuestion',
            question:'<h3 class="first-header">Range</h3><p>Type your question here?</p>'
        }
    }
    var newSlider = $(
        '<section id="for-slide" class ="rangeQuestion">' + '<div data-question>' + questionObj.question + '</div>' + '<div class="slider-rating">' +
        '<span>0</span><input class="points" type="range" min="0" max="10" value="0" /><span>10</span>' +
        '<article class="currentValue" style="margin-left:10%;">0</article>' +
            '</div>' + (editable ? '<button id="del-range" value="delete">Delete</button>' : '') + '</section>');

    newSlider.find('.points').change(sliderChangeHandler);
    parent.append(newSlider);

}

/*function for yes no questions*/
 function insertYesNo(elem, questionObj, editable) {
         if ((typeof (questionObj) !== 'object') && editable) {
             questionObj = {
                 type: 'yesNoQuestion',
                 question: '<h3 class="first-header">Select</h3><p>Would you like to take some other course from this teacher in the future?</p>'
             }
         }

         var itemID = $('.yesNoQuestion').length;
         elem.append(
                 '<section class="yesNoQuestion" id="yesNoDiv-' + itemID + '"><div data-question>' + questionObj.question + '</div>'
                 + '        <form>'
                 + '               <table><tr><td><input type="radio" name="radiog_dark" value="1" id="radio' + itemID + '_' + 6 + '" class="yes css-checkbox" />'
                 + '               <label for="radio' + itemID + '_' + 6 + '" class="css-label radGroup2">Yes</label>'
                 + '               </td><td><input type="radio" name="radiog_dark" value="2" id="radio' + itemID + '_' + 7 + '" class="no css-checkbox"><label for="radio' + itemID + '_' + 7 + '" class="css-label radGroup2">No</label>'
                 + '               </td><td><input type="radio" name="radiog_dark" value="3" id="radio' + itemID + '_' + 8 + '" class="maybe css-checkbox"><label for="radio' + itemID + '_' + 8 + '" class="css-label radGroup2">May be</label>'
                 + '               </td></td></tr></table>'
                 + '        </form>' + (editable ? '<button id="del-range" value="delete">Delete</button>' : '') + '</section>'
             );
     }

  /*function for inserting comment box*/

    function insertcommentbox(elem, questionObj,editable){   

      if ((typeof (questionObj) !== 'object') && editable) {
             questionObj = {
                 type: 'commentbox',
                 question: '<h3 class="first-header">comments</h3><p>Would you like to take some other course from this teacher in the future?</p>'
             }
         }
         $('.commentbox').length;
      elem.append('<section class="commentbox">'
        +'<div data-question>' + questionObj.question + '</div>'
        +'<form>'
        +'<textarea id="message" rows="4" cols="50" placeholder="Write if you have any comments...">'
        +'</textarea>'
        +'</form>'
        + (editable ? '<button id="del-range" value="delete">Delete</button>' : '')
        +'</section>'
          
        );
    }

 /*function for 3star rating choice question*/
     function insert3star(elem, questionObj, editable) {
        if((typeof(questionObj) !== 'object') && editable){
            questionObj = {
                type: '3starRating',
                question: '<h3 class="first-header">3star rating</h3><p>Type your question here</p>'
            }
        }
         var itemID = $('.3starRating').length;        
         elem.append(
                      '<section class="3starRating" id="3star-' + itemID +'"><div data-question>'+questionObj.question+'</div>'                            
                                      + '<form id="test">'
                                           + '<span class="star-cb-group">'
                                             + '<input type="radio" id="rating3' + itemID + '_' + 5 + '" class="threestar" name="rating" value="5" /><label class="rating5" for="rating3' + itemID + '_' + 5 + '" title="Very Satisfied"></label>'

                                            + '<input type="radio" id="rating3' + itemID + '_' + 6 + '" class="twostar" name="rating" value="3" /><label for="rating3' + itemID + '_' + 6 + '" class="rating3" title="Average"></label>'

                                              + '<input type="radio" id="rating3' + itemID + '_' + 7 + '" class="onestar" name="rating" value="1" /><label for="rating3' + itemID + '_' + 7 + '" class="rating1" title="Very Dissatisfied"></label>'
                                           + '</span>'
                                  + '</form>'
                                   + (editable ? '<button id="del-range" value="delete">Delete</button>' : '')                           
                      + '</section>'
                  );
     }
      /*function for 5star rating choice question*/
     function insert5star(elem, questionObj, editable) {
         if((typeof(questionObj) !== 'object') && editable){
            questionObj = {
                type: '5starRating',
                question: '<h3 class="first-header">5star rating</h3><p>Type your question here</p>'
            }
        }
         var itemID = $('.5starRating').length;         
         elem.append(
                      '<section class="5starRating" id="5star-'+itemID+'"><div data-question>'+questionObj.question+'</div>'                         
                              + '<form>'
                                      + ' <span class="star-cb-group">'
                                        + ' <input type="radio" id="rating5' + itemID + '_' + 1 + '" class="fivestar" name="rating" value="5" /><label class="rating5" for="rating5' + itemID + '_' + 1 + '" title="Very Satisfied"></label>'
                                        + ' <input type="radio" id="rating5' + itemID + '_' + 2 + '" class="fourstar" name="rating" value="4"/><label class="rating4" for="rating5' + itemID + '_' + 2 + '" title="Fairly Satisfied"></label>'
                                         + '<input type="radio" id="rating5' + itemID + '_' + 3 + '" class="threestar" name="rating" value="3" /><label for="rating5' + itemID + '_' + 3 + '" class="rating3" title="Average"></label>'
                                         + '<input type="radio" id="rating5' + itemID + '_' + 4 + '" class="twostar" name="rating" value="2" /><label for="rating5' + itemID + '_' + 4 + '" class="rating2" title="Fairly Dissatisfied"></label>'
                                          + '<input type="radio" id="rating5' + itemID + '_' + 5 + '" class="onestar" name="rating" value="1" /><label for="rating5' + itemID + '_' + 5 + '" class="rating1" title="Very Dissatisfied"></label>'
                                      + ' </span>'
                              + '</form>'
                           + (editable ? '<button id="del-range" value="delete">Delete</button>' : '') 
                      + '</section>'
                  );
     }

 /*function for multiple choice question*/
     function insertMultipleChoice(elem, questionObj, editable) {
        if((typeof(questionObj) !== 'object') && editable){
            questionObj = {
                type: 'multipleChoiceQuestion',
                question: '<h3 class="first-header">Multiple Choice</h3><p>Type your question here</p>'
            }
        }
         var itemID = $('.multipleChoiceQuestion').length;
         elem.append(
                     ' <section class="multipleChoiceQuestion" id="multipleChoice-'+itemID+'"><div data-question>'+questionObj.question+'</div>'             
                             
                                       + '<form>'
                                              + '<input id="check' + itemID + '_' + 1 + '"  type="checkbox" name="check1" value="check1" class="check input-checkboxitem">  '
                                              + '<label for="check' + itemID + '_' + 1 + '">Materials</label><br> <br>'

                                              + '<input id="check' + itemID + '_' + 2 + '"  type="checkbox" name="check2" value="check2" class="check input-checkboxitem"> '
                                              + '<label for="check' + itemID + '_' + 2 + '">Exam Method</label><br><br> '

                                              + '<input id="check3' + itemID + '_' + 3 + '"  type="checkbox" name="check3" value="check3" class="check input-checkboxitem"> '
                                              + '<label for="check3' + itemID + '_' + 3 + '">Learning Method</label><br><br> '

                                              + '<input id="check4' + itemID + '_' + 4 + '"  type="checkbox" name="check4" value="check4" class="check input-checkboxitem">'
                                              + '<label for="check4' + itemID + '_' + 4 + '">Evaluation</label><br><br> '

                                              + '<input id="check5' + itemID + '_' + 5 + '"  type="checkbox" name="check5" value="check5" class="check input-checkboxitem">'
                                              + '<label for="check5' + itemID + '_' + 5 + '">User Friendliness</label><br><br> '

                                              + '<input id="check6' + itemID + '_' + 6 + '"  type="checkbox" name="check6" value="check6" class="to-uncheck input-checkboxitem">'
                                              + '<label for="check6' + itemID + '_' + 6 + '">None</label>'
                                      + '</form>'
                                       + (editable ? '<button id="del-range" value="delete">Delete</button>' : '')        
                         
                      + '</section>'
              );
     }

    

  function saveAnswers(){
         var answers = []; 
         var answerElements = $('section.yesNoQuestion, section.3starRating, section.5starRating, section.multipleChoiceQuestion, section.rangeQuestion, section.commentbox');

         for(var i=0; i<answerElements.length; ++i){
            var current = answerElements.eq(i);
            var quesans = current.attr('class');
            
              switch(quesans){
                 case 'yesNoQuestion':
                  var yes = current.find('input.yes');
                  var no = current.find('input.no');
                  var maybe = current.find('input.maybe');
                  var answer = null;
                  if (yes[0].checked)answer = 'yes';                  
                  if (no[0].checked)answer = 'no';                 
                  if (maybe[0].checked)answer = 'maybe';                  
                  break;

                  case '3starRating':
                  var onestar = current.find('input.onestar');
                  var twostar = current.find('input.twostar');
                  var threestar = current.find('input.threestar');
                  var answer = null;
                  if(onestar[0].checked) answer = 'onestar';
                  if(twostar[0].checked) answer = 'twostar';
                  if(threestar[0].checked) answer = 'threestar';                 
                  break;

                  case '5starRating':
                  var onestar = current.find('input.onestar');
                  var twostar = current.find('input.twostar');
                  var threestar = current.find('input.threestar');
                  var fourstar = current.find('input.fourstar');
                  var fivestar = current.find('input.fivestar');
                  var answer = null;
                  if(onestar[0].checked) answer = 'onestar';
                  if(twostar[0].checked) answer = 'twostar';
                  if(threestar[0].checked) answer = 'threestar';
                  if(fourstar[0].checked) answer = 'fourstar';
                  if(fivestar[0].checked) answer = 'fivestar';                  
                  break;

                  case 'multipleChoiceQuestion':                 
                  var answer = current.find('input:checked').map(function(i,el){return el.name;}).get();                  
                  break;

                  case 'rangeQuestion':
                  var answer = current.find('.points').val();                  
                  break; 

                  case 'commentbox':
                  var answer = current.find('#message').val();                  

              }
              answers.push(answer);
         }
          localStorage.setItem('answers', JSON.stringify(answers));
      }

function renderPreviewPage() { 
    // Get questions
    var questions = getQuestions();    
    //$('body').append(JSON.stringify(questions));

    for (var item in questions) {
        var current = questions[item];

        if (current.type === 'yesNoQuestion') insertYesNo($('#main'), current, false);
        if (current.type === '3starRating') insert3star($('#main'), current, false);
        if (current.type === 'multipleChoiceQuestion') insertMultipleChoice($('#main'), current, false);
        if (current.type === '5starRating') insert5star($('#main'), current, false);
        if (current.type === 'rangeQuestion') insertSlider($('#main'), current, false);
        if (current.type === 'commentbox') insertcommentbox($('#main'), current, false);          
    }

     $('#send-preview').click(function(){
          saveAnswers();
     });    

}

function main() {
    var editable = $('body').attr('data-editable') === "true";

    if (!editable) { // On preview page
        renderPreviewPage();
    }
    else { // On edit page
        renderEditPage();
    }
    
}
main();
