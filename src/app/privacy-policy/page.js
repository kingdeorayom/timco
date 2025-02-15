import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-screen-xl px-5 py-12 mx-auto space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          Privacy Policy for TIMCO (Topsure Industrial Machineries and Controls
          Corporation)
        </h1>
        <p>Effective Date: February 07, 2025</p>
      </div>
      <div className="bg-timco-off-white space-y-5 p-10 rounded-2xl">
        <h3 className="text-3xl font-bold">
          Please read the Privacy Policy carefully before using this website
        </h3>
        <div className="space-y-4">
          <p>
            Topsure Industrial Machineries and Controls Corporation ("TIMCO",
            "Timco," "we," "us," or "our") is committed to protecting the
            privacy of visitors to our website (the "Website"). This Privacy
            Policy explains how we collect, use, and share information about you
            when you visit or use our Website.
          </p>
        </div>
      </div>

      <div className="space-y-10">
        <h3 className="text-2xl font-bold">1. Information We Collect</h3>
        <div className="space-y-4">
          <p>We may collect the following types of information from you:</p>
          <ul className="list-disc px-10 space-y-4">
            <li>
              <strong>Personal Information:</strong> This may include
              information that can be used to identify you, such as your name,
              email address, phone number, company name, and any other
              information you voluntarily provide to us through contact forms or
              other means.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> This may include
              information about your visit to our Website, such as your IP
              address, browser type, operating system, referring website, pages
              viewed, and the date and time of your visit. This information is
              generally anonymous and doesn't directly identify you.
            </li>
          </ul>
        </div>
        <h3 className="text-2xl font-bold">2. How We Use Your Information</h3>
        <div className="space-y-4">
          <p>We may use your information for the following purposes:</p>
          <ul className="list-disc px-10 space-y-4">
            <li>
              <strong>To Respond to Inquiries:</strong> If you contact us
              through our Website, we will use your information to respond to
              your inquiries and provide you with the information or services
              you requested.
            </li>
            <li>
              <strong>To Provide Services:</strong> If you engage with us for
              our metal fabrication services, we will use your information to
              manage your account, process your orders, and provide you with
              customer support.
            </li>
            <li>
              <strong>To Improve Our Website:</strong> We may use non-personal
              information to analyze how our Website is used and to improve its
              content and functionality.
            </li>
            <li>
              <strong>Marketing:</strong> With your consent, we may use your
              information to send you marketing communications about our
              products and services. You can opt out of receiving marketing
              communications at any time by following the unsubscribe
              instructions included in our emails or by contacting us directly.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may use your information to
              comply with applicable laws and regulations.
            </li>
          </ul>
        </div>
        <h3 className="text-2xl font-bold">3. How We Share Your Information</h3>
        <div className="space-y-4">
          <p>We may use your information for the following purposes:</p>
          <ul className="list-disc px-10 space-y-4">
            <li>
              <strong>Service Providers:</strong> We may share your information
              with third-party service providers who perform services on our
              behalf, such as website hosting, data analysis, and email
              marketing. These service providers are contractually obligated to
              protect your information and may only use it for the purposes we
              specify.
            </li>
            <li>
              <strong>Legal Authorities:</strong> We may disclose your
              information to legal authorities if required by law or legal
              process.
            </li>
            <li>
              <strong>Business Transfers:</strong> If we are involved in a
              merger, acquisition, or sale of all or a portion of our assets,
              your information may be transferred as part of that transaction.
            </li>
          </ul>
        </div>
        <h3 className="text-2xl font-bold">4. Data Security</h3>
        <div className="space-y-4">
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, use, or disclosure. However, no method of
            transmission over the Internet, or method of electronic storage, is
            100% secure.
          </p>
        </div>
        <h3 className="text-2xl font-bold">5. Your Choices</h3>
        <div className="space-y-4">
          <p>You have the following choices regarding your information:</p>
          <ul className="list-disc px-10 space-y-4">
            <li>
              <strong>Access and Correction:</strong> You may access and update
              your personal information by contacting us.
            </li>
            <li>
              <strong>Opt-Out:</strong> You may opt out of receiving marketing
              communications from us at any time by following the unsubscribe
              instructions included in our emails or by contacting us directly.
            </li>
          </ul>
        </div>
        <h3 className="text-2xl font-bold">6. Children's Privacy</h3>
        <div className="space-y-4">
          <p>
            Our Website is not intended for children under the age of 13. We do
            not knowingly collect personal information from children under 13.
          </p>
        </div>
        <h3 className="text-2xl font-bold">8. Contact Us</h3>
        <div className="space-y-4">
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at the following contact information listed{" "}
            <Link
              href="/about#contact-us"
              className="text-blue-700 hover:underline"
            >
              here
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
