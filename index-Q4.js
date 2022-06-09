var physicsMarks=parseFloat(prompt("Enter the Marks Obtained in Physics: "));
var eachSubjectMarks=100;
if (physicsMarks>eachSubjectMarks){
    alert("You have entered invalid Physics Marks");
}
var chemistryMarks=parseFloat(prompt("Enter the Marks Obtained in Chemistry"));
if (chemistryMarks>eachSubjectMarks){
    alert("You have entered invalid Chemistry Marks");
}
var mathematicsMarks=parseFloat(prompt("Enter the Marks Obtained in Mathematics"));
if (mathematicsMarks>eachSubjectMarks){
    alert("You have entered invalid Mathematics Marks");
}
var totalMarks=300;
var totalObtainedMarks=physicsMarks+chemistryMarks+mathematicsMarks;
var percentageObtained=(totalObtainedMarks/totalMarks)*100;
if (percentageObtained>=80){
    alert("Marks Sheet\n" + "\n" +" Total Marks: "+totalMarks+"\n Marks Obtained: "+totalObtainedMarks+"\n Percentage: "+percentageObtained+"\n Grade: A-one \n Remarks: Excellent");
    
}
else if (percentageObtained>=70){
    alert("Marks Sheet\n"+"\n"+"Total Marks: "+totalMarks+"\n Marks Obtained: "+totalObtainedMarks+"\n Percentage: "+percentageObtained+"\n Grade: A \n Remarks: Good");
}
else if (percentageObtained>=60){
    alert("Marks Sheet\n"+ "\n"+ "Total Marks: "+totalMarks+"\n Marks Obtained: "+totalObtainedMarks+"\n Percentage: "+percentageObtained+"\n Grade: B \n Remarks: You need to improve");    
}
else {
    alert("Marks Sheet\n"+ "\n"+ "Total Marks: "+totalMarks+"\n Marks Obtained: "+totalObtainedMarks+"\n Percentage: "+percentageObtained+"\n Grade: Fail \n Remarks: Sorry");
}
