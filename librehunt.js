function optionSelected(optionName) {
  var option = document.getElementsByName(optionName);
  for (var i = 0, length = option.length; i < length; i++)
  {
   if (option[i].checked)
   {
    // return option
    return (option[i].value);

    // stop checking if found already
    break;
   }
  }
}
function distro(){
  // value = value
  linuxexpertise = optionSelected("linuxexpertise");
  oldnew = optionSelected("oldnew");
  updates = optionSelected("updates");
  lookalike = optionSelected("lookalike");
  touch = optionSelected("touch");
  secure = optionSelected("secure");
  popularity = optionSelected("popularity");
  customtweaks = optionSelected("customtweaks");
  // get list of list of distros
  // shuffle the lists inside the list (order of distros)

  // this will be the order of user input, and distro output
  //UserOptions=[technicalexpertise,oldnew,notrolling,lookalike,touch,secure,popularity,customtweaks];
  // empty array for selected distros
  SelectedDistros = []
}
