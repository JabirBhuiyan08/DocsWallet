import { useState } from 'react';

const Calculator = () => {
    const [display, setDisplay] = useState('');
    const [previousCalculation, setPreviousCalculation] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                const result = eval(display).toString();
                setPreviousCalculation(display + ' = ' + result);
                setDisplay(result);
            } catch {
                setDisplay('Error');
            }
        } else if (value === 'C') {
            setDisplay('');
            setPreviousCalculation('');
        } else if (value === '⌫') {
            setDisplay(display.slice(0, -1));
        } else if (value === '±') {
            setDisplay((display.startsWith('-') ? display.slice(1) : '-' + display));
        } else if (value === '%') {
            try {
                setDisplay((eval(display) / 100).toString());
            } catch {
                setDisplay('Error');
            }
        } else {
            setDisplay(display + value);
        }
    };

    const buttons = [
        'C', '⌫', '%', '±',
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
            <div className="p-6 bg-gray-900 rounded-3xl shadow-xl w-80">
                <div className="text-right text-sm text-gray-400 mb-1 font-mono">
                    {previousCalculation || 'Previous calculation will appear here'}
                </div>
                <div className="text-right text-4xl mb-4 bg-gray-800 rounded-lg p-5 shadow-inner font-mono">
                    {display || '0'}
                </div>
                <div className="grid grid-cols-4 gap-3">
                    {buttons.map((button) => (
                        <button
                            key={button}
                            className={`${
                                button === 'C' || button === '⌫'
                                    ? 'bg-red-700'
                                    : button === '±' || button === '%'
                                    ? 'bg-yellow-600'
                                    : button === '+' || button === '-' || button === '*' || button === '/'
                                    ? 'bg-green-600'
                                    : 'bg-indigo-700'
                            } hover:bg-opacity-80 rounded-full text-xl p-5 transition duration-300 transform hover:scale-105 shadow-md`}
                            onClick={() => handleButtonClick(button)}
                        >
                            {button}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calculator;
