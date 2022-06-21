import { useEffect, useState } from 'react';

const useToken = (user) => {
  const [token, setToken] = useState('');
  // console.log(user);

  useEffect(() => {
    const email = user?.user?.reloadUserInfo.email;
    const name = user?.user?.reloadUserInfo.displayName;
    const img = user?.user?.reloadUserInfo.photoUrl;
    const currentUser = {
      userName: name,
      userImg: img,
      userEmail: email,
    };

    if (email) {
      fetch(`https://sleepy-anchorage-47167.herokuapp.com/user/${email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('inside token ', data);
          const accessToken = data?.token;
          localStorage.setItem('accessToken', accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
