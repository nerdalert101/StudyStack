import React from 'react'
import Navbar from '../components/Navbar'
import BgBlobs from '../components/BgBlobs'
import SubjectCard from '../components/SubjectCard'
import { subjects } from '../data/subjects'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <>
      <BgBlobs />
      <Navbar />

      <div className="page">
        {/* ── HERO ─────────────────────────────── */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>

            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Engineering · CSE · Resources
            </div>

            <h1 className={styles.heroTitle}>
              Engineering
              <br />
              <span className={styles.heroTitleAccent}>Resource Hub</span>
            </h1>

            <p className={styles.heroSub}>
              Notes, playlists, and PYQs organized in one place.
              <br />
              Built for engineers, by engineers.
            </p>

          </div>
        </section>

        {/* ── SUBJECTS SECTION ─────────────────── */}
        <section className={styles.subjects}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Subjects</h2>
              <span className={styles.sectionCount}>
                {subjects.length} available
              </span>
            </div>

            <div className={styles.grid}>
              {subjects.map((subject, i) => (
                <div
                  key={subject.id}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  className={`${styles.cardWrap} fade-up`}
                >
                  <SubjectCard subject={subject} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────── */}
        <footer className={styles.footer}>
          <div className="container">
            <p>Made with ☕ for engineering students</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default HomePage
