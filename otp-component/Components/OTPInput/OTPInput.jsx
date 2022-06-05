import styles from './OTPInput.module.css';
import { useState, useEffect } from 'react';
export default function OTPInput({ number, setCode, submitFunc }) {
	// State:
	const [otpInputs, setOtpInputs] = useState([]);
	const [codeLength, setCodeLength] = useState(0);

	//Function:
	//When component is initialized, set number of inputs
	useEffect(() => {
		setOtpInputs(Array(number).fill(''));
	}, []);

	//When otpInputs changes, set code and codeLength
	useEffect(() => {
		setCode(otpInputs.join(''));
		setCodeLength(otpInputs.filter(input => input !== '').length);
	}, [otpInputs]);

	// Run submit function when codeLength equals the number of inputs
	useEffect(() => {
		if (codeLength === number) {
			submitFunc();
		}
	}, [codeLength]);

	// Handle input change event -- add value to otpInputs and move to next input or previous input
	const handleChange = (e, index) => {
		setOtpInputs(otpInputs.map((input, i) => (i === index ? e.target.value : input)));
		if (e.nativeEvent.inputType === 'deleteContentBackward' && e.target.previousSibling) {
			e.target.previousSibling.focus();
			return;
		}
		if (e.target.nextSibling && e.nativeEvent.inputType !== 'deleteContentBackward') {
			e.target.nextSibling.focus();
		}
	};

	// Handle paste event -- Pastes value into each input field
	const handlePaste = e => {
		e.stopPropagation();
		e.preventDefault();
		const pastedOTP = e.clipboardData.getData('text/plain');
		if (pastedOTP.length !== number) {
			return;
		}
		setOtpInputs(pastedOTP.split(''));
		e.target.parentNode.lastChild.focus();
	};

	return (
		<>
			<div className={styles.OTPInput}>
				<form>
					<div className={styles.InputContainer}>
						{otpInputs.map((input, index) => (
							<input
								type={'text'}
								onPaste={e => handlePaste(e, index)}
								onChange={e => handleChange(e, index)}
								maxLength={1}
								key={index}
								value={input}
							/>
						))}
					</div>
					<button>
						<span>Submit</span>
					</button>
				</form>
			</div>

			<style jsx>{``}</style>
		</>
	);
}
