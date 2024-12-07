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
                    <p>Sister Michelle Craig taught: “Latter-day Saints come in many shapes and sizes, but ‘all are alike unto God’—'black and white, bond and free, male and female,’ single and married, rich and poor, young and old, lifelong member and recent convert. No matter who you are or what you’re dealing with, you are invited to the Lord’s table” (“Spiritual Capacity,” Ensign or Liahona, Nov. 2019, 21).</p>
                    <p>Sister Joy D. Jones taught: “The Spirit will confirm to each of us individually our divine worth. Truly knowing that you are a [child] of God will affect every aspect of your life and guide you in the service you render each day. President Spencer W. Kimball explained in these glorious words:
“‘God is your Father. He loves you. He and your mother in heaven value you beyond any measure. … You are unique. One of a kind, made of the eternal intelligence which gives you claim upon eternal life.
“‘Let there be no question in your mind about your value as an individual. The whole intent of the gospel plan is to provide an opportunity for each of you to reach your fullest potential, which is eternal progression and the possibility of godhood’ [“Privileges and Responsibilities of Sisters,” Ensign, Nov. 1978, 105].… As the Savior lifts us to higher ground, we can see more clearly not only who we are but also that we are closer to Him than we ever imagined.” (“Value beyond Measure,” Ensign or Liahona, Nov. 2017, 14, 15, emphasis removed).</p>
                <p>Elder Hirst: "God's love is where, as circles on a Venn diagram, we all overlap. Whichever parts of us seem different, His love is where we find togetherness" (October 2024 General Conference).</p>
                </div>
            </section>
            <section>
                <h2>Scriptures</h2>
                <div className="scriptures-placeholder">
                    <p>2 Nephi 26:33: "He inviteth them all to come unto him and partake of his goodness; and he denieth none that come unto him, black and white, bond and free, male and female; and he remembereth the heathen; and all are alike unto God, both Jew and Gentile."</p>
                </div>
            </section>
            <section>
                <h2>Stories</h2>
                <div className="stories-placeholder">
                    <p>Email us at fake_email@gmail.com to add your story!</p>
                </div>
            </section>
            <section>
                <h2>Inspiration</h2>
                <div className="api-placeholder">
                    <p>Cute cat photos are always necessary.</p>
                    <img src={imageUrl} width={300}/>
                </div>
            </section>
        </main>
  );
}