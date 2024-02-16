import React from 'react';
import { Navigate, useParams} from 'react-router-dom';
import { useQuery, useMutation} from '@apollo/client';
import {GET_ME} from '../utils/queries'
import Auth from '../utils/auth'

const Profile = () => {
    const { firstName: userParam } = useParams();
    const {loading, data} = useQuery(GET_ME)

    const user = data?.me;
    if (loading) {
        return  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-400">
            <h1 class="text-2xl">LOADING</h1>
      </div>;
    }
    if (!Auth.loggedIn()) {
        return <Navigate to="/login" />;
    }

    if (!user) {
        return <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-400">
        <h1 class="text-2xl">Sorry No User Found</h1>
  </div>;
    }

    if (userParam && user.firstName !== userParam) {
        return <Navigate to="/" />;
    }


    return (
<body class="bg-slate-400 px-6 py-12 lg:px-8">
  <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
    <h2 class="text-center text-2xl font-semibold mt-3">{user.firstName} {user.lastName}</h2>
    <p class="text-center text-gray-600 mt-1">contact: {user.mobile}</p>
    <div class="flex justify-center mt-5">
      <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">Twitter</a>
      <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">LinkedIn</a>
      <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
    </div>
    <div class="mt-5">
      <h3 class="text-xl font-semibold">Orders</h3>
    <p class="text-gray-600 mt-2">hello </p>
      
    </div>
  </div>
</body>
    )
}

export default Profile;