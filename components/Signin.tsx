interface Props { 
  onClick:()=>void
}

const Signup = ({onClick}: Props) => {
  return (
    <section className='w-1/2 rounded bg-[#0F0F0F] p-8 '>
      <h1 className='text-lg font-bold text-white '>Sign in to Interio</h1>
      <p className='text-sm text-gray'>
        Fill in the below details and sign in to Interio
      </p>
      <p className='my-6 w-full border border-gray'> </p>
      <form className='flex flex-col bg-[#0F0F0F] text-gray placeholder:text-sm'>
        <label htmlFor='email' className='mt-4 block'>
          Username
        </label>
        <input
          type='email'
          name='email'
          className='mt-2 rounded bg-[#1D1D1D] py-2  px-4'
          placeholder='Type here...'
          autoComplete="true"
        />
        <label htmlFor='password' className='mt-4 block'>
          Password
        </label>
        <input
          type='password'
          className='mt-2 rounded bg-[#1D1D1D] py-2  px-4'
          placeholder='Type here...'
          name='password'
          autoComplete="true"
        />
        <button className='mt-4 w-full rounded bg-primary p-2 '>Sign up</button>
      </form>
        <button className='mt-4 w-full rounded bg-primary p-2 ' onClick={onClick} >Sign up</button>
    </section>
  );
};

export default Signup;
