import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SubjectCard.module.css'

/**
 * SubjectCard — reusable card for each subject on the homepage.
 *
 * Props:
 *   subject: object from src/data/subjects.js
 */
function SubjectCard({ subject }) {
  const navigate = useNavigate()

  return (
    <div
      className={styles.card}
      style={{ '--card-accent': subject.color }}
      onClick={() => navigate(subject.route)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(subject.route)}
      aria-label={`Open ${subject.title} resources`}
    >
      {/* Top glow line */}
      <div className={styles.glowLine} />

      <div className={styles.header}>
        <span className={styles.icon}>{subject.icon}</span>
        <span className={styles.tag}>{subject.tag}</span>
      </div>

      <h3 className={styles.title}>{subject.title}</h3>
      <p className={styles.fullTitle}>{subject.fullTitle}</p>
      <p className={styles.description}>{subject.description}</p>

      <button
        className={styles.btn}
        onClick={(e) => {
          e.stopPropagation()
          navigate(subject.route)
        }}
      >
        Open Resources
        <span className={styles.arrow}>→</span>
      </button>
    </div>
  )
}

export default SubjectCard
