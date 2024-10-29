import { useRef } from 'react';
import { AddCardContainer } from 'formwidget';

export default function OptionsRoute() {
  const addCardRef = useRef();

  const handleFormSubmit = (paymentMethod) => {
    // Handle the payment method in the parent project
    console.log('handleFormSubmit');
    console.log('Payment Method:', paymentMethod);
    // You can also add logic to send paymentMethod to your server here
  };

  const handleButtonClick = () => {
    console.log(addCardRef);
    if (addCardRef.current) {
      addCardRef.current.submitForm();
    }
  };
  return (
    <main>
      <AddCardContainer ref={addCardRef} submitHandler={handleFormSubmit} />
      <button onClick={handleButtonClick}>Submit Payment</button>
    </main>
  );
}
