import React, { useEffect } from 'react';
import '../app.css';

export function Resources() {
    const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  
    useEffect(() => {
      fetch('https://api.thecatapi.com/v1/images/search')
        .then((response) => response.json())
        .then((data) => {
          console.log("cat");
          console.log(data);
          setImageUrl(data[0].url);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

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
                    <img src={imageUrl} />
                </div>
            </section>
        </main>
  );
}