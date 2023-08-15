import React, { useState } from 'react';

const FormExample: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Thực hiện xử lý form ở đây, ví dụ: gửi dữ liệu lên server
    console.log('Form data:', formData);
  };

  return (
    <div>
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormExample;

// import { log } from 'console';
// import React, { useState } from 'react';

// const SimpleForm: React.FC = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(event.target.value);
    
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     alert(`You submitted: ${inputValue}`);
//   };

//   return (
//     <div>
//       <h1>Simple Form Example</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="inputField">Input:</label>
//           <input
//             type="text"
//             id="inputField"
//             value={inputValue}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default SimpleForm;
