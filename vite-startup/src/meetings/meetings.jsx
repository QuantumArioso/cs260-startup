import React, { useEffect, useState } from 'react';
import '../app.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

/* 
Put WebSocket in here
When someone has clicked the button, the WebSocket will update with the user's attendance
The database will then update the page with the user's attendance
The user's attendance will be displayed in the div for everyone to see
*/

export function Meetings() {
  const [not_clicked, clicked] = React.useState('Click the button to confirm if you are attending the meeting');
  const [wsMessage, setWsMessage] = useState('');
  const navigate = useNavigate();
  let socket;

  useEffect(() => {
    socket = new WebSocket('ws://localhost:9900');

    socket.onmessage = (event) => {
      console.log('received: ', event.data);
      setWsMessage(event.data);
    };

    socket.onopen = () => {
      socket.send('I am listening');
    };

    return () => {
      socket.close();
    };
  }, []);

  function meetingAttendance() {
    console.log('Button clicked');
    if (socket.readyState === WebSocket.OPEN) {
      socket.send('Meeting attendance confirmed');
    } else {
      console.log('WebSocket is not open');
    }
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
        <div> {wsMessage} </div>
        {/* Websocket will be used on this page to update the link and calendar events in real time from the users with those permissions
        This page will store the calendar events in the database */} 
        <section>
            <h2>Meetings</h2>
            <div className="meetings-placeholder">
                {/* Placeholder for meeting link */}
                <p>Meeting link will be placed here</p>
            </div>
        </section>
        <section>
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
        </section>
    </main>
  );
}