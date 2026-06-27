import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Vidyakrit",
  description: "Terms of Service for Vidyakrit's website, software, and ERP services.",
};

export default function TermsOfServicePage() {
  return (
    <section className="section" style={{ paddingTop: "10rem", paddingBottom: "6rem" }}>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1rem", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.1 }}>
          Terms of Use
        </h1>
        <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", marginBottom: "3rem" }}>
          Effective Date: June 27, 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "1.125rem" }}>
          
          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Vidyakrit platform, including our corporate website, mobile applications, custom software services, and Educational Resource Planning (ERP) services (collectively, the "Services"), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Services.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>2. Description of Services</h2>
            <p>
              Vidyakrit provides premium software engineering services, digital product development, and a cloud-based ERP solution designed specifically for educational institutions. Our ERP Services include, but are not limited to, student management, staff attendance tracking, parent dashboards, financial fee processing, and administrative analytics.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>3. Account Registration and Security</h2>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><strong>Eligibility:</strong> For our ERP platform, you must be authorized by your affiliated educational institution to create an account. For other services, you must provide accurate and complete information upon registration.</li>
              <li><strong>Account Responsibilities:</strong> You are responsible for maintaining the confidentiality of your account credentials (usernames, passwords, and security tokens). You agree to notify us immediately of any unauthorized access or breach of security.</li>
              <li><strong>Device Verification:</strong> We may employ device verification and location-based security checks to ensure that access is granted only to authorized personnel or devices.</li>
              <li><strong>Suspension:</strong> We reserve the right to suspend or terminate accounts that violate these Terms or present a security risk to the platform.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>4. User Conduct and Acceptable Use Policy</h2>
            <p style={{ marginBottom: "1rem" }}>When using the Services, you agree to adhere to professional standards of conduct. You expressly agree <strong>not to</strong>:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><strong>Compromise Security:</strong> Attempt to bypass, exploit, or disable any security measures, access controls, or rate-limiting architecture of the platform.</li>
              <li><strong>Unauthorized Access:</strong> Engage in credential sharing, automated scraping, reverse engineering, decompiling, disassembling, or unauthorized API access.</li>
              <li><strong>Malicious Activity:</strong> Upload, transmit, or distribute any malicious code, malware, viruses, spam, phishing links, or harmful software.</li>
              <li><strong>Illegal Use:</strong> Use the platform for any illegal, fraudulent, or unauthorized purpose under applicable Indian laws, or distribute illegal content and copyright-infringing materials.</li>
              <li><strong>Service Disruption:</strong> Interfere with, disrupt, or negatively affect the integrity, performance, or availability of the Services for other users.</li>
              <li><strong>Abuse:</strong> Engage in any form of abuse of the platform, its infrastructure, or its intended administrative logic.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>5. Service Availability and Maintenance</h2>
            <p style={{ marginBottom: "1rem" }}>While we strive to provide reliable and consistent service through secure cloud infrastructure, Vidyakrit does not guarantee 100% uptime.</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><strong>Maintenance:</strong> We may perform scheduled maintenance, software updates, and service improvements, which may result in temporary downtime. Where practical, we will provide advance maintenance notifications to school administrators and clients.</li>
              <li><strong>Emergency Interventions:</strong> In the event of critical security updates or unexpected failures, emergency maintenance may be performed without prior notice.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>6. Payments, Billing, and Fees</h2>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><strong>Subscription Billing:</strong> Educational institutions and corporate clients are billed based on their active subscription plans or service agreements. Invoices will include applicable GST or other taxes as mandated by law. Payments must be remitted by the specified payment deadlines.</li>
              <li><strong>Renewals and Suspensions:</strong> Subscriptions generally renew automatically unless canceled. In the event of failed payments or non-payment, Vidyakrit reserves the right to suspend platform access until the outstanding balance is resolved.</li>
              <li><strong>Payment Gateway for Parents:</strong> Fee collections and other financial transactions initiated by parents or students are processed securely via our trusted third-party payment providers.</li>
              <li><strong>Disputes and Refunds:</strong> Vidyakrit provides the software to facilitate payments to the educational institution. Any disputes regarding fee amounts, refunds, or chargebacks must be resolved directly with the educational institution. Vidyakrit is not a party to these financial transactions and holds no liability for institutional fee policies.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>7. Intellectual Property Rights and Data Ownership</h2>
            <p style={{ marginBottom: "1rem" }}>We believe in a clear distinction regarding ownership between platform architecture and institutional records.</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li>
                <strong>Vidyakrit Owns:</strong> All intellectual property rights associated with the Services, including the software, source code, UI/UX designs, branding, documentation, trademarks, and logos, remain the sole and exclusive property of Vidyakrit. You are granted a limited, non-exclusive, non-transferable license to access and use the platform strictly for institutional and administrative purposes.
              </li>
              <li>
                <strong>Schools and Clients Own:</strong> The educational institution or client retains full, unconditional ownership of all its data. This includes student records, attendance data, financial records, uploaded documents, and operational data. Vidyakrit acts purely as a data processor handling this information on behalf of the institution or client.
              </li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>8. Termination and Account Closure</h2>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><strong>Termination by Institution/Client:</strong> An educational institution or client may terminate its agreement with Vidyakrit in accordance with their subscription contract. Upon termination, they will be provided a secure process to export their data.</li>
              <li><strong>Termination by Vidyakrit:</strong> We reserve the right to suspend or terminate services immediately, with or without notice, for severe violations of our Acceptable Use Policy, non-payment, or legal mandates.</li>
              <li><strong>Post-Termination Data Deletion:</strong> Following termination and the data export phase, Vidyakrit will securely delete the operational data from our active servers, maintaining only what is required for legal and tax compliance.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>9. Disclaimer of Warranties</h2>
            <p style={{ marginBottom: "1rem" }}>The Services are provided on an "AS-IS" and "AS-AVAILABLE" basis. Vidyakrit makes no representations or warranties of any kind, express or implied, regarding:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
              <li>The uninterrupted availability of the Service.</li>
              <li>The absolute security of data against all advanced cyber threats.</li>
              <li>The complete accuracy of analytics or reports generated.</li>
            </ul>
            <p>Vidyakrit disclaims all warranties, including but not limited to, implied warranties of merchantability and fitness for a particular purpose.</p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>10. Limitation of Liability</h2>
            <p style={{ marginBottom: "1rem" }}>To the fullest extent permitted by applicable law (including the <strong>Information Technology Act, 2000</strong> and <strong>Digital Personal Data Protection Act, 2023</strong>), Vidyakrit, its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Your use of or inability to use the Services.</li>
              <li>Any unauthorized access to or alteration of your transmissions or data.</li>
              <li>Any technical malfunctions, server downtimes, or database disruptions, despite our implementation of industry-standard backups and access controls.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>11. Force Majeure</h2>
            <p>
              Vidyakrit shall not be held liable for any delay or failure to perform its obligations under these Terms if such delay or failure is due to circumstances beyond our reasonable control. Such circumstances ("Force Majeure") include, but are not limited to, natural disasters, floods, earthquakes, pandemics, internet outages, cloud infrastructure failures, severe cyberattacks, government actions, and major power failures.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>12. Governing Law and Jurisdiction</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in India.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>13. Modifications to the Terms</h2>
            <p>
              We reserve the right to update or modify these Terms of Use at any time. Significant changes will be communicated via platform notifications or email. Continued use of the Services after such modifications constitutes your acknowledgment and acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>14. Contact and Compliance Information</h2>
            <p>
              For any legal inquiries, technical issues, or questions regarding these Terms, please contact us at:<br /><br />
              <strong>Vidyakrit</strong><br />
              <strong>Support Email:</strong> <a href="mailto:support@vidyakrit.in" style={{ color: "var(--accent)", textDecoration: "underline" }}>support@vidyakrit.in</a><br />
              <strong>Legal/Privacy Email:</strong> <a href="mailto:legal@vidyakrit.in" style={{ color: "var(--accent)", textDecoration: "underline" }}>legal@vidyakrit.in</a><br />
              <strong>Business Hours:</strong> Mon-Fri, 10 AM - 7 PM IST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
