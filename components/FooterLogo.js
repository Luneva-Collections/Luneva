"use client";

// The footer name opens the Luneva admin console on a double-click (protected by Cloudflare Access and the
// console sign-in). It looks and behaves like plain text for everyone else.
const ADMIN_URL = "https://admin.luneva.com.au/admin";

export default function FooterLogo() {
  return (
    <p className="footer-logo" onDoubleClick={() => { window.location.href = ADMIN_URL; }}>
      LUNÉVA
    </p>
  );
}
