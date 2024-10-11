import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// Load Stripe with your test publishable key
const stripePromise = loadStripe(
  "pk_test_51Q8lYFRuvudqWFNSKvK0JZWuZhPT8CAKAhv6TiB8keHsCW9YGRguCbgNagWN2BpDdlwyywCYoLAAIQ7QpQhGnmzQ0077iWlLsP"
);

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    setLoading(true); // Start loading

    // Simulate payment method creation
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false); // Stop loading on error
    } else {
      // Check the card number to simulate payment success/failure
      const last4 = paymentMethod.card.last4;
      let paymentOutcome = "success";

      // Simulate failures based on card number
      if (last4 === "9995") {
        paymentOutcome = "insufficient_funds"; // Insufficient Funds
      } else if (last4 === "0002") {
        paymentOutcome = "card_declined"; // Card Declined
      }

      // Simulate the result after a short delay
      setTimeout(() => {
        if (paymentOutcome === "success") {
          setPaymentSuccess(true);
          setErrorMessage("");

          // Mock payment details for successful payment
          setPaymentDetails({
            last4: paymentMethod.card.last4,
            amount: "49.99", // Test total price
            transactionId: "txn_1234567890", // Simulated transaction ID
          });
        } else if (paymentOutcome === "insufficient_funds") {
          setErrorMessage("Payment failed: Insufficient funds.");
          setPaymentSuccess(false);
        } else if (paymentOutcome === "card_declined") {
          setErrorMessage("Payment failed: Card was declined.");
          setPaymentSuccess(false);
        }
        setLoading(false); // Stop loading after delay
      }, 1500); // Simulate a 1.5-second delay
    }
  };

  return (
    <div className="flex justify-between space-y-10 space-x-10">
      {/* Payment Form */}
      <div className="w-2/3">
        <h2 className="text-xl font-semibold mb-4">Payment Gateway</h2>
        <p className="mb-4 text-gray-600">
          This is a simulation powered by the Stripe API. You can test it with
          any random card number, expiration date, CVV, and postal code.
        </p>

        {/* Test Card Information Section */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-md font-semibold mb-2">Test Card Information</h3>
          <p>Here are some test card numbers you can use:</p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Visa</strong>: 4242 4242 4242 4242
            </li>
            <li>
              <strong>MasterCard</strong>: 5555 5555 5555 4444
            </li>
            <li>
              <strong>American Express</strong>: 3782 822463 10005
            </li>
            <li>
              <strong>Discover</strong>: 6011 1111 1111 1117
            </li>
            <li>
              <strong>3D Secure (Authentication)</strong>: 4000 0027 6000 3184
            </li>
            <li>
              <strong>Insufficient Funds</strong>: 4000 0000 0000 9995
            </li>
            <li>
              <strong>Card Declined</strong>: 4000 0000 0000 0002
            </li>
          </ul>
          <p className="mt-4 text-gray-600">
            Use any future date for expiration and any three-digit CVV code.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <CardElement className="border p-2 mb-4" />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            disabled={!stripe || loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
          {errorMessage && (
            <div className="text-red-500 mt-4">{errorMessage}</div>
          )}
          {paymentSuccess && paymentDetails && (
            <div className="text-green-500 mt-4">
              <p>Payment Successful!</p>
              <p>Amount Charged: ${paymentDetails.amount}</p>
              <p>Card Ending: **** **** **** {paymentDetails.last4}</p>
              <p>Transaction ID: {paymentDetails.transactionId}</p>
            </div>
          )}
        </form>
      </div>

      {/* Checkout Section */}
      <div className="w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Checkout Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Test Item 1</span>
          <span>$29.99</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Test Item 2</span>
          <span>$19.99</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>$49.99</span>
        </div>
      </div>
    </div>
  );
};

const PaymentGateway = () => (
  <div className="container mx-auto my-10">
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  </div>
);

export default PaymentGateway;
