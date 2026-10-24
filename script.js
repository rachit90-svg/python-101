* {
  box-sizing: border-box;
}

:root {
  --bg: #07111f;
  --bg-soft: #0d1a2d;
  --panel: rgba(18, 32, 53, 0.92);
  --panel-strong: #11253d;
  --text: #edf5ff;
  --muted: #adbed8;
  --line: rgba(255, 255, 255, 0.1);
  --primary: #55c9ff;
  --primary-strong: #2aa9f5;
  --accent: #8ef0d7;
  --warning: #ffd166;
  --shadow: 0 20px 50px rgba(0, 0, 0, 0.28);
  --radius: 20px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(85, 201, 255, 0.18), transparent 30%),
    radial-gradient(circle at right, rgba(142, 240, 215, 0.12), transparent 25%),
    var(--bg);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);
  background: rgba(7, 17, 31, 0.7);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #051221;
  font-size: 1.3rem;
}

.nav-links {
  display: flex;
  gap: 1.3rem;
  color: var(--muted);
  font-size: 0.95rem;
}

.nav-links a:hover {
  color: var(--text);
}

.hero {
  padding: 6rem 0 4rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 2rem;
  align-items: center;
}

.eyebrow {
  margin: 0 0 0.85rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
}

.lead {
  margin: 1.2rem 0 0;
  max-width: 620px;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--muted);
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.3rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #041322;
  box-shadow: var(--shadow);
}

.btn-secondary {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

.hero-stats {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  padding: 0;
  margin: 2rem 0 0;
  color: var(--muted);
}

.hero-stats strong {
  color: var(--text);
}

.hero-card {
  background: linear-gradient(180deg, rgba(17, 37, 61, 0.96), rgba(11, 23, 38, 0.96));
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.card-chip {
  display: inline-block;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: rgba(85, 201, 255, 0.15);
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hero-card h2 {
  margin: 1rem 0 1.1rem;
  font-size: 2rem;
  letter-spacing: -0.05em;
}

.mini-list {
  display: grid;
  gap: 0.8rem;
}

.mini-list div {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.7rem 0.8rem;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.015);
}

.mini-list span {
  display: inline-grid;
  place-items: center;
  width: 30px;
  height: 30px;
  font-weight: 700;
  border-radius: 10px;
  background: rgba(142, 240, 215, 0.15);
  color: var(--accent);
}

.mini-list p {
  margin: 0;
  color: var(--muted);
}

.section {
  padding: 5rem 0;
}

.alt-section {
  background: rgba(11, 20, 32, 0.5);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  letter-spacing: -0.05em;
}

.module-grid,
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
}

.module-card,
.project-card,
.about-cards article {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1.2rem;
  box-shadow: var(--shadow);
}

.module-card {
  min-height: 190px;
}

.module-card .module-badge {
  display: inline-block;
  margin-bottom: 0.8rem;
  background: rgba(142, 240, 215, 0.12);
  color: var(--accent);
  border-radius: 999px;
  padding: 0.4rem 0.7rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.module-card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.18rem;
}

.module-card p {
  margin: 0 0 0.9rem;
  line-height: 1.6;
  color: var(--muted);
}

.module-card ul {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--text);
  line-height: 1.8;
}

.project-card {
  min-height: 120px;
}

.project-card span {
  display: inline-block;
  margin-bottom: 0.8rem;
  font-size: 1.5rem;
}

.project-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
}

.project-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
}

.about-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 1.5rem;
  align-items: start;
}

.about-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.about-cards h3 {
  margin-top: 0;
  font-size: 1.15rem;
}

.about-cards p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.site-footer {
  border-top: 1px solid var(--line);
  padding: 1.5rem 0 2.5rem;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: var(--muted);
}

.footer-inner a {
  color: var(--primary);
  font-weight: 600;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0.6rem;
  }

  .hero-grid,
  .about-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 4rem;
  }

  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
