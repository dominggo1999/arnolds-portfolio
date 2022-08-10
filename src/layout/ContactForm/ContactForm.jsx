import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line import/extensions
import { nopeResolver } from '@hookform/resolvers/nope/';
import Nope from 'nope-validator';
import { AiFillGithub as GithubIcon, AiFillLinkedin as LinkedinLogo, AiOutlineMail as EmailIcon } from 'react-icons/ai/index.js';
import { useNavigate } from 'react-router-dom';
import useAnimate from '~/hooks/useAnimate.jsx';
import { fadeInUp } from '~/animations/single.js';
import {
  ContactWrapper,
  SideHeader,
  Title,
  Description,
  Form,
  FormSection,
  Label,
  FormActions,
  Information,
  InputField,
  Message,
  Textarea,
  ErrorMessage,
  FormButton,
  ImportantLinks,
  SocialLink,
} from './ContactForm.style.jsx';
import { Accent } from '../../common/Typography.jsx';
import Captcha from './Captcha.jsx';

const schema = Nope.object().shape({
  name: Nope.string()
    .min(3, 'At least 3 characters')
    .required('Required'),
  email: Nope.string()
    .email('Invalid email format')
    .required('Required'),
  message: Nope.string()
    .min(3, 'must be longer than 3 characters')
    .max(500, 'must be shorter than 500 characters')
    .required('Required'),
});

const ContactForm = () => {
  const [contactRef, contactAnimationControls] = useAnimate({ threshold: 0.4 });
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const captchaWrongRef = useRef();
  const [status, setStatus] = useState('');
  const messageTimerRef = useRef();
  const abortControllerRef = useRef();

  const isAborted = () => {
    return abortControllerRef.current.signal.aborted;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: nopeResolver(schema),
    // mode: 'all', // if validation before submission needed
  });

  const onSubmit = (data) => {
    if (captchaWrongRef.current === false) {
      abortControllerRef.current = new AbortController();
      setLoading(true);
      setStatus('Sending your message ...');

      fetch('https://formsubmit.co/ajax/arnold_ds@proton.me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
        signal: abortControllerRef.current.signal,
      })
        .then((response) => response.json())
        .then(({ success }) => {
          // Redirect to ThankYou page
          if (success === 'true' && !isAborted()) {
            navigate('/thank-you');
            reset();
          } else {
            throw new Error('Something Went Wrong'); // generates an error object with the
          }
        })
        .catch((error) => {
          if (!isAborted()) {
            setLoading(false);
            setStatus('Something went wrong, try again later or contact me directly through email (arnold_ds@proton.me)');
          }
        });
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(messageTimerRef.current);
      abortControllerRef.current?.abort();
    };
  }, []);

  return (
    <ContactWrapper
      ref={contactRef}
      variants={fadeInUp}
      initial="hidden"
      animate={contactAnimationControls}
      id="contact"
    >
      <SideHeader>
        <Title>Contact me</Title>
        <Description>Send me an <Accent>Email</Accent> , check out my <Accent>Github</Accent>, or connect with me on  <Accent>Linkedin!</Accent>
        </Description>
        <ImportantLinks>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:arnold_ds@proton.me"
          >
            <EmailIcon />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dominggo1999"
          >
            <GithubIcon />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/arnold-ds"
          >
            <LinkedinLogo />
          </SocialLink>
        </ImportantLinks>
      </SideHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <FormSection>
          <Information>
            <InputField>
              <Label htmlFor="name">Name</Label>
              <input
                {...register('name')}
                type="text"
                required
                autoComplete="off"
                spellCheck="off"
              />
              {errors.name && <ErrorMessage>* {errors.name.message}</ErrorMessage>}

            </InputField>
            <InputField>
              <Label htmlFor="email">Email</Label>
              <input
                {...register('email')}
                type="email"
                required
                autoComplete="off"
                spellCheck="off"
              />
              {errors.email && <ErrorMessage>* {errors.email.message}</ErrorMessage>}
            </InputField>
          </Information>

        </FormSection>

        <FormSection>
          <Label htmlFor="message">Message</Label>
          <Message>
            <Textarea
              required
              {...register('message')}
              type="text"
              autoComplete="off"
              spellCheck="off"
            >
            </Textarea>
            {errors.message && <ErrorMessage>* {errors.message.message}</ErrorMessage>}

          </Message>
        </FormSection>

        <Captcha ref={captchaWrongRef} />

        <FormActions>
          <FormButton
            disabled={loading}
            type="submit"
          >Send Message
          </FormButton>
          {
            status && (
              <p>{status}</p>
            )
          }
        </FormActions>
      </Form>

    </ContactWrapper>
  );
};

export default ContactForm;
