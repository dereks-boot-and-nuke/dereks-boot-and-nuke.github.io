var conciousnessColors = new Object();
var conciousnessScale = {};

conciousnessScale[20] = "shame";
conciousnessScale[30] = "guilt";
conciousnessScale[50] = "apathy";
conciousnessScale[75] = "greif";
conciousnessScale[100] = "fear";
conciousnessScale[125] = "desire";
conciousnessScale[150] = "anger";
conciousnessScale[175] = "pride";
conciousnessScale[200] = "courage";
conciousnessScale[250] = "neutrality";
conciousnessScale[310] = "willingness";
conciousnessScale[350] = "acceptance";
conciousnessScale[400] = "reason";
conciousnessScale[500] = "love";
conciousnessScale[540] = "joy";
conciousnessScale[600] = "peace";
conciousnessScale[700] = "enlightenment";

conciousnessColors[0] = "ultraviolet";
conciousnessColors[125] = "blue";
conciousnessColors[250] = "cyan";
conciousnessColors[350] = "green";
conciousnessColors[500] = "yellow";
conciousnessColors[540] = "orange";
conciousnessColors[600] = "red";
conciousnessColors[700] = "magenta";
conciousnessColors[1000] = "infared";

conciousnessScale.FirstName = "Derek";

for(var key in conciousnessColors) {
    var value = conciousnessColors[key];
    // console.log(value);
}

for(var key in conciousnessScale) {
  var value = conciousnessScale[key];
  // console.log(value);
}

  // using indexer
var name = conciousnessScale["FirstName"];

// as property
var name = conciousnessScale.FirstName;

