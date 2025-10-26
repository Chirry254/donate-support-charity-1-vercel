import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Replace this with your real publishable key
const stripePromise = loadStripe("51SKXXIAfaZDDJ43vTjQzkFJrF8qDPZAdH7moSgB5082qyhyEcD1HeLcR3UkRb0UdHH9ixFk75IKM0ctH6rO7MJxY00xQoxyfdQ");

export default function StripePayment() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    if (!amount || Number(amount) <= 0) return alert("Enter a valid amount.");
    setLoading(true);

    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(amount) }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      alert(`Payment initialized! (client secret: ${data.clientSecret})`);
    } catch (err: any) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Donate via Stripe</h2>
      <input
        type="number"
        placeholder="Enter amount (USD)"
        className="border p-2 rounded w-full mb-4"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={handleDonate}
        className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Processing..." : "Donate Now"}
      </button>
    </div>
  );
}
