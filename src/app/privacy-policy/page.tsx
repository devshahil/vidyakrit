import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vidyakrit",
  description: "Privacy Policy for Vidyakrit's website, software, and ERP services.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section" style={{ paddingTop: "10rem", paddingBottom: "6rem" }}>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1rem", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.1 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", marginBottom: "3rem" }}>
          Effective Date: June 27, 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "1.125rem" }}>
          
          <div>
            <p>
              Vidyakrit ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (vidyakrit.in) or use our web and mobile applications, including our Educational Resource Planning (ERP) platform and custom software services.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this privacy policy, please do not access the platform.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>1. Information We Collect</h2>
            <p style={{ marginBottom: "1rem" }}>We may collect information about you in a variety of ways, depending on how you interact with our platform. The information we may collect includes:</p>
            
            <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem", fontWeight: 600 }}>A. Personal Data</h3>
            <p style={{ marginBottom: "0.5rem" }}>Personally identifiable information that you voluntarily give to us when registering or using our platform. Categories of users include students, parents, guardians, teachers, administrators, and school staff. Information collected includes but is not limited to:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
              <li><strong>Identity Data:</strong> Name, date of birth, gender, profile picture.</li>
              <li><strong>Contact Data:</strong> Email address, phone number, physical address.</li>
              <li><strong>Educational/Professional Data:</strong> Student roll numbers, grades, staff employee IDs, designations.</li>
            </ul>

            <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem", fontWeight: 600 }}>B. Technical and Device Data</h3>
            <p style={{ marginBottom: "0.5rem" }}>When you access our platform, our servers automatically collect:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, hardware model, and unique device identifiers for security and device verification purposes.</li>
              <li><strong>Geolocation Data:</strong> We may collect location data to facilitate specific features, such as staff attendance tracking or secure access verification.</li>
              <li><strong>Log Data:</strong> Access times, pages viewed, and routes navigated within the application. Server logs are retained for a limited period strictly for security, troubleshooting, and performance monitoring.</li>
            </ul>

            <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem", fontWeight: 600 }}>C. Financial Data</h3>
            <p>
              Financial information, such as payment method details, is collected directly by our trusted third-party payment processors. We do not store complete financial details on our servers, retaining only transaction IDs, amounts, and payment statuses for parent fee tracking and institutional reconciliation.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>2. Children's Data & Educational Records</h2>
            <p style={{ marginBottom: "1rem" }}>As a School ERP platform, Vidyakrit processes personal data of students, including children under the age of majority, on behalf of educational institutions.</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><strong>Institutional Responsibility:</strong> The educational institution acts as the primary data fiduciary. It is the sole responsibility of the school or educational institution to obtain all necessary and legally required consents from parents or legal guardians before inputting any children’s or students' personal information into the Vidyakrit platform.</li>
              <li><strong>Our Role:</strong> Vidyakrit acts purely as a data processor for educational records and processes this data strictly to provide the requested services to the institution. We do not use student or children's data for targeted advertising or unauthorized profiling.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>3. How We Use Your Information</h2>
            <p style={{ marginBottom: "1rem" }}>Having accurate information about you permits us to provide a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the platform to:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Create and manage secure accounts via industry-standard authentication mechanisms.</li>
              <li>Process transactions, student fee payments, and generate invoices.</li>
              <li>Monitor and analyze usage, attendance metrics, and system performance using generic analytics and performance monitoring tools.</li>
              <li>Improve our application infrastructure, fix bugs, and optimize overall platform performance.</li>
              <li>Prevent fraudulent transactions, monitor against theft, and protect against automated attacks and abuse.</li>
              <li>Send administrative information, such as updates to policies, security alerts, or system notifications.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>4. Disclosure of Your Information</h2>
            <p style={{ marginBottom: "1rem" }}>We do not sell, trade, or rent your personal identification information to others. We may share information in specific situations:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li><strong>Trusted Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including secure cloud infrastructure providers, payment processors, data analytics services, and email delivery providers. These trusted cloud providers may process data where necessary to ensure platform availability and reliability.</li>
              <li><strong>Legal Obligations:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>5. Security of Your Information</h2>
            <p style={{ marginBottom: "1rem" }}>We use administrative, technical, and physical security measures to help protect your personal information. This includes:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
              <li><strong>Encryption:</strong> Data in transit and at rest is secured using industry-standard encryption protocols.</li>
              <li><strong>Access Controls:</strong> Strict access controls and role-based data isolation restrict database access based on user roles (e.g., Admin, Staff, Parent, Student).</li>
              <li><strong>Session Management:</strong> Secure session mechanisms and tokens are utilized to protect active user sessions.</li>
              <li><strong>Security Monitoring:</strong> We actively monitor our secure cloud infrastructure for unauthorized access or anomalies.</li>
            </ul>
            <p style={{ marginBottom: "1rem" }}>While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.</p>
            <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem", fontWeight: 600 }}>Data Breach Notification</h3>
            <p>In the unlikely event of a data breach that compromises personal data, Vidyakrit will notify the affected educational institutions and relevant authorities as required by applicable laws, ensuring transparency and prompt mitigation.</p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>6. Data Retention</h2>
            <p style={{ marginBottom: "1rem" }}>Vidyakrit retains customer data strictly in accordance with our role as a data processor:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><strong>During Active Subscriptions:</strong> We retain institutional data, user accounts, and operational records for as long as the educational institution maintains an active subscription with us, ensuring uninterrupted service.</li>
              <li><strong>Post-Termination & Export:</strong> Upon termination or cancellation of the service agreement, the institution will be provided a secure window to export their institutional data.</li>
              <li><strong>Secure Deletion:</strong> Following the data export window, or upon explicit request from the institution, we will securely delete or anonymize the data from our active servers, unless a longer retention period is mandated by legal, tax, or regulatory obligations.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>7. Use of Cookies and Tracking Technologies</h2>
            <p>
              We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize the platform and improve your experience. You can choose to disable cookies through your browser, but this may affect your ability to use certain platform features.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>8. Your Rights</h2>
            <p style={{ marginBottom: "1rem" }}>Depending on the jurisdiction, and under applicable laws such as the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the <strong>Information Technology Act, 2000</strong>, you may have the right to:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request the deletion of your personal data, subject to legal and operational retention requirements.</li>
            </ul>
            <p>Users affiliated with an educational institution must generally route data access, correction, or deletion requests through their respective school administrators, as the institution serves as the data fiduciary.</p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>9. Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Effective Date" of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: 600 }}>10. Contact and Compliance Information</h2>
            <p>
              If you have questions, comments, or legal inquiries about this Privacy Policy, please contact us at:<br /><br />
              <strong>Vidyakrit</strong><br />
              <strong>Registered Business Address:</strong> [Insert Registered Business Address]<br />
              <strong>Support Email:</strong> <a href="mailto:support@vidyakrit.in" style={{ color: "var(--accent)", textDecoration: "underline" }}>support@vidyakrit.in</a><br />
              <strong>Legal/Privacy Email:</strong> <a href="mailto:legal@vidyakrit.in" style={{ color: "var(--accent)", textDecoration: "underline" }}>legal@vidyakrit.in</a><br />
              <strong>Grievance Officer:</strong> [Insert Name/Contact of Grievance Officer]<br />
              <strong>Business Hours:</strong> Mon-Fri, 9 AM - 6 PM IST<br />
              <strong>Jurisdiction:</strong> India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
