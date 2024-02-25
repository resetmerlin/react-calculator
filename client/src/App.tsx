import { useState } from 'react';
import { Button } from './components';

function App() {
  const [sum, setSum] = useState('');

  const resetSum = () => setSum('');

  /** Validate if sum length is longer than 3 */
  const validateLength = () => {
    const hash = new Map();

    [...sum].forEach((str) => hash.set(str, hash.get(str) + 1 || 1));

    const strHasDivide = hash.get('/') ? hash.get('/') * 3 + hash.get('/') : 0;
    const strHasMultiply = hash.get('X')
      ? hash.get('X') * 3 + hash.get('X')
      : 0;
    const strHasMinus = hash.get('-') ? hash.get('-') * 3 + hash.get('-') : 0;
    const strHasPlus = hash.get('+') ? hash.get('+') * 3 + hash.get('+') : 0;

    const maxLength =
      3 + strHasDivide + strHasMultiply + strHasMinus + strHasPlus;

    if (sum.length >= maxLength) {
      alert('숫자는 세 자리까지만 입력 가능합니다!');
      return true;
    }

    return false;
  };

  /** Validate if operation comes first than digits */
  const validateOperation = () => {
    if (
      sum[sum.length - 1] === '/' ||
      sum[sum.length - 1] === 'X' ||
      sum[sum.length - 1] === '+' ||
      sum[sum.length - 1] === '-' ||
      !sum[sum.length - 1]
    ) {
      alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!');
      return true;
    }

    return false;
  };

  const addNine = () => {
    if (validateLength()) return;
    setSum(`${sum}9`);
  };
  const addEight = () => {
    if (validateLength()) return;
    setSum(`${sum}8`);
  };
  const addSeven = () => {
    if (validateLength()) return;

    setSum(`${sum}7`);
  };
  const addSix = () => {
    if (validateLength()) return;

    setSum(`${sum}6`);
  };
  const addFive = () => {
    if (validateLength()) return;

    setSum(`${sum}5`);
  };
  const addFour = () => {
    if (validateLength()) return;

    setSum(`${sum}4`);
  };

  const addThree = () => {
    if (validateLength()) return;

    setSum(`${sum}3`);
  };
  const addTwo = () => {
    if (validateLength()) return;

    setSum(`${sum}2`);
  };
  const addOne = () => {
    if (validateLength()) return;

    setSum(`${sum}1`);
  };
  const addZero = () => {
    if (validateLength()) return;

    setSum(`${sum}0`);
  };

  const addDivision = () => {
    if (validateOperation()) return;
    setSum(`${sum}/`);
  };
  const addMultiplication = () => {
    if (validateOperation()) return;
    setSum(`${sum}X`);
  };
  const addMinus = () => {
    if (validateOperation()) return;
    setSum(`${sum}-`);
  };
  const addPlus = () => {
    if (validateOperation()) return;
    setSum(`${sum}+`);
  };

  const getResult = () => {
    const parts = [...sum].join('').split(/X|\+|\-|\//);
  };

  const defaultValue = sum === '' ? 0 : sum;

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{defaultValue}</h1>
        <div className="digits flex">
          <Button type="button" purpose="digits" onClick={addNine}>
            9
          </Button>
          <Button type="button" purpose="digits" onClick={addEight}>
            8
          </Button>
          <Button type="button" purpose="digits" onClick={addSeven}>
            7
          </Button>
          <Button type="button" purpose="digits" onClick={addSix}>
            6
          </Button>
          <Button type="button" purpose="digits" onClick={addFive}>
            5
          </Button>
          <Button type="button" purpose="digits" onClick={addFour}>
            4
          </Button>
          <Button type="button" purpose="digits" onClick={addThree}>
            3
          </Button>
          <Button type="button" purpose="digits" onClick={addTwo}>
            2
          </Button>
          <Button type="button" purpose="digits" onClick={addOne}>
            1
          </Button>
          <Button type="button" purpose="digits" onClick={addZero}>
            0
          </Button>
        </div>
        <div className="modifiers subgrid">
          <Button type="button" purpose="modifiers" onClick={resetSum}>
            AC
          </Button>
        </div>
        <div className="operations subgrid">
          <Button type="button" purpose="operations" onClick={addDivision}>
            /
          </Button>
          <Button
            type="button"
            purpose="operations"
            onClick={addMultiplication}
          >
            X
          </Button>
          <Button type="button" purpose="operations" onClick={addMinus}>
            -
          </Button>
          <Button type="button" purpose="operations" onClick={addPlus}>
            +
          </Button>
          <Button type="button" purpose="operations" onClick={getResult}>
            =
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
