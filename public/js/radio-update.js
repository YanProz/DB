$(".dropdown-menu .radio label").click(onRadioButtonClick);

function onRadioButtonClick(event) {
  var checkedInputs = $('input:checked');
  for (var i = 0; i < checkedInputs.length; i++) {
    var name = $(checkedInputs[i]).attr("name");
    if (!name) continue;
    $(".dropdown .value[data-name=" + name +"]").html($('input[name=' + name +']:checked').parent().text());
  }
}