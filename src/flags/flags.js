import React, {
  useCallback,
  useState,
  useContext
} from 'react';

const FLAG_KEY = 'gitl/flags';

function setFlag(key, value) {
  const flags = Object.assign({}, getFlags(), { [key]: value });
  window.localStorage.setItem(FLAG_KEY, JSON.stringify(flags));
}

function getFlags() {
  try {
    return JSON.parse(window.localStorage.getItem(FLAG_KEY)) || {};
  } catch (err) {
    return {};
  }
}

const flags = [
  { key: 'useNewOfferPipeline' },
  { key: 'useOfferCreateWizard' }
];

function Flags() {
  const [flagValues, setFlagValues] = useState(getFlags());
  const updateFlag = useCallback((evt) => {
    setFlag(evt.target.value, evt.target.checked);
    setFlagValues(getFlags());
  }, []);

  return (
    <>
      <h1>Flags</h1>
      {flags.map(({ key }) => {
        const value = flagValues[key];
        console.log(key, value);
        return (
          <p key={key}>
            <label>
              <input
                value={key}
                type='checkbox'
                checked={value}
                onChange={updateFlag}
              />
              {key}
            </label>
          </p>
        );
      })}
    </>
  );
}

export default Flags;
