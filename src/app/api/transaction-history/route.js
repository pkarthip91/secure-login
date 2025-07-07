export async function GET() {
  const transactionHistory = [
    {
      date: "24 Aug 2023",
      referenceId: "#8343434342",
      to: "Bloom Enterprise Sdn Bhd\nRecipient references will go here...",
      transactionType: "DuitNow payment",
      amount: "RM 1,200.00",
    },
    {
      date: "14 Jul 2023",
      referenceId: "#8343434342",
      to: "Muhammad Andy Asmawi\nRecipient references will go here...",
      transactionType: "DuitNow payment",
      amount: "RM 54,810.16",
    },
    {
      date: "12 Jul 2023",
      referenceId: "#8343434342",
      to: "Utilities Company Sdn Bhd\nRecipient references will go here...",
      transactionType: "DuitNow payment",
      amount: "RM 100.00",
    },
    {
      date: "01 Jul 2023",
      referenceId: "#8343434343",
      to: "Super Mart Retail\nGroceries payment",
      transactionType: "Card payment",
      amount: "RM 250.50",
    },
    {
      date: "28 Jun 2023",
      referenceId: "#8343434344",
      to: "Online Subscription Service\nMonthly Fee",
      transactionType: "Auto Debit",
      amount: "RM 50.00",
    },
    {
      date: "15 Jun 2023",
      referenceId: "#8343434345",
      to: "Local Cafe\nCoffee & Snacks",
      transactionType: "QR Pay",
      amount: "RM 25.00",
    },
  ];

  return new Response(JSON.stringify(transactionHistory), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
