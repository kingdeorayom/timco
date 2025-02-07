import Image from "next/image";
import Link from "next/link";

export default function AccessibilityPage() {
  return (
    <section className="max-w-screen-2xl px-5 py-12 mx-auto space-y-16">
      <h1 className="text-4xl font-bold">Accessibility</h1>

      <div className="bg-[#F8F9FA] border-t space-y-4 p-10">
        <h2 className="text-3xl font-bold">Committed to Accessibility</h2>
        <p>
          At <strong>TIMCO</strong>, we strive to make our digital experience
          accessible to everyone. We are dedicated to inclusivity, ensuring our
          platform meets diverse needs and empowers all users.
        </p>
        <button className="bg-[#1d3456] text-white hover:text-[#1d3456] hover:bg-white border border-[#1d3456] font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
          Contact Us
        </button>
      </div>

      <div className="space-y-10">
        <h3 className="text-3xl font-bold">
          Inclusive Environment for Everyone
        </h3>
        <div className="space-y-4">
          <p>
            <strong>TIMCO</strong> is committed to providing outstanding service
            for all customers and potential customers, regardless of ability.
            Services are offered in a manner that ensures those with differing
            abilities are treated with respect and allows them to maintain their
            dignity and independence.
          </p>
          <p>
            Our testing process involves automatic and manual accessibility
            conformance testing to maximize conformance to{" "}
            <Link
              href="https://www.w3.org/TR/WCAG22/"
              className="text-blue-700 hover:underline"
            >
              Web Content Accessibility Guidelines (WCAG) 2.2 Level AA Success
              Criteria.
            </Link>
          </p>
        </div>
        <h3 className="text-3xl font-bold">Ultimate Goal</h3>
        <div className="space-y-4">
          <p>
            Whether using assistive technologies like a screen reader, a
            magnifier, voice recognition software, or captioning, our goal is to
            ensure your use of our digital properties is a successful and
            enjoyable experience and surpasses your expectations.
          </p>
        </div>
        <h3 className="text-3xl font-bold">Screen Reader Accessibility</h3>
        <div className="space-y-4">
          <p>
            We are committed to ensuring our website is accessible to all users,
            including those who rely on screen readers. Our website has been
            designed and optimized to work seamlessly with screen reader
            software, allowing for easy navigation and access to content for
            visually impaired users.
          </p>
          <p>
            For users looking to use a screen reader, we recommend the NVDA
            (NonVisual Desktop Access) Screen Reader, a free and open-source
            screen reader for Windows. To learn more or download NVDA, please
            visit the following link:
            <Link
              href="https://www.nvaccess.org/download/"
              className="text-blue-700 hover:underline"
            >
              Download NVDA Screen Reader
            </Link>
          </p>
        </div>
        <h3 className="text-3xl font-bold">3rd Party Links and Software</h3>
        <div className="space-y-4">
          <p>
            Please note that <strong>TIMCO</strong> website may link to, or
            interface with, third-party sites that we do not control, and which
            are not affiliated directly with <strong>TIMCO</strong>. These
            third-party vendors may not have undertaken the same efforts that{" "}
            <strong>TIMCO</strong> has to comply with the WCAG standards. As
            such, <strong>TIMCO</strong> does not make representations regarding
            the accessibility and compliance with the ADA (or other applicable
            laws) of third-party sites. In addition, third-party vendors provide
            some content, plugins and widgets on our website. While we ask those
            third-party vendors to ensure accessibility, we cannot ensure their
            conformance, but commit to continuously working with them to ensure
            updates are made consistently to improve the customer experience for
            all.
          </p>
        </div>

        <div className="bg-[#F8F9FA] space-y-5 p-6">
          <h3 className="text-3xl font-bold">Support</h3>
          <div className="space-y-4">
            <p>
              If you are a user with a disability, or an individual assisting a
              user with a disability, and have difficulty accessing or
              navigating our digital channels, please contact us at email.com.
              In your message, please provide your contact information, the web
              address or other location where you experienced difficulty, and a
              brief description of the problem you encountered, including the
              type and version of assistive technology you were using when you
              experienced difficulty and the type and version of web browser you
              were using at the time. We do our best to respond to feedback
              within 5 business days.
            </p>
            <ul className="list-disc px-10 space-y-2">
              <li>Contact Number: 0912345678</li>
              <li>Email Address: Email.com</li>
            </ul>
          </div>
        </div>

        <h3 className="text-3xl font-bold">Assistive Technologies</h3>

        <div className="grid md:grid-cols-3 gap-8 px-10">
          <div className="bg-white border p-6 transition-all duration-300 ease-in-out space-y-4 rounded-xl shadow-lg hover:shadow-xl">
            <h4 className="font-semibold text-2xl">
              NVDA (Non-Visual Desktop Access)
            </h4>
            <p>
              NVDA is a tool that helps blind and visually impaired individuals
              use Windows computers and various applications.
            </p>
          </div>
          <div className="bg-white border p-6 transition-all duration-300 ease-in-out space-y-4 rounded-xl shadow-lg hover:shadow-xl">
            <h4 className="font-semibold text-2xl">Windows Magnifier</h4>
            <p>
              Magnifier makes part or all of your screen bigger so you can see
              words and images better.
            </p>
          </div>
          <div className="bg-white border p-6 transition-all duration-300 ease-in-out space-y-4 rounded-xl shadow-lg hover:shadow-xl">
            <h4 className="font-semibold text-2xl">Read & Write</h4>
            <p>
              Read&Write is particularly useful for supporting special
              educational needs and disabilities (SEND) learners. Specific
              accessibility tools alongside the reading and writing tools, help
              to create a level playing field for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
