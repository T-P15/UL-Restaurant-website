import React, {useState} from 'react';
import { Navigate, useParams, redirect} from 'react-router-dom';
import { useQuery, useMutation} from '@apollo/client';
import {GET_ME} from '../utils/queries'
import Auth from '../utils/auth'
import MobileUpdateModal from '../components/updatemobilemodal'
import {UPDATE_USER, DELETE_USER} from '../utils/mutations'


const Profile = () => {
    const { firstName: userParam } = useParams();
    const {loading, data} = useQuery(GET_ME)
    const [isMobileModalOpen, setMobileModalOpen] = useState(false);
    const [deleteUser] = useMutation(DELETE_USER)

    const [updateMobile] = useMutation(UPDATE_USER, {
      onCompleted: (data) => {
        console.log('Mobile updated:', data.updateMobile);
      },
      onError: (error) => {
        console.error('Error updating mobile:', error.message);
      },
      refetchQueries: [{ query: GET_ME }],
    });


    const handleUpdateMobile = (newMobile) => {
        updateMobile({
          variables: { mobile: newMobile },
        });
      };

    const user = data?.me;

    if (loading) {
        return  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-400">
            <h1 class="text-2xl">LOADING</h1>
      </div>;
    }
    if (!Auth.loggedIn()) {
        return redirect("/login");
    }

    if (!user) {
        return <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-400">
        <h1 class="text-2xl">Sorry No User Found</h1>
  </div>;
    }

    if (userParam && user.firstName !== userParam) {
        return <Navigate to="/" />;
    }

    const handleUserDeletion = async () => {
        
        try {
            await deleteUser({
                variables: {
                    _id: user._id
                }
            });
            
        } catch (err) {
        console.error(err)
    }};

    return (
<body class="bg-slate-400 px-6 py-12 lg:px-8 ">
  <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5 ">
    <h1 class="text-center text-2xl font-semibold mt-3">WELCOME</h1>
    <h2 class="text-center text-2xl font-semibold mt-3">{user.firstName} {user.lastName}</h2>
    <p class="text-center text-gray-600 mt-1">contact: {user.mobile}</p>
    {/* Open mobile update modal */}
    
    <button
        className="flex  w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => setMobileModalOpen(true)}
      >
        Update Mobile
      </button>
     
      {/* Mobile update modal */}
      <MobileUpdateModal
        isOpen={isMobileModalOpen}
        onClose={() => setMobileModalOpen(false)}
        onUpdateMobile={handleUpdateMobile}
      />

    <div class="mt-5">
      <h3 class="text-2xl font-semibold text-center">Orders</h3>
      {user.orders.map(order => (
        <div class="border-b border-solid border-red-500" key={order._id}>
          <h3 class="p-3">ORDER ID: {order._id}</h3>
          {order.menuitem ? (
            <div>
              <h4 class="p-3">Order Details:</h4>
              <p class="text-center p-5 font-bold text-lg text-red-500"> {order.menuitem.name}</p>
              <p class="italic"> {order.menuitem.description}</p>
              <p class = "text-center p-3">Price: ${order.menuitem.price}</p>
            </div>
          ) : (
            <p>No menuitem details available for this order.</p>
          )} </div>
          ))}
      
    </div>
    <button
        className="flex  w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleUserDeletion}
      >
        Delete Account Permanently
      </button>
  </div>
</body>
    )
}

export default Profile;