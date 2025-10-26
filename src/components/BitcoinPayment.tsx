export default function BitcoinPayment() {
  // Replace this with your Bitcoin address
  const btcAddress = "bc1p5rs7at8vz5nk2r0spcu8ydkpehyc4tr2h8g7n82mdx9qcmtfvegq0pn6p2";

  return (
    <div className="bg-yellow-50 p-6 rounded-xl shadow-md w-full max-w-md mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Donate with Bitcoin</h2>
      <p className="mb-2">Send Bitcoin to the address below:</p>
      <div className="bg-gray-100 p-3 rounded break-all font-mono text-sm mb-4">
        {btcAddress}
      </div>
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?data=${btcAddress}&size=200x200`}
        alt="BTC QR Code"
        className="mx-auto"
      />
    </div>
  );
}
