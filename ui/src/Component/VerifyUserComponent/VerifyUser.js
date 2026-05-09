<<<<<<< HEAD
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { userApi } from '../../apiurl';
import axios from 'axios';

function VerifyUser() {
  const params = useParams();

  useEffect(() => {
    axios.get(userApi + "fetch?email=" + params.email).then((response) => {
      if (response.data[0]?.__v === 0) {
        const updateDetails = {
          condition_obj: { email: params.email },
          content_obj: { status: 1, __v: 1 }
        };
        axios.patch(userApi + "update", updateDetails).then(() => {
          console.log("User verified...");
          // Hard reload after update
          window.location.href = "/login"; // or use replace() to prevent back navigation
        });
      } else {
        // Already verified
        window.location.href = "/login";
      }
    });
  }, [params.email]);

  return (
    <div className="verify-donor-container">
      <h2>Verifying your account...</h2>
    </div>
  );
}

export default VerifyUser;
=======
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { userApi } from '../../apiurl';
import axios from 'axios';

function VerifyUser() {
  const params = useParams();

  useEffect(() => {
    axios.get(userApi + "fetch?email=" + params.email).then((response) => {
      if (response.data[0]?.__v === 0) {
        const updateDetails = {
          condition_obj: { email: params.email },
          content_obj: { status: 1, __v: 1 }
        };
        axios.patch(userApi + "update", updateDetails).then(() => {
          console.log("User verified...");
          // Hard reload after update
          window.location.href = "/login"; // or use replace() to prevent back navigation
        });
      } else {
        // Already verified
        window.location.href = "/login";
      }
    });
  }, [params.email]);

  return (
    <div className="verify-donor-container">
      <h2>Verifying your account...</h2>
    </div>
  );
}

export default VerifyUser;
>>>>>>> dddd640725d6965bfe90ae355c0707a5a58cdc01
