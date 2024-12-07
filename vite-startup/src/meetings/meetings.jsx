import React from 'react';
import '../app.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { GameEvent, GameNotifier } from './gameNotifier';

export function Meetings() {
  const [not_clicked, clicked] = React.useState('Click the button to confirm if you are attending the meeting');
  const navigate = useNavigate();

  function meetingAttendance() {
    console.log('Button clicked');
    fetch('/api/attending')
        .then((response) => response.json())
        .then((attendance) => {
            console.log(attendance);
            console.log(attendance.attending);
            clicked(attendance.attending);
        });
    // Let other players know a new game has started
    GameNotifier.broadcastEvent(`${localStorage.getItem('username')}`, GameEvent.Start, {});
    console.log('GameNotifier.broadcastEvent');
    }

    const [events, setEvent] = React.useState([]);

    React.useEffect(() => {
    GameNotifier.addHandler(handleGameEvent);

    return () => {
        GameNotifier.removeHandler(handleGameEvent);
    };
    });

    function handleGameEvent(event) {
    setEvent([...events, event]);
    }

    function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
        let message = ` is attending!`;

        messageArray.push(
        <div key={i} className='event'>
            <span className={'player-event'}>{event.from.split('@')[0]}</span>
            {message}
        </div>
        );
    }
    return messageArray;
    }

    function logout() {
        fetch(`/api/auth/logout`, {
          method: 'delete',
        })
          .catch(() => {
            // Logout failed. Assuming offline
          })
          .finally(() => {
            localStorage.removeItem('username');
            console.log(localStorage.getItem('username'));
            navigate('/login');
          });
      }

  return (
    <main>
        <Button onClick={logout}>Logout</Button>
        <Button onClick={meetingAttendance}>Yes!</Button>
        <div> {not_clicked} </div>
        <div>{createMessageArray()}</div>
        <section>
            <h2>Meetings</h2>
            <div className="meetings-placeholder">
                {/* Placeholder for meeting link */}
                <p>zoom.link/meeting-link/</p>
                <p>Meetings held each Thursday at 8pm MST.</p>
            </div>
        </section>
        {/* <section>
            <h2>June 2024 Calendar</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>1<br />Happy Pride Month!</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>3</td>
                        <td>4<br />6pm: Trans Come Follow Me</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12<br />7pm: Game Night</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </section> */}
    </main>
  );
}