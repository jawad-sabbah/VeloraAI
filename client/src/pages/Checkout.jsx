import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Landmark } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState("card");

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">

        {/* LEFT SIDE */}
        <div className="flex-1 p-10 md:p-16">

          <h1 className="text-2xl font-black text-[#5850EC] mb-12 uppercase tracking-tight">
            Checkout
          </h1>

          {/* Payment Methods */}
          <div className="space-y-5 mb-10">

            {/* Card Option */}
            <div
              onClick={() => setMethod("card")}
              className={`p-6 rounded-2xl border cursor-pointer transition-all
              ${method === "card"
                ? "border-[#5850EC] bg-indigo-50"
                : "border-gray-200 hover:border-gray-300"}`}
            >
              <div className="flex items-center gap-4">
                <CreditCard />
                <div>
                  <h2 className="font-bold">Pay with Card</h2>
                  <p className="text-sm text-gray-500">
                    Visa / Mastercard (International)
                  </p>
                </div>
              </div>
            </div>

            {/* Bank Option */}
            <div
              onClick={() => setMethod("bank")}
              className={`p-6 rounded-2xl border cursor-pointer transition-all
              ${method === "bank"
                ? "border-[#5850EC] bg-indigo-50"
                : "border-gray-200 hover:border-gray-300"}`}
            >
              <div className="flex items-center gap-4">
                <Landmark />
                <div>
                  <h2 className="font-bold">Bank Transfer</h2>
                  <p className="text-sm text-gray-500">
                    Lebanon USD Fresh Transfer
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Static Info Section */}
          {method === "card" && (
            <div className="bg-gray-50 p-6 rounded-xl text-sm text-gray-600 mb-8">
              You will be redirected to a secure payment provider
              to complete your Visa or Mastercard payment.
            </div>
          )}

          {method === "bank" && (
            <div className="bg-gray-50 p-6 rounded-xl text-sm space-y-2 mb-8">
              <p><strong>Bank:</strong> Your Bank Name</p>
              <p><strong>Account Name:</strong> Your Company LLC</p>
              <p><strong>IBAN:</strong> LB00 0000 0000 0000 0000</p>
              <p><strong>Amount:</strong> $9.00 / month</p>
            </div>
          )}

          {/* Static Button */}
          <button
            className="w-full bg-[#5850EC] text-white py-5 rounded-2xl font-bold text-sm tracking-widest hover:bg-[#463fcb] transition-all"
          >
            {method === "card" ? "Continue to Payment" : "Confirm Transfer"}
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full flex items-center justify-center gap-2 text-gray-400 py-4 text-xs font-bold tracking-widest hover:text-gray-600 uppercase"
          >
            <ArrowLeft size={12} />
            Cancel and return
          </button>
        </div>

        {/* RIGHT SIDE – Premium Summary */}
        <div className="w-full md:w-[400px] bg-[#5850EC] p-12 md:p-16 text-white flex flex-col justify-between">

          <div>
            <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-[10px] font-bold tracking-[0.2em] mb-6 uppercase">
              Premium Plan
            </span>

            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Go Premium
            </h2>

            <p className="text-indigo-100/80 text-sm mb-10">
              For professionals who need unlimited power and speed.
            </p>

            <div className="space-y-4 text-xs">
              <div>• Unlimited AI Generations</div>
              <div>• Ultra HD Image Export</div>
              <div>• Commercial Usage License</div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex items-baseline gap-1">
              <span className="text-xl opacity-60">$</span>
              <span className="text-6xl font-black tracking-tighter">9</span>
              <span className="text-indigo-200/60">/month</span>
            </div>
            <p className="text-[10px] text-indigo-200/50 mt-4 uppercase tracking-widest">
              Billed monthly. Cancel anytime.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Checkout;