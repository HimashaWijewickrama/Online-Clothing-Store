import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGen = Customer =>{

    const doc = new jsPDF();

    const tableColumn = ["First_Name","Last_Name","Email","Password"];
    const tableRows = [];

    Customer.forEach(user => {
        const userData = [
            user.fname,
            user.lname,
            user.cemail,
            user.cpassword
            
        ]

        tableRows.push(userData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("All Patients Registered List",14,15);
    doc.save(`Patient_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGen;