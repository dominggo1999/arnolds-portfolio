import React, { useState, forwardRef } from 'react';
import useAntibot from '~/hooks/useAntiBot.jsx';
import useUpdateEffect from '~/hooks/useUpdateEffect.jsx';
import { FormSection, Label, CaptchaWrapper } from './ContactForm.style.jsx';

const Captcha = React.forwardRef((props, captchaWrongRef) => {
  const { src, answer } = useAntibot() || {};
  const [wrongAnswer, setWrongAnswer] = useState();
  const [answered, setAnswered] = useState();
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  useUpdateEffect(() => {
    setAnswered(true);

    // Evaluate answer
    setWrongAnswer(answer !== value);
    captchaWrongRef.current = answer !== value;
  }, [value]);

  return (
    <FormSection>
      <Label>Human verification captcha
      </Label>
      <CaptchaWrapper>
        {
          src && answer && (
            <>
              <span className="num">
                <img
                  src={src[0]}
                  alt="Number 1"
                />
              </span>
              <span>
                +
              </span>
              <span className="num">
                <img
                  src={src[1]}
                  alt="Number 2"
                />
              </span>
              <span>
                =
              </span>
              <input
                onChange={handleChange}
                type="number"
                required
              />
            </>
          )
        }
        {
          answered && wrongAnswer && (
            <p className="wrong">Oops, Wrong answer</p>
          )
        }
      </CaptchaWrapper>
    </FormSection>
  );
});

export default Captcha;
