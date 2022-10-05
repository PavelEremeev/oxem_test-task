import React from 'react'
import InputForm from './InputForm'

import './LeasingForm.css'

export default function LeasingForm({ handleSubmit, handleChange, data, totalLeasingSum, monthlyPay }) {



    return (
        <form className='leasing-form' onSubmit={handleSubmit}>
            <h1 className='leasing-form__title'>
                Рассчитайте стоимость автомобиля в лизинг
            </h1>
            <div className='leasing-form__wrapper-input'>
                <InputForm
                    title='Стоимость автомобиля'
                    name='carCost'
                    value={data.carCost}
                    typeValue='&#8381;'
                    handleChange={handleChange}
                    min={1000000}
                    max={6000000}
                />
                <InputForm
                    title='Первоначальный взнос'
                    name='initialPayment'
                    value={data.initialPayment}
                    carCost={data.carCost}
                    typeValue='%'
                    handleChange={handleChange}
                    min={10}
                    max={60}
                />
                <InputForm
                    title='Срок лизинга'
                    name='leasingLimit'
                    value={data.leasingLimit}
                    typeValue='мес.'
                    handleChange={handleChange}
                    min={1}
                    max={60}
                />
            </div>
            <div className='leasing-form__wrapper'>
                <div className='leasing-form__container'>
                    <p className='leasing-form__text'>Сумма договора лизинга</p>
                    <p className='leasing-form__value'>{totalLeasingSum.toLocaleString()} &#8381;</p>
                </div>
                <div className='leasing-form__container'>
                    <p className='leasing-form__text'>Ежемесячный платеж от</p>
                    <p className='leasing-form__value'>{monthlyPay.toLocaleString()} &#8381;</p>
                </div>
                <button className='leasing-form__button'>Оставить заявку</button>
            </div>
        </form>

    )
}
