/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/*
  this operation is useful when we need to access color scheme informations later
*/

const { readFile: _readFile, writeFile } = require('fs');
const hexToRgba = require('hex-to-rgba');
const cssToObject = require('css-to-object');
const minifier = require('string-minify');

const gen = (hex) => {
  const rgba = hexToRgba(hex);

  const regExp = /\(([^)]+)\)/;
  const matches = regExp.exec(rgba);
  const arr = matches[1].split(',');
  arr.pop();
  const trimmed = arr.map((i) => i.trim());

  const threeNumbers = trimmed.join(', ');

  return threeNumbers;
};

const camelize = (str) => {
  return str
    .replace('--', '')
    .replaceAll('-', ' ')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
};

const COLOR_SCHEME_FILE = './src/color-schemes/color-schemes-hex.css';

// Write json file
const writeJSON = () => {
  _readFile(COLOR_SCHEME_FILE, 'utf8', (err, data) => {
    const obj = cssToObject(data);

    const collect = [];

    for (const key in obj) {
      const name = key.replace('.', '');

      if (Object.hasOwnProperty.call(obj, key)) {
        const item = obj[key];
        const formattedItem = {
          name,
          colors: {},
        };

        for (const key in item) {
          if (Object.hasOwnProperty.call(item, key)) {
            formattedItem.colors[camelize(key)] = gen(item[key]);
            formattedItem.colors[`${camelize(key)}Hex`] = item[key];
          }
        }

        collect.push(formattedItem);
      }
    }

    writeFile('./src/color-schemes/color-schemes.json', JSON.stringify(collect), (err) => {
      if (err) {
        return console.log(err);
      }
      console.log('Theme file sucessfully generated');
    });
  });
};

// Rewrite css to three numbers colors instead of hex
const write3ColorsCSS = () => {
  _readFile(COLOR_SCHEME_FILE, 'utf8', (err, data) => {
    const formattedData = data
      .replace(/#([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?\b/g, (word) => {
        return gen(word);
      });

    writeFile('./src/color-schemes/color-schemes.css', minifier(formattedData), (err) => {
      if (err) {
        return console.log(err);
      }
      console.log('Color shemes stylesheet with 3 numbers successfully generated');
    });
  });
};

write3ColorsCSS();
writeJSON();
