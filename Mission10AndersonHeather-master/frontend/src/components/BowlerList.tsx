import { useEffect, useState } from 'react';
import { bowler } from '../types/bowler';

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);
  useEffect(() => {
    const fetchBowlers = async () => {
      const resp = await fetch('http://localhost:5298/BowlingLeague');
      const json = await resp.json();
      setBowlers(json);
    };
    fetchBowlers();
  }, []);
  return (
    <>
      <div className="row">
        <h4>Bowler List</h4>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map(
            (b) =>
              (b.team.teamName === 'Marlins' ||
                b.team.teamName === 'Sharks') && (
                <tr key={b.bowlerId}>
                  <td>
                    {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
                  </td>
                  <td>{b.team.teamName}</td>
                  <td>{b.bowlerAddress}</td>
                  <td>{b.bowlerCity}</td>
                  <td>{b.bowlerState}</td>
                  <td>{b.bowlerZip}</td>
                  <td>{b.bowlerPhoneNumber}</td>
                </tr>
              ),
          )}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
