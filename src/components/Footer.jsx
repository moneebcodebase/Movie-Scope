import { useEffect, useRef, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.4 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer ${isVisible ? "footer-visible" : ""}`}
    >
      <div className="footer-content">
        <h2 className="footer-title">Get in Touch</h2>

        <div className="footer-icons">
          <FaFacebook className="footer-icon" />
          <FaTwitter className="footer-icon" />
          <FaInstagram className="footer-icon" />
          <FaEnvelope className="footer-icon" />
        </div>

        <p className="footer-text">© 2025 moneebcodebase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
