const calculate = () => {
  let listening = document.querySelector("#listening").value;
  let structure = document.querySelector("#structure").value;
  let reading = document.querySelector("#reading").value;

  let listening_true_score = parseFloat(listening);
  let structure_true_score = parseFloat(structure);
  let reading_true_score = parseFloat(reading);

  let l_conv_scores = new Array(24, 25, 26, 27, 28, 29, 30, 31, 32, 32, 33, 35, 37, 38, 39, 41, 41,
    42, 43, 44, 45, 45, 46, 47, 47, 48, 48, 49, 49, 50, 51, 51, 52, 52,
    53, 54, 54, 55, 56, 57, 57, 58, 59, 60, 61, 62, 63, 65, 66, 67, 68);
  let s_conv_scores = new Array(20, 20, 21, 22, 23, 25, 26, 27, 29, 31, 33, 35, 36, 37, 38, 40, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
    58, 60, 61, 63, 65, 67, 68);
  let r_conv_scores = new Array(21, 22, 23, 23, 24, 25, 26, 27, 28, 28, 29, 30, 31, 32, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 43, 44, 45, 46, 46, 47, 48, 48, 49, 50,
    51, 52, 52, 53, 54, 54, 55, 56, 57, 58, 59, 60, 61, 63, 65, 66, 67);

  let listening_converted_score = l_conv_scores[listening_true_score];
  let structure_converted_score = s_conv_scores[structure_true_score];
  let reading_converted_score = r_conv_scores[reading_true_score];

  let itp_score = Math.round(((listening_converted_score + structure_converted_score + reading_converted_score) / 3) * 10);

  if (listening == "" || structure == "" || reading == "") {
    document.querySelector("#your_itp_score").innerHTML
      = "Please enter all the fields";
  } else if (Number.isNaN(itp_score) == true) {
    document.querySelector("#your_itp_score").innerHTML
      = "You entered INVALID number of correct answers... <br> or.. maybe it is not even a number...";
  } else {
    document.querySelector(
      "#your_itp_score"
    ).innerHTML =
      ` Your TOEFL ITP score is ${itp_score}`;
  }
};
