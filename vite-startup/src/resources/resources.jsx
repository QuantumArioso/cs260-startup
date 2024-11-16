import React from 'react';
import '../app.css';
import { Button } from 'react-bootstrap';

function handleClick() {
    console.log('Button clicked');
    fetch('/api/test')
        .then((response) => response.json())
        .then((testing) => {
            console.log(testing);
            console.log(testing.test);
        });
}

export function Resources() {
  return (
    <main>
        <Button onClick={handleClick}>Test</Button>
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