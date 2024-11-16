import React from 'react';
import '../app.css';
import { Button } from 'react-bootstrap';

export function Meetings() {
  const [not_clicked, clicked] = React.useState('Click the button to confirm if you are attending the meeting');

  function meetingAttendance() {
    console.log('Button clicked');
    fetch('/api/attending')
        .then((response) => response.json())
        .then((attendance) => {
            console.log(attendance);
            console.log(attendance.attending);
            clicked(attendance.attending);
        });
    }

  return (
    <main>
        <Button onClick={meetingAttendance}>Yes!</Button>
        <div> {not_clicked} </div>
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