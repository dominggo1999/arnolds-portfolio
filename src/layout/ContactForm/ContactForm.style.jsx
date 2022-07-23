import tw, { styled } from 'twin.macro';
import { Wrapper } from '~/common/Wrapper.jsx';

export const ContactWrapper = styled(Wrapper)`
  ${tw`
    flex 
    flex-col
    md:flex-row 
    py-10 
    justify-between 
    gap-y-10
  `}
`;

// Left side
export const SideHeader = styled.div`
  ${tw`
    flex 
    flex-col  
    gap-y-5
    md:w-1/3
  `}
`;

export const Title = styled.div`
  ${tw`
    text-2xl
    sm:text-3xl
    xl:text-5xl 
    font-bold
    text-accent
  `}
`;

export const Description = styled.div`
  ${tw`
    sm:text-xl
    dark:text-light-primary
    font-semibold
  `}
`;

export const ImportantLinks = styled.div`
  ${tw`
    flex 
  `}
`;

export const SocialLink = styled.a`
  ${tw`
    mr-10
    text-[1.75rem] 
    hover:(text-accent opacity-100)
    cursor-pointer
  `}
`;

// Right Side
export const Form = styled.form`
  ${tw`
    md:w-[60%]
    flex 
    flex-col 
    gap-y-5
  `}
`;

export const FormSection = styled.div`
  ${tw`
    flex 
    flex-col 
    gap-y-2
    relative
  `}
`;

export const Label = styled.label`
  ${tw`
    text-sm
    sm:text-lg 
    font-semibold
    dark:text-accent
  `}
`;

// Name and email wrapper
export const Information = styled.div`
  ${tw`
    grid 
    md:grid-cols-2
    gap-5
  `}
`;

export const InputField = styled.div`
  ${tw`
    relative
    gap-y-2
    flex 
    flex-col
  `}

  input{
    ${tw`
      border
      border-black
      border-opacity-80 
      py-4 
      px-5
      outline-none 
      bg-transparent 
      dark:border-white 
      dark:text-light-primary 
      rounded
    `}
  }
`;

export const Message = styled.div`
  ${tw`
    flex 
    flex-col 
    relative
  `}
`;

export const Textarea = styled.textarea`
  ${tw`
    rounded
    border 
    border-black
    border-opacity-80 
    py-4 
    px-5 
    h-[200px]
    min-h-[100px]
    max-h-[200px] 
    outline-none 
    bg-transparent 
    dark:border-white
    dark:text-light-primary
  `}
`;

export const ErrorMessage = styled.div`
  ${tw`
    text-accent 
    text-sm  
    mt-1 
    absolute  
    right-0
    top-full 
    font-semibold
    italic
  `}
`;

// Button and other message
export const FormActions = styled.div`
  ${tw`
    flex  
    items-center
    gap-x-4 
    flex-wrap
  `}
    
  p{
    ${tw` 
      mt-2 
      text-sm
      md:w-1/2
      font-medium
      dark:text-light-primary
    `}
  }
`;

export const FormButton = styled.button`
  ${tw`
    bg-accent
    hover:bg-accent-hover
    text-light-primary
    dark:text-primary-dark
    px-3 
    py-2
    md:px-4
    md:py-3
    font-bold  
    md:text-lg  
    rounded-md
    mt-2 
    min-w-[5.25rem]
  `}
`;

// Captcha
export const CaptchaWrapper = styled.div`
  ${tw`
    flex 
    flex-wrap
    items-center
    min-h-[2.25rem]
    gap-y-3
  `}

  span{
    ${tw`
      w-9
      h-9
      inline-block 
      flex 
      items-center 
      justify-center
      text-lg
    `}
  }

  span.num{
    ${tw`
      rounded
      bg-accent
      select-none
    `}
  }

  span img{
    ${tw`
      w-full
      h-full
      max-w-full 
      max-h-full
      select-none
    `}
  }

  input {
    ${tw`
      w-12
      h-9
      block
      border
      border-black 
      outline-none 
      bg-transparent 
      dark:border-white 
      dark:text-light-primary 
      rounded 
      text-center 
      font-bold 
      mr-2
    `}
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  p.wrong{
    ${tw`
      text-sm 
      font-semibold
    `}
  }
`;
