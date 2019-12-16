$(document).ready(function() {
  $(".flashy").hover(
    function() {
      const colorChoices = [
        [189, 228, 227],
        [253, 197, 76],
        [64, 75, 105],
        [74, 154, 73],
        [0, 109, 150],
        [84, 149, 115],
        [229, 75, 37],
        [255, 248, 222],
        [234, 83, 38],
        [253, 197, 76]
      ];

      var pickAColor =
        colorChoices[Math.floor(Math.random() * colorChoices.length)];

      var color =
        "rgb(" +
        pickAColor[0] +
        "," +
        pickAColor[1] +
        "," +
        pickAColor[2] +
        ")";
      $(this).css("background-color", color);
    },
    function() {
      var formerColor = "rgb(197, 83, 71)";
      $(this).css("background-color", formerColor);
    }
  );
});
