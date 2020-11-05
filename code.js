onEvent("button1", "click", function(Add) {
  setText("Result", getText("text_input1") + getText("text_input2"));
});
onEvent("button2", "click", function(subtract) {
  setText("Result", getText("text_input1") - getText("text_input2"));
});
onEvent("button3", "click", function(Multiply) {
  setText("Result", getText("text_input1") * getText("text_input2"));
});
onEvent("button4", "click", function(Divide) {
  setText("Result", getText("text_input1") / getText("text_input2"));
});
