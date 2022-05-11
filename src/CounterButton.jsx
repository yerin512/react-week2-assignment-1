// 라이브러리 & 프레임워크
import React from 'react';
// 상수 값
import COUNTER_CONST from './const/counter';

const { counterButtonLabel } = COUNTER_CONST;

// 카운터 버튼
function CounterButton({ count, onClick }) {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          onClick();
        }}
      >
        {counterButtonLabel}({count})
      </button>
    </>
  );
}

export default CounterButton;
