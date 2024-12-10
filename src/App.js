import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Contact from './contact';
import TourLocations from './tourlocations';
import BuyTickets from './buy-tickets';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <div className="Home">
                <h1>Welcome to Our Tour Website</h1>
                <p>Explore amazing tour destinations and experiences!</p>

                {/* Carl Wheezer content begins here */}
                <h2>Fun Fact: Carl Wheezer - Singer Extraordinaire!</h2>
                <p>
                  Carl Wheezer, is known for his quirky personality
                  and distinctive voice. But did you know that Carl is also a talented singer? While his musical
                  talents aren't a major focus in the show, his unique vocal style and comedic performances have
                  garnered attention. In fact, Carl's singing style is often humorous, but it has a charm all its own.
                </p>
                <p>
                  Carl has also made a name for himself in internet culture, with many fans celebrating his high-pitched,
                  earnest singing. From his renditions of *"Funky Town"* to his heartfelt performances of songs like
                  *"Twinkle Twinkle Little Star"*, Carl Wheezer's musical contributions to the *Jimmy Neutron* universe
                  are beloved by fans.
                </p>
                <p>
                  Despite his somewhat neurotic and sometimes over-the-top persona, Carl's moments of singing have added
                  an endearing quality to his character. So, next time you hear Carl belt out a song, remember: he’s
                  not just the neurotic sidekick, he's also a singer with some real heart!
                </p>
                {/* End of Carl Wheezer content */}

              </div>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tourlocations" element={<TourLocations />} />
            <Route path="/buytickets" element={<BuyTickets />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
