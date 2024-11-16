import React from 'react';
import '../app.css';

export function Resources() {
  return (
    <main>
        <section>
            <h2>Church Statements</h2>
            <div className="statements-placeholder">
                <p>Statements will be placed here</p>
                {/* positive, negative, both?
                Belonging talks from Oct 2024 conference */}
            </div>
        </section>
        <section>
            <h2>Scriptures</h2>
            <div className="scriptures-placeholder">
                <p>Scriptures will be placed here</p>
            </div>
        </section>
        <section>
            <h2>Stories</h2>
            <div className="stories-placeholder">
                <p>Stories will be placed here</p>
            </div>
        </section>
        <section>
            <h2>Inspiration</h2>
            <div className="api-placeholder">
                <p>Inspirational quotes from 3rd-party API will be placed here</p>
            </div>
        </section>
    </main>
  );
}