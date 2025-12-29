import React from 'react';
import useLanguage from "../../contexts/useLanguage.js";
import { profile } from "../../data/dataSource.js";
import './stats.scss';

const Stats = () => {
  const { translation } = useLanguage();

  const stats = [
    { 
      number: profile.stats.experience, 
      label: translation.stats.experience 
    },
    { 
      number: profile.stats.skills, 
      label: translation.stats.skills 
    },
    { 
      number: profile.stats.projects, 
      label: translation.stats.projects 
    }
  ];

  return (
    <section className="stats-container">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="glass-reflection"></div>
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;