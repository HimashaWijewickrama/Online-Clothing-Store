import jsPDF from 'jspdf';
import 'jspdf-autotable';

const reportProd = Product =>{
    const product = new jsPDF();

    const tableCol = ["ID", "Clothe Name", "Clothe Description", "Price", "Category", "Size", "Image"];
    const tableRow = [];

    Product.forEach(prod => {
        const productData =[
        prod.clothe_id,
        prod.clothe_name,
        prod.clothe_desc,
        prod.price,
        prod.clothe_cate,
        prod.size,
        prod.image
        ]
        tableRow.push(productData);
    });
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    product.autoTable(tableCol,tableRow,{startY:20});
    product.text("All Product List",14,15);
    product.save(`Products_${year}`+"_"+`${month}`+"_"+`${day}`+".pdf");
}
export default reportProd;