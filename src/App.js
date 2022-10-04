
import './App.css';
import React, { useState } from 'react';
import InputForm from './components/InputForm';

function App() {

  const [data, setData] = useState(
    {
      carCost: 3300000,
      initialPayment: 13,
      leasingLimit: 60,
    }
  )

  const handleChange = (evt) => {
    setData(prevData => {
      return {
        ...prevData, [evt.target.name]: evt.target.value
      }
    })
  }

  const handleSubmit = () => {

  }


  // Ежемесячный платеж (из ТЗ)
  const monthlyPay =
    Math.ceil((data.carCost - data.initialPayment) *
      ((0.035 * Math.pow((1 + 0.035), data.leasingLimit)) /
        (Math.pow((1 + 0.035), data.leasingLimit) - 1)))

  // Полная сумма лизинга
  const totalLeasingSum = data.initialPayment + data.leasingLimit * monthlyPay

  // Проверка формы со стороны клиента перед отправкой на бэк
  const checkForm =
    (data.carCost >= 1000000 && data.carCost <= 6000000) &&
    (data.initialPayment >= 10 && data.initialPayment <= 60) &&
    (data.leasingLimit >= 1 && data.leasingLimit <= 60)


  return (
    <div className="App">
      <form className='leasing-form' onSubmit={handleSubmit}>
        <h1 className='leasing-form__title'>
          Рассчитайте стоимость автомобиля в лизинг
        </h1>
        <InputForm
          title='Стоимость автомобиля'
          name='carCost'
          value={data.carCost}
          initialValue='Руб.'
          handleChange={handleChange}
          min={1000000}
          max={6000000}
        />
        <InputForm
          title='Первоначальный взнос'
          name='initialPayment'
          value={data.initialPayment}
          carCost={data.carCost}
          initialValue='%'
          handleChange={handleChange}
          min={10}
          max={60}
        />
        <InputForm
          title='Срок лизинга'
          name='leasingLimit'
          value={data.leasingLimit}
          initialValue='мес.'
          handleChange={handleChange}
          min={1}
          max={60}
        />
      </form>
    </div>
  );
}

export default App;
