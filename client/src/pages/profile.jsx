import React from 'react';

const Profile = () => {
    return (
<body class="bg-slate-400 px-6 py-12 lg:px-8">
  <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
    <h2 class="text-center text-2xl font-semibold mt-3">John Doe</h2>
    <p class="text-center text-gray-600 mt-1">Software Engineer</p>
    <div class="flex justify-center mt-5">
      <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">Twitter</a>
      <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">LinkedIn</a>
      <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
    </div>
    <div class="mt-5">
      <h3 class="text-xl font-semibold">Bio</h3>
      <p class="text-gray-600 mt-2">John is a software engineer with over 10 years of experience in developing web and mobile applications. He is skilled in JavaScript, React, and Node.js.</p>
    </div>
  </div>
</body>
    )
}

export default Profile;