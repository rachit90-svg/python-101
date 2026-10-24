:root {
  --midnight: #13233b;
  --midnight-soft: #1d3557;
  --sand: #f3e8d8;
  --peach: #d9805f;
  --sage: #8ea58f;
  --forest: #3b5b4c;
  --text: #18314d;
  --muted: #5d6d7d;
  --white: #ffffff;
  --panel: #f8f3ec;
  --shadow: 0 24px 60px rgba(19, 35, 59, 0.12);
  --radius: 22px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Manrope", sans-serif;
  color: var(--text);
  background: var(--white);
  line-height: 1.7;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
}

.topbar {
  background: var(--midnight);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.82rem;
}

.topbar-inner {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  min-height: 42px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(19, 35, 59, 0.08);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 82px;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: -0.04em;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--peach), #f0b18b);
  color: var(--white);
  box-shadow: var(--shadow);
}

.main-nav {
  display: flex;
  gap: 1.6rem;
  color: var(--muted);
  font-weight: 600;
}

.main-nav a:hover,
.footer-links a:hover {
  color: var(--midnight);
}

.nav-btn,
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.nav-btn {
  padding: 0.8rem 1.2rem;
  background: var(--midnight-soft);
  color: var(--white);
}

.btn {
  padding: 0.95rem 1.5rem;
}

.btn:hover,
.nav-btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--peach), #e5a17f);
  color: var(--white);
  box-shadow: 0 18px 35px rgba(217, 128, 95, 0.24);
}

.btn-secondary {
  background: #edf1f5;
  color: var(--midnight);
}

.hero {
  background:
    linear-gradient(135deg, rgba(19, 35, 59, 0.86), rgba(19, 35, 59, 0.68)),
    url('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
  color: var(--white);
  padding: 5.5rem 0 4rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  align-items: center;
}

.eyebrow {
  margin: 0 0 0.8rem;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.eyebrow.accent {
  color: var(--peach);
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.6rem, 5vw, 5rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
  max-width: 640px;
}

.lead {
  margin-top: 1.25rem;
  max-width: 620px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.05rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.hero-stats {
  list-style: none;
  margin: 2.2rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 1rem;
}

.hero-stats li {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 0.5rem 0 0;
  color: rgba(255, 255, 255, 0.8);
}

.hero-stats strong {
  font-size: 1.7rem;
  color: var(--white);
}

.hero-visual {
  display: grid;
  gap: 1.1rem;
}

.visual-card {
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.visual-card.large {
  min-height: 310px;
  background:
    linear-gradient(180deg, rgba(19, 35, 59, 0.20), rgba(19, 35, 59, 0.52)),
    url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.badge {
  display: inline-flex;
  align-self: flex-start;
  padding: 0.5rem 0.8rem;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  font-weight: 700;
  backdrop-filter: blur(10px);
}

.visual-card.large h3 {
  margin: 1rem 0 0;
  font-size: clamp(1.5rem, 2vw, 2.4rem);
  line-height: 1.2;
  max-width: 310px;
}

.visual-card.small {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--white);
}

.visual-card.small p,
.visual-card.small strong {
  margin: 0;
}

.brands {
  background: #f4efe9;
  border-bottom: 1px solid rgba(19, 35, 59, 0.08);
}

.brands-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 88px;
  color: var(--muted);
  font-weight: 700;
}

.brand-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 2rem;
  color: var(--text);
}

.section {
  padding: 5rem 0;
}

.alt-bg {
  background: #f7f5f2;
}

.split-section {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 2rem;
  align-items: center;
}

.section-copy h2,
.section-heading h2,
.contact-info h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.15;
  letter-spacing: -0.05em;
}

.section-copy p {
  color: var(--muted);
}

.feature-list {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.feature-list div {
  display: grid;
  gap: 0.2rem;
  padding: 1rem 1.1rem;
  border-radius: 16px;
  background: #f6f2ec;
  border: 1px solid rgba(19, 35, 59, 0.06);
}

.feature-list strong {
  color: var(--midnight);
}

.feature-list span {
  color: var(--muted);
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-panel {
  width: min(100%, 520px);
  min-height: 500px;
  border-radius: 26px;
  background:
    linear-gradient(180deg, rgba(19, 35, 59, 0.18), rgba(19, 35, 59, 0.45)),
    url('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  color: var(--white);
}

.panel-top,
.panel-bottom {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1rem;
  margin: 0 auto;
  width: 88%;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
}

.panel-top span,
.panel-bottom span {
  color: rgba(255, 255, 255, 0.85);
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading.center {
  text-align: center;
}

.product-grid,
.process-grid,
.testimonial-grid,
.metrics-grid {
  display: grid;
  gap: 1.4rem;
}

.product-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.product-card {
  background: var(--white);
  border: 1px solid rgba(19, 35, 59, 0.06);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(19, 35, 59, 0.06);
}

.product-image {
  height: 240px;
  background-size: cover;
  background-position: center;
}

.fabric-one {
  background-image: url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80');
}

.fabric-two {
  background-image: url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80');
}

.fabric-three {
  background-image: url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80');
}

.product-body {
  padding: 1.35rem 1.2rem 1.5rem;
}

.tag {
  margin: 0 0 0.6rem;
  color: var(--peach);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.product-body h3 {
  margin: 0 0 0.5rem;
  font-size: 1.4rem;
}

.product-body p {
  margin: 0;
  color: var(--muted);
}

.process-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.process-step {
  background: var(--panel);
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid rgba(19, 35, 59, 0.04);
}

.process-step span {
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(217, 128, 95, 0.12);
  color: var(--peach);
  font-weight: 800;
}

.process-step h3 {
  margin: 1rem 0 0.5rem;
  font-size: 1.2rem;
}

.process-step p {
  margin: 0;
  color: var(--muted);
}

.metrics {
  background: var(--midnight);
  color: var(--white);
}

.metrics-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.metrics-grid div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 140px;
  text-align: center;
}

.metrics-grid strong {
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1;
}

.metrics-grid span {
  color: rgba(255, 255, 255, 0.8);
}

.testimonial-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.testimonial-card {
  background: var(--white);
  border-radius: 22px;
  border: 1px solid rgba(19, 35, 59, 0.06);
  padding: 1.5rem;
  box-shadow: 0 18px 40px rgba(19, 35, 59, 0.06);
}

.testimonial-card p {
  margin: 0 0 1.25rem;
  color: var(--muted);
}

.person {
  display: flex;
  flex-direction: column;
}

.person span {
  color: var(--muted);
  font-size: 0.9rem;
}

.contact-wrap {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
  align-items: start;
}

.contact-info p,
.contact-info li {
  color: var(--muted);
}

.contact-info ul {
  margin: 1.2rem 0 0;
  padding-left: 1.1rem;
  line-height: 2;
}

.contact-form {
  background: #f8f4ee;
  border: 1px solid rgba(19, 35, 59, 0.06);
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: 0 18px 40px rgba(19, 35, 59, 0.05);
}

.contact-form label {
  display: block;
  margin-bottom: 1rem;
  color: var(--midnight);
  font-weight: 700;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  margin-top: 0.45rem;
  padding: 0.9rem 1rem;
  border: 1px solid rgba(19, 35, 59, 0.12);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--text);
}

.contact-form textarea {
  resize: vertical;
  min-height: 130px;
}

.site-footer {
  background: var(--midnight);
  color: rgba(255, 255, 255, 0.8);
  padding: 1.4rem 0;
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.foot-brand {
  color: var(--white);
}

.footer-links {
  display: flex;
  gap: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 920px) {
  .hero-grid,
  .split-section,
  .contact-wrap,
  .product-grid,
  .testimonial-grid,
  .process-grid,
  .metrics-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-grid,
  .split-section,
  .contact-wrap {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
  }

  .brands-row,
  .footer-wrap {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 1rem 0;
  }
}

@media (max-width: 620px) {
  .topbar-inner {
    flex-direction: column;
    justify-content: center;
    min-height: 60px;
    padding: 0.5rem 0;
  }

  .hero-stats,
  .product-grid,
  .process-grid,
  .testimonial-grid,
  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .nav-wrap {
    min-height: 72px;
  }

  .nav-btn {
    display: none;
  }

  .hero {
    padding-top: 4.2rem;
  }

  .hero-copy h1 {
    font-size: 2.7rem;
  }
}
