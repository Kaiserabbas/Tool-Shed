import React, { useEffect, useState } from 'react';

function FetchActivity() {
  const [data, setData] = useState({
    activity: null,
    type: null,
    participants: null,
  });

  const fetchNewActivity = () => {
    fetch('http://www.boredapi.com/api/activity/')
      .then((resp) => resp.json())
      .then((apiData) => {
        setData({
          activity: apiData.activity,
          type: apiData.type,
          participants: apiData.participants,
        });
      });
  };

  useEffect(() => {
    fetchNewActivity();
  }, []);

  return (
    <div className="activity">
      <h3> Challange yourself with some acitvity</h3>
      <div>
        <button onClick={fetchNewActivity}>Challange youself</button>
      </div>
      <p>
        {' '}
        <strong>Activity: </strong>{' '}
        <strong className="activity-text">
          {data.activity ? data.activity : 'Loading...'}{' '}
        </strong>
      </p>
      <p>
        <strong>Type:</strong> {data.type ? data.type : 'Loading...'}
      </p>
      <p>
        <strong>Participants:</strong>{' '}
        {data.participants ? data.participants : 'Loading...'}
      </p>
    </div>
  );
}
export default FetchActivity;
