
      var userValueEng = Number(prompt("Enter your English Value :"));
      var userValueMath = Number(prompt("Enter your Math Value :"));
      var userValuePhy = Number(prompt("Enter your Physics Value :"));
      var userValueChe = Number(prompt("Enter your Chemistry Value :"));
      var userValueUrdu = Number(prompt("Enter your Urdu Value :"));

      if (
        userValueEng <= 100 &&
        userValueMath <= 100 &&
        userValuePhy <= 100 &&
        userValueChe <= 100 &&
        userValueUrdu <= 100
      ) {
        var totalObtainNumber =  userValueChe +
        userValueEng +
        userValueMath +
        userValuePhy +
        userValueUrdu;
      //   Math.ceil(2);
      //   Math.floor(2);
      //   Math.round(2);
      var result = (totalObtainNumber / 500) * 100;
      if (result <= 100 && result >= 90) {
        alert("Congratulations! YOUR GRADE IS : A++" + result + "%");
      } else if (result < 90 && result >= 80) {
        alert("Congratulations! YOUR GRADE IS : A one" + result + "%");
      } else if (result < 80 && result >= 70) {
        alert("Congratulations! YOUR GRADE IS : A" + result + "%");
      } else if (result < 70 && result >= 60) {
        alert("YOUR GRADE IS : B" + result + "%");
      } else {
        alert("SORRY ! Your Are Failed.. ");
      }
    } else {
      alert(" You Insert wrong value ! Kindly try again carefully..");
    }

    //   var grade;
    //   if (userValue < 100) {
    //     if (userValuePer > 49 || userValuePer <= 59) {
    //       grade = "C";
    //       console.log("your grade is :" + grade);
    //     }
    //   } else {
    //     console.log("more than the subject total marks");
    //   }

    var studentsData = ["ahmer", 26];
  