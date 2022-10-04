import React from 'react'

export default function InputForm({ title, value, initialValue, min, max, name, handleChange, carCost }) {

    const initialPayment = carCost / 100 * value

    return (
        <div className='input-form'>
            <h2 className='input-form__title'>{title}</h2>
            <div className='input-form__wrapper'>
                {
                    initialValue != '%' ?
                        <>
                            <input
                                className='input-form__input'
                                type='number'
                                name={name}
                                value={value ? value : min}
                                min={min}
                                max={max}
                                onChange={(evt) => handleChange(evt)}
                            />
                            <p className='input-form__text'>{initialValue}</p>
                        </> :
                        <>
                            <p className='input-form__initial-payment'>{initialPayment.toString()}</p>
                            <input
                                className='input-form__initial-payment-input'
                                type='number'
                                value={value}
                                min={min}
                                max={max}
                                name={name}
                                onChange={(evt) => handleChange(evt)}
                            />%
                        </>
                }
            </div>
        </div>
    )
}
