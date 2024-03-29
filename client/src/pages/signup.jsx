import React from 'react'
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

  const [userFormData, setUserFormData] = useState({ 
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    password: '', });

    const [addUser, {error, data}] = useMutation(ADD_USER);

    let navigate = useNavigate()

    const routeChange = () =>{
      let path = '/login';
      navigate(path)
    }
    
    

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      

      try {
        const { data } = await addUser({
          variables: { 
            firstName: userFormData.firstname,
            lastName: userFormData.lastname,
            email: userFormData.email,
            mobile: userFormData.mobile,
            password: userFormData.password,
          }
        })
  
        Auth.login(data.addUser.token);

        setUserFormData({
          firstname: '',
          lastname: '',
          email: '',
          mobile: '',
          password: '',
        });

        

      } catch (e) {
        console.error(e);
      }


    };
    


    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-400">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Sign up to place an Order
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-3 shadow-2xl">
            <form id= "sign-up-form" className="space-y-6" onSubmit= {handleFormSubmit}>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="firstname-signup"
                    name='firstname'
                    type="text"
                    onChange={handleInputChange}
                    value={userFormData.firstname}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="lastname-signup"
                    name='lastname'
                    type="text"
                    onChange={handleInputChange}
                    value={userFormData.lastname}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email 
                </label>
                <div className="mt-2">
                  <input
                    id="email-signup"
                    name='email'
                    type="email"
                    autoComplete="email"
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Mobile
                </label>
                <div className="mt-2">
                  <input
                    id="mobile-signup"
                    name="mobile"
                    type="text"
                    onChange={handleInputChange}
                    value={userFormData.mobile}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password-signup"
                    name="password"
                    type="password"
                    placeholder='minimum 5 characters'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              already a member?{' '}
            </p>
            <button
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={routeChange}>
                  Login
                </button>
          </div>
        </div>
      </>
    )};
  

    export default Signup