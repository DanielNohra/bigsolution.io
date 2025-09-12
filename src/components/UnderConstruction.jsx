import React from "react";
import "./UnderConstruction.css";

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <div className="construction-container">
        {/* Logo */}
        <div className="logo-container">
          <img src="/logo.png" alt="BigSolution.io Logo" className="logo" />
        </div>

        {/* Main Content */}
        <div className="content">
          <h1 className="title">
            <span className="title-text">Website Under Construction</span>
          </h1>

          <p className="subtitle">
            We're working hard to bring you something amazing.
          </p>

          <p className="description">
            Our team is crafting an exceptional experience for you. Please check
            back soon for updates.
          </p>
        </div>

        {/* Loading Animation */}
        <div className="loading-container">
          <div className="loading-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
          </div>
          <p className="loading-text">Loading...</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <span className="progress-text">Coming Soon</span>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <p>For inquiries, please contact us at:</p>
          <a href="mailto:info@bigsolution.io" className="email-link">
            info@bigsolution.io
          </a>
        </div>
      </div>

      {/* Background Elements */}
      <div className="bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </div>
  );
};

export default UnderConstruction;
