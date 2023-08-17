import React, { useState } from 'react';

function RandomPasswordGenerator() {
  const [password, setPassword] = useState('');

  const generateRandomPassword = () => {
    const length = 12; // Length of the password
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let newPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
  };

  return (
    <div className="password">
      <h3>Random Password Generator</h3>
      <button onClick={generateRandomPassword}>Generate Password</button>
      {password && (
        <p>
          {' '}
          <strong>"{password}"</strong>{' '}
        </p>
      )}
    </div>
  );
}

export default RandomPasswordGenerator;
