$(document).ready(function(){
  const buttonArray = $("button");
  const symbolArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '%']

  for(let i = 0; i < buttonArray.length - 2; i++){
    $(buttonArray[i]).click(function(){
      $(".field").val($(".field").val() + symbolArray[i]);
    })
  }

  $("#bEq").click(function(){
    var firstTerm = "";
    var secondTerm = "";
    var operation;
    var operator = false;
    var expression = $(".field").val();
    for(let i = 0; i < expression.length; i++){
      if(expression[i] == '+' || expression[i] == '-' || expression[i] == '*' || expression[i] == '/' || expression[i] == '%'){
        operator = true;
        operation = expression[i];
      }
      else if(operator == false){
        firstTerm += expression[i];
        console.log(firstTerm);
      }
      else{
        secondTerm += expression[i];
        console.log(secondTerm);
      }
      console.log(parseInt(firstTerm));
      console.log(parseInt(secondTerm));
    }

    if(operation == '+')
      $(".field").val(parseInt(firstTerm) + parseInt(secondTerm));
    if(operation == '-')
      $(".field").val(parseInt(firstTerm) - parseInt(secondTerm));
    if(operation == '*')
      $(".field").val(parseInt(firstTerm) * parseInt(secondTerm));
    if(operation == '/')
      $(".field").val(parseInt(firstTerm) / parseInt(secondTerm));
    if(operation == '%')
      $(".field").val(parseInt(firstTerm) % parseInt(secondTerm));
  });

  $("#clear").click(function(){
    $(".field").val("");
  })
})
