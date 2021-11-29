import { Properties } from 'csstype';

export interface AutocompleteStyles {
  inputStyle?: Properties;
  optionsStyle?: Properties;
  closeStyle?: Properties;
}

export const styles: AutocompleteStyles = {
  inputStyle: {
    width: '100%',
    height: '36px',
    padding: '0px 12px',
    boxSizing: 'border-box',
    fontSize: '15px',
    fontFamily: 'Avenir',
    outline: 'none',
    borderRadius: '24px',
  },
  optionsStyle: { overflow: 'hidden' },
  closeStyle: {
    cursor: 'pointer',
    textAlign: 'center',
    padding: '8px 12px',
    fontSize: '15px',
    borderRadius: '24px',
    fontFamily: 'Avenir',
  },
};
