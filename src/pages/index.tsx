import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div
          className="grid"
        >
          <div />
          <div>
            <p>
              Herzlich Willkommen beim MapProxy im Praxiseinsatz Workshop.
              Dieser Workshop wurde für die Verwendung auf der OSGeo-Live 15.0 DVD entwickelt und soll Ihnen einen umfassenden Überblick über die Funktionen von MapProxy geben. Bitte stellen Sie sicher, dass Sie die Schritte zum Setup ausgeführt haben, um einen reibungslosen Ablauf zu gewährleisten.
            </p>
            <h2>Autoren:</h2>
            <ul>
              <li>
                Hannes Blitza (blitza@terrestris.de)
              </li>
              <li>
                Daniel Koch (koch@terrestris.de)
              </li>
            </ul>
            <img src="img/mapproxy-overview.png" alt="MapProxy Overview" />
          </div>
          <div />
        </div>
      </main>
    </Layout>
  );
}
