const Signup = () => {
  return (
    <section className='rounded bg-[#0F0F0F] p-8 w-1/2'>
      <h1 className='text-lg font-bold text-white '>Make your account</h1>
      <p className='text-sm text-gray'>
        Create a new account and explore the community
      </p>
      <p className='my-6 w-full border border-gray'> </p>
      <form className='flex flex-col bg-[#0F0F0F] text-gray placeholder:text-sm'>
        <div className='mt-4 flex w-full'>
          <p className=' '>
            <label htmlFor='name' className=' block'>
              Name
            </label>
            <input
              type='text'
              name='name'
              className='mt-2 mr-4 rounded bg-[#1D1D1D]  py-2 px-4'
              placeholder='name'
            />
          </p>
          <p className=' '>
            <label htmlFor='username' className=' block'>
              Username
            </label>
            <input
              type='text'
              className='mt-2 rounded bg-[#1D1D1D] py-2  px-4'
              placeholder='username'
              name='username'
            />
          </p>
        </div>
        <label htmlFor='email' className='mt-4 block'>
          Email
        </label>
        <input
          type='email'
          name='email'
          className='mt-2 rounded bg-[#1D1D1D] py-2  px-4'
          placeholder='email'
        />
        <label htmlFor='cpassword' className='mt-4 block'>
          Password
        </label>
        <input
          type='password'
          className='mt-2 rounded bg-[#1D1D1D] py-2  px-4'
          placeholder='confirm password'
          name='cpassword'
        />
        <label htmlFor='password' className='mt-4 block'>
          Password
        </label>
        <input
          type='password'
          className='mt-2 rounded bg-[#1D1D1D] py-2  px-4'
          placeholder='password'
          name='password'
        />
        <p className='mt-4'>
          <input
            type='checkbox'
            className='mt-2 mr-2 inline rounded bg-[#1D1D1D] py-2 px-4'
            name='checkbox'
          />
          <label htmlFor='checkbox' className=''>
            Creating an account means you’re okay with our <br />{' '}
            <span className='text-primary'>Terms of Service</span> &{' '}
            <span className='text-primary'>Privacy Policy</span>
          </label>
        </p>
        <button className='mt-4 w-full rounded bg-primary p-2 '>Sign up</button>
      </form>
    </section>
  );
};

export default Signup;
