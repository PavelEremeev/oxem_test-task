import './App.css';

import React, { useState } from 'react';
import InputForm from './components/InputForm';
import LeasingForm from './components/LeasingForm';

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

  const handleSubmit = (evt) => {
    evt.preventDefault()


    setTimeout(() => {
      fetch("https://eoj3r7f3r4ef6v4.m.pipedream.net/", {
        ...data,
        monthlyPay,
        totalLeasingSum
      }).then((res) => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }, 3000)
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
      <LeasingForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        data={data}
        totalLeasingSum={totalLeasingSum}
        monthlyPay={monthlyPay}
      />
    </div>
  );
}

export default App;
