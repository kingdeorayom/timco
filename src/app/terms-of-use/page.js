import Link from "next/link";

export default function TermsOfUsePage() {
  return (
    <section className="max-w-screen-xl px-5 py-12 mx-auto space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          Terms of Use for TIMCO (Topsure Industrial Machineries and Controls
          Corporation)
        </h1>
        <p>Effective Date: February 07, 2025</p>
      </div>
      <div className="bg-[#F8F9FA] space-y-5 p-10 rounded-2xl">
        <h3 className="text-3xl font-bold">
          Please read these Terms of Use carefully before using this website
        </h3>
        <div className="space-y-4">
          <p>
            Welcome to the <strong>TIMCO</strong> (Topsure Industrial
            Machineries and Controls Corporation) website (the "Website"). By
            accessing or using the Website, you agree to be bound by these Terms
            of Use ("Terms"). Please read them carefully before using the
            Website. If you do not agree with these Terms, you may not use the
            Website.
          </p>
        </div>
      </div>

      <div className="space-y-10">
        <h3 className="text-2xl font-bold">1. Use of the Website</h3>
        <div className="space-y-4">
          <p>
            The Website is provided for informational purposes only and to allow
            you to inquire about TIMCO's metal fabrication services. You may use
            the Website only for lawful purposes and in accordance with these
            Terms. You agree not to:
          </p>
          <ul className="list-disc px-10 space-y-4">
            <li>
              Use the Website in any way that violates any applicable federal,
              state, local, or international law or regulation.
            </li>
            <li>
              Impersonate or misrepresent your affiliation with TIMCO or any
              other person or entity.
            </li>
            <li>
              Interfere with or disrupt the operation of the Website or the
              servers or networks connected to the Website.
            </li>
            <li>
              Attempt to gain unauthorized access to any portion of the Website
              or any other systems or networks.
            </li>
            <li>
              Use the Website to transmit or distribute any viruses, worms, or
              other malicious code.
            </li>
            <li>
              Use the Website to collect or track the personal information of
              others.
            </li>
            <li>
              Use the Website for any commercial purpose without the express
              written consent of TIMCO.
            </li>
          </ul>
        </div>
        <h3 className="text-2xl font-bold">2. Intellectual Property</h3>
        <div className="space-y-4">
          <p>
            The content of the Website, including but not limited to text,
            graphics, logos, images, and software, is the property of TIMCO or
            its licensors and is protected by copyright and other intellectual
            property laws. You may not reproduce, modify, distribute, or display
            any of the content without the prior written consent of TIMCO.
          </p>
        </div>
        <h3 className="text-2xl font-bold">3. Disclaimer of Warranties</h3>
        <div className="space-y-4">
          <p>
            The Website is provided "as is" and without any warranties of any
            kind, either express or implied. TIMCO does not warrant that the
            Website will be uninterrupted, error-free, or that any defects will
            be corrected. TIMCO disclaims all warranties of merchantability,
            fitness for a particular purpose, and non-infringement.
          </p>
        </div>
        <h3 className="text-2xl font-bold">4. Limitation of Liability</h3>
        <div className="space-y-4">
          <p>
            TIMCO will not be liable for any damages of any kind arising out of
            or in connection with your use of the Website, including but not
            limited to direct, indirect, incidental, 1 consequential, or
            punitive 2 damages.
          </p>
        </div>
        <h3 className="text-2xl font-bold">5. Links to Third-Party Websites</h3>
        <div className="space-y-4">
          <p>
            The Website may contain links to third-party websites. TIMCO is not
            responsible for the content of any third-party website and does not
            endorse any products or services offered on those websites. You
            access third-party websites at your own risk.
          </p>
        </div>
        <h3 className="text-2xl font-bold">6. Governing Law</h3>
        <div className="space-y-4">
          <p>
            These Terms will be governed by and construed in accordance with the
            laws of the Republic of the Philippines, without regard to its
            conflict of law principles.
          </p>
        </div>
        <h3 className="text-2xl font-bold">7. Changes to these Terms</h3>
        <div className="space-y-4">
          <p>
            TIMCO may update these Terms at any time without notice. Your
            continued use of the Website following the posting of revised Terms
            means that you accept the changes.
          </p>
        </div>
        <h3 className="text-2xl font-bold">8. Contact Us</h3>
        <div className="space-y-4">
          <p>
            If you have any questions about these Terms, please contact us at
            the following contact information listed listed{" "}
            <Link
              href="/about#contact-us"
              className="text-blue-700 hover:underline"
            >
              here
            </Link>
            .
          </p>
        </div>
        <h3 className="text-2xl font-bold">9. Entire Agreement</h3>
        <div className="space-y-4">
          <p>
            These Terms constitute the entire agreement between you and TIMCO
            regarding the Website and supersede all prior agreements and
            understandings, whether written or oral.
          </p>
        </div>
        <h3 className="text-2xl font-bold">10. Severability</h3>
        <div className="space-y-4">
          <p>
            If any provision of these Terms is held to be invalid or
            unenforceable, the remaining provisions will remain in full force
            and effect.
          </p>
        </div>
      </div>
    </section>
  );
}
