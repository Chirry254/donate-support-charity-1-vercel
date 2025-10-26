import StripePayment from "./components/StripePayment";
import BitcoinPayment from "./components/BitcoinPayment";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Quick Gaza Donations</h1>
      <StripePayment />
      <BitcoinPayment />
    </main>
  );
}
