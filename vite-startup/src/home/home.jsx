import React from 'react';
import '../app.css';

export function Home() {
  return (
    <main>
        <section>
            <h2>Introduction</h2>
            <div className="intro-placeholder">
                {/* Placeholder for introduction */}
                <p>The August 2024 updates to the General Handbook of the Church of Jesus Christ of Latter-day Saints was injurious to transgender members. Trans members already struggle to find a place of belonging within the Church, but these policies have removed many of the small things that trans members had that helped them feel welcome. The goal of this website is to provide resources that help trans latter-day saints navigate this difficult space, as well as provide a way for them to connect with other trans members online.</p>
            </div>
        </section>
        <section>
            <h2>About</h2>
            <div className="about-placeholder">
                {/* Placeholder for about text */}
                <p>Visit the resources page to read more about the policy changes. Here you will also find inspiration from the scriptures, church leaders, and other transgender latter-day saints. If you are interested in joining any in-person or online meetings, create an account and login to access the online meeting link.</p>
            </div>
        </section>
    </main>
  );
}