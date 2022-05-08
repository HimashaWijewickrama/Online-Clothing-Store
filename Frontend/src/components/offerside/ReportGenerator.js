import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGenerator = offer =>{

    const doc = new jsPDF();

    const tableColumn = ["Image","Offer ID","Product Name","Product Description","For Whom" ];
    const tableRows = [];

    offer.forEach(val => {
        const valData = [
            val.offer_image,
            val.offer_id,
            val.pro_name,
            val.description,
            val.for_whom
        ]

        tableRows.push(valData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("Data List of All Offers for this month",14,15);
    doc.save(`Offer_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGenerator;