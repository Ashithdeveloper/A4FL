import React from 'react'
import Navbar from '../../navbar/Navbar';

const Learn = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:mx-25 mx-4 my-10">
        <h1 className="text-3xl font-bold mb-4">
          📘 Learn More About Applying for a Loan
        </h1>
         
        <section className="mb-6">
          <h2 className="text-2xl font-bold mt-3">💡 What is a Loan?</h2>
          <p className="mt-2 font-medium">
            A loan is money you borrow from a bank or financial institution and
            pay back over time with interest. It helps you manage big expenses
            like education, home renovation, starting a business, or
            emergencies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mt-3">
            📝 Steps to Apply for a Loan
          </h2>
          <ol className="list-decimal list-inside font-medium mt-2 space-y-4">
            <li>
              <strong>Create an Account / Login:</strong> Securely sign up with
              your personal and bank details. All your data is encrypted and
              safe with us.
            </li>
            <li>
              <strong>Fill Loan Application Form:</strong> Provide the loan
              amount, choose the loan type (Personal, Business, Education,
              etc.), and mention the purpose and documents.
            </li>
            <li>
              <strong>Bank Verification:</strong> Your bank details will be
              verified for faster processing. Ensure your account is active and
              accurate.
            </li>
            <li>
              <strong>Submit Application:</strong> Submit the loan request and
              track its status from your dashboard.
            </li>
            <li>
              <strong>Approval & Disbursement:</strong> If approved, funds are
              credited to your account. You’ll get an email and SMS
              notification.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mt-3">📂 Documents Required</h2>
          <ul className="list-disc list-inside font-medium mt-2 space-y-2">
            <li>PAN Card / Government ID</li>
            <li>Bank Statement (last 3 months)</li>
            <li>Income Proof (optional for small loans)</li>
            <li>Passport-sized Photo</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mt-3">⏱️ How Long Does It Take?</h2>
          <ul className="list-disc list-inside font-medium mt-2 space-y-2">
            <li>Application Review: Within 24-48 hours</li>
            <li>Approval & Disbursement: 2-5 working days</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mt-3">🔒 Is It Safe?</h2>
          <p className="font-medium mt-2">
            Yes. We use bank-grade encryption. Your information is never shared
            without your permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mt-3">❓ Need Help?</h2>
          <p className="font-medium mt-2">
            If you have any doubts or questions, visit our Support page or
            contact us at: <br />
            📧
            <a
              href="mailto:support@yourapp.com"
              className="underline text-blue-600"
            >
              support@yourapp.com
            </a>
            <br />
            📞 +91-XXXXXXXXXX
          </p>
        </section>
      </div>
    </>
  );
}

export default Learn