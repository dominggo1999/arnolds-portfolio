import React, { useState, useRef } from 'react';
import Hotkeys from 'react-hot-keys';
import { AnimatePresence } from 'framer-motion';
import useOnClickOutside from '~/hooks/useOnClickOutside.jsx';
import useCloseOnScroll from '~/hooks/useCloseOnScroll.jsx';
import useColorSchemeStore from '~/stores/useColorSchemeStore.jsx';
import colorSchemes from '~/color-schemes/color-schemes.json';
import { HeaderIcon } from '../Icon.jsx';
import {
  Picker,
  PickerContent,
  PickerText,
  List,
  Item,
  HalfColor,
} from './ColorSchemePicker.style.jsx';

const ColorSchemePicker = ({ icon, ...rest }) => {
  const [open, setOpen] = useState(false);
  const listRef = useRef();
  const { changeColorScheme } = useColorSchemeStore((state) => state);

  const close = () => setOpen(false);
  const toggle = () => setOpen(!open);

  useOnClickOutside(listRef, close, open, false);
  useCloseOnScroll(close);

  return (
    <Picker {...rest}>
      <Hotkeys
        keyName="escape"
        onKeyUp={() => open && toggle()}
      />
      <HeaderIcon
        className={open ? 'active' : null}
        onClick={toggle}
        aria-label="Choose color scheme"
        style={{
          pointerEvents: open ? 'none' : 'auto',
        }}
      >
        {icon()}
      </HeaderIcon>
      <AnimatePresence>
        {
          open && (
            <PickerContent
              asChild
              portalled={false}
              ref={listRef}
              initial={{ opacity: 0, y: '2%' }}
              animate={{ opacity: 1, y: '0%', transition: { duration: 0.09 } }}
              exit={{ opacity: 0, transition: { duration: 0.03 } }}
            >
              <PickerText>Choose color scheme</PickerText>
              <List>
                {colorSchemes.map((i) => {
                  return (
                    <Item
                      onClick={() => changeColorScheme(i.name)}
                      key={i.name}
                      style={{
                        backgroundColor: i.colors.accentHex,
                      }}
                    >
                      <HalfColor
                        style={{
                          backgroundColor: i.colors.primaryDarkHex,
                        }}
                      />
                    </Item>
                  );
                })}
              </List>
            </PickerContent>
          )
        }
      </AnimatePresence>
    </Picker>
  );
};

export default ColorSchemePicker;
