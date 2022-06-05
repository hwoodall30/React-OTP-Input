# React OTP Component

## Description

This is a reusable one-time-password component made with React.

---

## Usage

```jsx
import OTPInput from '<path/to/component>';
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
				<OTPInput number={6} setCode={setCode} submitFunc={submitOTP} />
			</div>
		</>
	);
}
```

Props:

-   `number`: number of desired input fields
-   `setCode`: function to set otp code value
-   `submitFunc`: function that is run when code length is equal to number of input fields

---
