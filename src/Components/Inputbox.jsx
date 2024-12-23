import React from 'react'

function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions =[],
    selectCurrency="usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {


   
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}> 
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=> onAmountChange(Number(e.target.value))} // check krta h ki onAmountChange function exist krta h ya nhi
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                        
                        {currencyOptions.map((currency)=>{//Inject krenge currency ko kyuki yeh map kya kaam krega hr ek value ko iss param mei daalkr run krega
                            return(<option key={currency} value={currency}>
                            {currency}  
                            </option>)
                        })}
                </select>
            </div>
        </div>
    );
}


export default Inputbox;
