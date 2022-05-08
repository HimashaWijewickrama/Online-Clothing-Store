import jsPDF from 'jspdf';
import 'jspdf-autotable';

const reportPay = Payment =>{
    const payment = new jsPDF();

    const tableCol = ["ID", "Pay ID", "Payment Method", "Card Number","Card Holder", "Expiry Date", "CVC", "Total Revenue"];
    const tableRow = [];

    Payment.forEach(prod => {
        const payData =[
        prod.cusid,
        prod.payid,
        prod.paymethod,
        prod.cardnumber,
        prod.cardholdername,
        prod.expiry,
        prod.cvc,
        prod.totamount
        ]
        tableRow.push(payData);
    });
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    payment.autoTable(tableCol,tableRow,{startY:20});
    payment.text("All Payment List",14,15);
    payment.save(`Payment_${year}`+"_"+`${month}`+"_"+`${day}`+".pdf");
}
export default reportPay;