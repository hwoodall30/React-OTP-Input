import OTPInput from '../Components/OTPInput/OTPInput';
import { useState } from 'react';

export default function App() {
	const [code, setCode] = useState('');

	const submitOTP = otp => {
		// API call to verify OTP
		console.log('OTP verified');
	};

	return (
		<>
			<div className='App'>
				<OTPInput number={6} code={code} setCode={setCode} submitFunc={submitOTP} />
			</div>

			<style jsx>{`
				.App {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					height: 100vh;
					width: 100vw;
				}
			`}</style>
		</>
	);
}
