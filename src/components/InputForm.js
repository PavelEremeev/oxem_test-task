import React from 'react';
import './InputForm.css';
import Slider from '@mui/material/Slider';

export default function InputForm({ title, value, typeValue, min, max, name, handleChange, carCost }) {

    const initialPayment = carCost / 100 * value
    const windowWidth = window.innerWidth

    return (
        <div className='input-form'>
            <h2 className='input-form__title'>{title}</h2>
            <div className='input-form__wrapper'>
                {
                    typeValue != '%' ?
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
                            <p className='input-form__text'>{typeValue}</p>
                        </> :
                        <>
                            <input
                                className='input-form__input'
                                type='number'
                                name={name}
                                value={Math.ceil(initialPayment.toString())}
                                min={min}
                                max={max}
                                disabled
                                onChange={(evt) => handleChange(evt)}
                            />
                            <div className='input-form__initial-payment'>
                                <input
                                    className='input-form__initial-payment-input'
                                    type='number'
                                    value={value}
                                    min={min}
                                    max={max}
                                    maxLength='2'
                                    name={name}
                                    onChange={(evt) => handleChange(evt)}
                                />
                                <p className='input-form__text-procent'>%</p>
                            </div>
                        </>
                }
                <Slider

                    size='small'
                    min={min}
                    max={max}
                    name={name}
                    value={value}
                    aria-label='small'
                    valueLabelDisplay='off'
                    onChange={(e) => handleChange(e)}
                    sx={{
                        position: 'absolute',
                        marginTop: '54px',
                        marginRight: 'auto',
                        alignSelf: 'center',
                        width: '90%',
                        color: '#FF9514',

                    }}
                />
            </div>
        </div>
    )
}
