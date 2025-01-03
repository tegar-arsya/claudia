import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { TicketEntry } from "../redux/Slices/MyTicketSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BsDownload } from "react-icons/bs";
import jsPDF from "jspdf";
import QRCode from "qrcode";
const TransactionDetailPage = () => {
  const { tickets } = useSelector((state: any) => state.myTicket);
  const [data, setData] = useState<TicketEntry>();
  const location = useLocation();
  const token = location.pathname.split("/").at(-1);

  useEffect(() => {
    const filteredTicket = tickets.filter(
      (ticket: TicketEntry) =>
        ticket.token === parseInt(token as unknown as string)
    );
    if (filteredTicket) {
      setData(filteredTicket[0]);
    }
  }, [tickets, token]);

  const formatDate = (dateString?: Date | undefined) => {
    if (dateString) {
      const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "long",
        year: "numeric",
      };
      const date = new Date(dateString);
      const formattedDate = date.toLocaleDateString("en-US", options);
      return formattedDate;
    }
    return "-";
  };

  const downloadPDF = async() => {
    const doc = new jsPDF();
    
    // Set Background Color with a subtle gradient effect
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();
    
    // Create gradient background
    doc.setFillColor(255, 255, 255); // Warna putih
    doc.rect(0, 0, width, height, "F");
    
    // Add Logo
    try {
      const logoPath = "/cek.png";
      doc.addImage(logoPath, "PNG", width/2 - 20, 10, 40, 40, undefined, 'FAST');
    } catch (error) {
      console.error("Error loading logo:", error);
    }
    
    // Add Decorative Header Bar
    doc.setFillColor(51, 51, 153); // Deep blue color
    doc.rect(0, 55, width, 2, "F");
    
    // Add Heading
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor(51, 51, 153); // Matching blue color
    doc.text("Transaction Details", width/2, 70, {
      align: "center"
    });
    
    // Add subtle decorative elements
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(30, 75, width-30, 75);
    
    // Movie Details Section
    doc.setFillColor(240, 240, 245);
    doc.rect(10, 85, width-20, 50, "F");
    
    // Movie Name with icon-like bullet
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(51, 51, 51);
    doc.text(`• ${data?.movie.name}`, 15, 100);
    
    // Theater and Location Details with improved spacing
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    
    const detailsY = 120;
    const leftColumn = 15;
    // const rightColumn = width/2 + 10;
    
    // Left column details
    doc.text(`Theater:`, leftColumn, detailsY);
    doc.text(`Class:`, leftColumn, detailsY + 10);
    doc.text(`Date:`, leftColumn, detailsY + 20);
    
    // Right column details
    doc.setFont("helvetica", "bold");
    doc.text(`${data?.theater.theaterName}`, leftColumn + 35, detailsY);
    doc.text(`${data?.theater.dimensionCategory}`, leftColumn + 35, detailsY + 10);
    doc.text(`${formatDate(data?.date as unknown as Date)}`, leftColumn + 35, detailsY + 20);
    
    // Purchase Details Box with enhanced styling
    doc.setFillColor(245, 245, 250);
    doc.setDrawColor(51, 51, 153);
    doc.setLineWidth(1);
    doc.roundedRect(10, 155, width-20, 60, 3, 3, "FD");
    
    // Purchase Details Header
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(51, 51, 153);
    doc.text("Purchase Details", 15, 170);
    
    // Purchase Information
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    
    const purchaseY = 185;
    // Amount details with right alignment for numbers
    doc.text("Total Amount:", leftColumn, purchaseY);
    doc.text(`${data?.totalPrice}`, width-25, purchaseY, { align: "right" });
    
    doc.text("Discount:", leftColumn, purchaseY + 10);
    doc.text(`${data?.discount}`, width-25, purchaseY + 10, { align: "right" });
    
    doc.setFont("helvetica", "bold");
    doc.setTextColor(51, 51, 153);
    doc.text("Final Amount:", leftColumn, purchaseY + 20);
    doc.text(`${data?.finalAmount}`, width-25, purchaseY + 20, { align: "right" });
    
    // Footer with decorative elements
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(30, height-30, width-30, height-30);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(100, 100, 100);
    doc.text("Thank you for choosing NONTON-YUK!", width/2, height-20, {
      align: "center"
    });
    
    // QR Code (optional)
    try {
      const qrText = `${data?.token}-${data?.seat?.join(",")}`;
      const qrImage = await generateQR(qrText);
      doc.addImage(qrImage, "PNG", width-50, height-50, 40, 40);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
    
    // Save the PDF
    doc.save("nonton-yuk-ticket.pdf");
  };
  const generateQR = async (text: string) => {
    const dataUrl = await QRCode.toDataURL(text);
    const qrImage = new Image();
    qrImage.src = dataUrl;
    return qrImage;
};

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center font-bold text-xl mob-l:text-3xl sm:text-3xl md:text-4xl m-4 mob-l:m-8 mt-[5rem] mob-l:mt-[7rem]">
        Transaction Details
      </div>

      {/* MAIN CONTENT */}
      <div className="w-[16rem] mob-s:w-[17rem] mob-m:w-[20rem] mob-l:w-[25rem] min-[530px]:w-[32rem] sm:w-[38rem] md:w-[43rem] mx-auto m-3">
        <div className="flex flex-col h-70 p-10 bg-[--Royal-Blue] rounded-t-2xl">
          <p className="font-medium text-2xl text-[--Pastel-Yellow] py-4">
            {data?.movie.name}
          </p>

          <div className="flex flex-col mob-m:flex-row items-center w-full justify-between gap-x-5 mob-s:gap-x-8">
            <div className="w-full">
              <div className="flex flex-col my-4">
                <p className="text-[--Shade-400] text-sm font-medium">
                  Location
                </p>
                <p className="text-[--Shade-100] text-lg font-medium">
                  {data?.theater.theaterName}
                </p>
              </div>
              <div className="flex flex-col gap-y-5 min-[530px]:flex-row justify-between">
                <div>
                  <p className="text-[--Shade-400] text-sm font-medium">Date</p>
                  <p className="text-[--Shade-100] text-lg font-medium">
                    {formatDate(data?.date as unknown as Date)}
                  </p>
                </div>
                <div>
                  <p className="text-[--Shade-400] text-sm font-medium">Time</p>
                  <p className="text-[--Shade-100] text-lg font-medium">
                    {data?.time ?? ""}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <hr className="hidden mob-l:block w-[130px] h-[1px] bg-[--Shade-300] rounded-xl rotate-90" />
            </div>

            <div className="w-full">
              <div className="my-4">
                <p className="text-[--Shade-400]">Class</p>
                <p className="text-[--Shade-100]">
                  {data?.theater.dimensionCategory}
                </p>
              </div>
              <div>
                <p className="text-[--Shade-400]">Badge</p>
                <p className="text-[--Shade-100]">{data?.theater.badge}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[--Pastel-Yellow] h-70 p-10 flex flex-col gap-y-5 sm:flex-row rounded-b-2xl">
          <div className="w-full flex items-center gap-x-1 mob-s:gap-x-3 mob-m:gap-x-8">
            <div className="flex flex-col gap-y-3">
              <p className="font-medium text-lg">Token:</p>
              <p className="font-medium text-lg">Seats:</p>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="font-medium text-lg">{data?.token}</p>
              <div className="flex gap-2">
                {data?.seat?.map((chair: string, index: number) => (
                  <p key={index} className="font-medium text-lg">
                    {chair}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div
              className="border-2 rounded-lg border-black p-4 cursor-pointer"
              onClick={downloadPDF}
            >
              <BsDownload size={35} />
            </div>
          </div>
        </div>
      </div>

      {/* BILL SECTION */}
      <div className="w-56 mob-s:w-64 mob-m:w-72 mob-l:w-80 mx-auto my-8">
        <p className="font-medium text-lg mob-m:text-xl mob-l:text-2xl">
          Purchase Details
        </p>

        <div className="font-normal text-lg my-4">
          <div className="flex justify-between my-4">
            <div>
              <p className="my-2">Total Amount</p>
              <p>Discount</p>
            </div>

            <div>
              <p className="my-2">{`IDR. ${data?.totalPrice}`}</p>
              <div className="flex items-center justify-end">
                <p>-</p>
                <p>{data?.discount}</p>
              </div>
            </div>
          </div>

          <hr className="w-full my-4" />

          <div className="flex justify-between">
            <div>Final Amount</div>
            <div>IDR.{data?.finalAmount}</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TransactionDetailPage;
