import axios from 'axios';
import axiosPrivate from '../api/axiosPrivate';

const { useState, useEffect } = require('react');

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      const getAdmin = async () => {
        const { data } = await axiosPrivate.get(
          `https://sleepy-anchorage-47167.herokuapp.com/admin/${email}`
        );
        setAdmin(data);
        setAdminLoading(false);
      };
      getAdmin();
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
