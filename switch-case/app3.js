//its just for grasping the concept

let subject = prompt(
    "Welcome to TYT Total Score Calculator!\n" +
    "1 - Calculate your Total Score\n" +
    "2 - Exit.\n"
);

let finalScore = 0;


switch (subject) {
    case "1":
        let gradePointAverage = Number (prompt("Enter your Grade point average: "))
        let correct1 = Number(prompt("Enter the number of correct answers in the Turkish Subject: "));
        let incorrect1 = Number(prompt("Enter the number of incorrect answers in the Turkish Subject: "));
        let correct2 = Number(prompt("Enter the number of correct answers in the Math Subject: "));
        let incorrect2 = Number(prompt("Enter the number of incorrect answers in the Math Subject: "));
        let correct3 = Number(prompt("Enter the number of correct answers in the Science Subject: "));
        let incorrect3 = Number(prompt("Enter the number of incorrect answers in the Science Subject: "));
        let correct4 = Number(prompt("Enter the number of correct answers in the Social Studies Subject: "));
        let incorrect4 = Number(prompt("Enter the number of incorrect answers in the Social Studies Subject: "));

        if (correct1 >= 0 && incorrect2 >= 0 && correct2>=0 &&incorrect2>=0 &&correct3>=0 && incorrect3 >=0 && correct4>=0 && incorrect4 >=0&& gradePointAverage>=0) {
            net1 = correct1 - (incorrect1/4);
            net2 = correct2 - (incorrect2/4);
            net3 = correct3 - (incorrect3/4);
            net4 = correct4 - (incorrect4/4);
        
        } else {
            alert("Please enter valid numbers for correct and incorrect answers and the grade point average.");
        }
        totalScore1 = net1 * 1.8 ;
        alert("Subject: Turkish\nNet: " + net1 + "\nScore: " + totalScore1);
        

    
        totalScore2 = net2 * 1.8;
        alert("Subject: Math\nNet: " + net2 + "\nScore: " + totalScore2);
       

    
        totalScore3 = net3 * 1.7 ;
        alert("Subject: Science\nNet: " + net3 + "\nScore: " + totalScore3);
       

    
        totalScore4 = net4 * 1.6 ;
        alert("Subject: Social Studies\nNet: " + net4 + "\nScore: " + totalScore4);
       
        finalScore = totalScore1 + totalScore2 + totalScore3 + totalScore4 + gradePointAverage + 100;
        alert(" Score on TYT : " + finalScore )
        break;

    case "2": 
        alert("Goodbye!");
    default:
        alert("Invalid selection.");
        break;
}
