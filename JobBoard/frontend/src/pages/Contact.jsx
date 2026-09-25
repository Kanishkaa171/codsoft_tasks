import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer.jsx";

import officeImage from "../images/Office view.png";
import teamImage from "../images/Team collaboration.avif";
import workspaceImage from "../images/workspace.avif";
import professionalImage from "../images/Professional working.webp";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <main className="contact-page">

        {/* Intro */}

        <section className="contact-intro">
          <div className="contact-intro-inner">
            <p className="contact-label">
              <span></span>
              GET IN TOUCH
            </p>

            <h1>
              Let's start a
              <br />
              <span>conversation.</span>
            </h1>

            <p className="contact-intro-text">
              Have a question about Jobly, need help with your job search,
              or want to work with us? We'd love to hear from you.
            </p>
          </div>
        </section>


        {/* Full Width Office Image */}

        <section className="contact-office-image">
          <div className="contact-office-copy">
            <p className="contact-eyebrow">
                 A PLACE FOR BETTER OPPORTUNITIES
            </p>

            <h2>
              Where ideas,
              <br />
              people and
              <br />
              possibilities meet.
            </h2>

            <p>
              Jobly brings ambitious professionals and growing teams
              together through a simpler, more thoughtful approach to
              finding meaningful work.
            </p>

            <a href="/jobs">
            Explore Opportunities
            <ArrowRight size={16} />
            </a>
        </div>

        <div className="contact-office-photo">
            <img
            src={officeImage}
            alt="Modern office environment"
            />
        </div>
        </section>


        {/* Introduction + Team Image */}

        <section className="contact-story">

          <div className="contact-story-content">
            <p className="contact-eyebrow">
              PEOPLE BEHIND THE PLATFORM
            </p>

            <h2>
              Better opportunities
              <br />
              start with better connections.
            </h2>

            <p>
              Jobly is built around connecting ambitious people with
              companies and teams where they can do meaningful work.
            </p>

            <p>
              Whether you're searching for your first opportunity,
              planning your next career move, or building a team,
              we're here to make the process simpler.
            </p>
          </div>

          <div className="contact-story-image">
            <img
              src={teamImage}
              alt="Team collaborating in an office"
            />
          </div>

        </section>


        {/* Contact Information */}

        <section className="contact-information">

          <div className="contact-information-heading">
            <p className="contact-eyebrow">
              CONTACT INFORMATION
            </p>

            <h2>
              We're here when
              <br />
              you need us.
            </h2>

            <p>
              Reach out to the Jobly team and we'll help you find the
              right direction.
            </p>
          </div>

          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">
                <Mail size={20} />
              </div>

              <div>
                <span>Email</span>
                <a href="mailto:hello@jobly.com">
                  hello@jobly.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <Phone size={20} />
              </div>

              <div>
                <span>Phone</span>
                <a href="tel:+919876543210">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>

              <div>
                <span>Office</span>
                <p>Kolkata, India</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <Clock size={20} />
              </div>

              <div>
                <span>Working Hours</span>
                <p>Monday – Friday, 9:00 AM – 6:00 PM</p>
              </div>
            </div>

          </div>

        </section>


        {/* Workspace Section */}

        <section className="contact-workspace">

          <div className="workspace-image">
            <img
              src={workspaceImage}
              alt="Professional workspace"
            />
          </div>

          <div className="workspace-content">
            <p className="contact-eyebrow">
              FIND YOUR WAY FORWARD
            </p>

            <h2>
              Every career
              <br />
              starts somewhere.
            </h2>

            <p>
              Explore Jobly's career resources, discover new
              opportunities, and take the next step toward work that
              moves you forward.
            </p>

            <a href="/career-insights">
              Explore Career Insights
              <ArrowRight size={16} />
            </a>
          </div>

        </section>


        {/* Contact Form */}

        <section className="contact-form-section">

          <div className="contact-form-intro">
            <p className="contact-eyebrow">
              SEND A MESSAGE
            </p>

            <h2>
              How can
              <br />
              we help?
            </h2>

            <p>
              Fill out the form and tell us what you need. Our team
              will get back to you as soon as possible.
            </p>
          </div>

          <div className="contact-form-wrapper">

            {submitted && (
              <div className="contact-success">
                <CheckCircle2 size={20} />

                <div>
                  <strong>Message received.</strong>

                  <p>
                    Thanks for reaching out. We'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Send Message
                <ArrowRight size={17} />
              </button>

            </form>

          </div>

        </section>


        {/* FAQ */}

        <section className="contact-faq">

          <div className="faq-heading">
            <p className="contact-eyebrow">
              COMMON QUESTIONS
            </p>

            <h2>
              Before you
              <br />
              reach out.
            </h2>
          </div>

          <div className="faq-grid">

            <div className="faq-card">
              <span>01</span>

              <h3>Looking for a job?</h3>

              <p>
                Browse available opportunities and search by role,
                location, experience, and work type.
              </p>
            </div>

            <div className="faq-card">
              <span>02</span>

              <h3>Want to hire?</h3>

              <p>
                Employers can create an account and connect with
                candidates looking for their next opportunity.
              </p>
            </div>

            <div className="faq-card">
              <span>03</span>

              <h3>Need technical help?</h3>

              <p>
                Send us a detailed message and our team will help you
                understand the next steps.
              </p>
            </div>

          </div>

        </section>


        {/* Final Image + CTA */}

        <section className="contact-bottom">

          <div className="contact-bottom-image">
            <img
              src={professionalImage}
              alt="Professional working"
            />
          </div>

          <div className="contact-bottom-content">
            <p className="contact-eyebrow">
              STILL HAVE QUESTIONS?
            </p>

            <h2>
              We're only a
              <br />
              message away.
            </h2>

            <p>
              Whether it's a question, suggestion, or something you
              need help with, don't hesitate to reach out.
            </p>

            <a href="mailto:hello@jobly.com">
              Email Jobly
              <ArrowRight size={17} />
            </a>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Contact;