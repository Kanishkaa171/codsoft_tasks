import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="decor decor-one"></div>
      <div className="decor decor-two"></div>
      <div className="decor decor-three"></div>

      <section className="hero">
        <div className="hero-content">
          <div className="welcome-pill">
            <span>✦</span> A little fun goes a long way
          </div>

          <h1>
            Create. Play.
            <br />
            <span>Learn.</span>
          </h1>

          <p>
            Make learning feel a little more fun. Create your own quizzes,
            challenge yourself, and discover something new with QUIZyou.
          </p>

          <div className="hero-buttons">
            <Link to="/create" className="primary-btn">
              Create a Quiz <span>→</span>
            </Link>

            <Link to="/quizzes" className="secondary-btn">
              Explore Quizzes
            </Link>
          </div>
        </div>

        <div className="hero-card-area">
          <div className="floating-star star-one">✦</div>
          <div className="floating-star star-two">✧</div>

          <div className="quiz-preview">
            <div className="preview-top">
              <span className="preview-label">QUICK QUIZ</span>
              <span className="preview-number">01 / 05</span>
            </div>

            <h3>What makes learning better?</h3>

            <div className="answer answer-active">
              <span>A</span>
              Fun & curiosity
              <b>✓</b>
            </div>

            <div className="answer">
              <span>B</span>
              Endless notes
            </div>

            <div className="answer">
              <span>C</span>
              More stress
            </div>

            <div className="preview-bottom">
              <span>♡ Keep going!</span>
              <span className="tiny-dot"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-heading">
          <span>WHY QUIZyou?</span>
          <h2>Simple, playful, useful.</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card pink-card">
            <div className="feature-icon">✦</div>
            <h3>Create</h3>
            <p>
              Build your own quizzes with questions and multiple-choice
              answers in just a few clicks.
            </p>
          </div>

          <div className="feature-card blue-card">
            <div className="feature-icon">♡</div>
            <h3>Challenge</h3>
            <p>
              Pick a quiz, test your knowledge, and see how well you really
              know your stuff.
            </p>
          </div>

          <div className="feature-card purple-card">
            <div className="feature-icon">✧</div>
            <h3>Learn</h3>
            <p>
              Get your score instantly and review your answers as you learn
              from every attempt.
            </p>
          </div>
        </div>
      </section>
      <section className="how-section">
  <div className="section-heading">
    <span>HOW IT WORKS</span>
    <h2>Three little steps.</h2>
  </div>

  <div className="steps-grid">
    <div className="step-card">
      <div className="step-number">01</div>
      <div className="step-icon pink-step">✦</div>
      <h3>Create</h3>
      <p>
        Choose your topic, add questions, and build a quiz your way.
      </p>
    </div>

    <div className="step-card">
      <div className="step-number">02</div>
      <div className="step-icon blue-step">♡</div>
      <h3>Play</h3>
      <p>
        Pick a quiz and answer each question at your own pace.
      </p>
    </div>

    <div className="step-card">
      <div className="step-number">03</div>
      <div className="step-icon purple-step">✓</div>
      <h3>See your result</h3>
      <p>
        Get your score instantly and see how you performed.
      </p>
    </div>
  </div>
</section>

<section className="categories-section">
  <div className="categories-heading">
    <div>
      <span>EXPLORE</span>
      <h2>Find something fun.</h2>
    </div>

    <Link to="/quizzes" className="category-link">
      View all →
    </Link>
  </div>

  <div className="category-grid">
    <Link to="/quizzes" className="category-card category-pink">
      <span>🧠</span>
      <div>
        <h3>General Knowledge</h3>
        <p>Test what you know</p>
      </div>
    </Link>

    <Link to="/quizzes" className="category-card category-blue">
      <span>🔬</span>
      <div>
        <h3>Science</h3>
        <p>Explore and discover</p>
      </div>
    </Link>

    <Link to="/quizzes" className="category-card category-purple">
      <span>🎨</span>
      <div>
        <h3>Fun & Lifestyle</h3>
        <p>Something lighter</p>
      </div>
    </Link>

    <Link to="/quizzes" className="category-card category-yellow">
      <span>🌎</span>
      <div>
        <h3>World & Culture</h3>
        <p>Learn something new</p>
      </div>
    </Link>
  </div>
</section>

<section className="stats-strip">
  <div>
    <strong>01</strong>
    <span>Simple to create</span>
  </div>

  <div>
    <strong>∞</strong>
    <span>Quizzes to explore</span>
  </div>

  <div>
    <strong>100%</strong>
    <span>Made for learning</span>
  </div>
</section>

      <section className="home-cta">
        <div>
          <span>READY?</span>
          <h2>Your next little challenge is waiting.</h2>
        </div>

        <Link to="/quizzes" className="cta-button">
          Explore Quizzes →
        </Link>
      </section>
    </div>
  );
}

export default Home;