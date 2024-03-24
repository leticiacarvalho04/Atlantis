import React from 'react';

export default class LoginPage extends React.Component {
    render() {
        return (
            <div className='h-screen flex flex-col justify-center items-center bg-blue-200'>
                <h3 className='mb-4'>Bem vindos ao parque</h3>
                <h1 className="mb-8 text-5xl font-semibold" style={{ fontFamily: "'Satisfy', cursive" }}>Atlantis</h1>
                <form className='bg-blue-100 w-100 p-20 rounded-lg border border-blue-300'>
                    <label className='block mb-4'>
                        Username:
                        <input type="text" className='w-full border border-blue-300 rounded-md p-2 focus:outline-none focus:border-blue-500' />
                    </label>
                    <label className='block mb-4'>
                        Password:
                        <input type="password" className='w-full border border-blue-300 rounded-md p-2 focus:outline-none focus:border-blue-500' />
                    </label>
                    <input type="submit" value="Log In" className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-700' />
                </form>
            </div>
        );
    }
}
