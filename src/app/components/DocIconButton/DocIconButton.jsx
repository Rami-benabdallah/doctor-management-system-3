import React from 'react';

import PropTypes from 'prop-types';

export const DocIconButton = ({ mode, active, hoverEffects, disabled, icon: Icon, extraColor, size, rounded, showLabel, label, customWidth, border, customPadding, onClick }) => {
  const bgColor = modeToBgColor[mode] || 'bg-gray-900';
  const fillColor = modeToIconFillColor[mode] || extraColor;
  const borderColor = modeToborderColor[mode] || '';

  return (
    <button
      className={`${showLabel ? 'w-52' : customWidth} ${customPadding ? customPadding : 'p-4'}  ${bgColor} ${borderColor} ${hoverEffects} ${rounded} ${active ? 'bg-primary text-light' : ''} ${disabled ? 'cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className='flex items-center'>
        {Icon && (
          <Icon className={`${fillColor} ${size}`} />
        )}
        {showLabel && label && (
          <span className='ml-4'>
            {label}
          </span>
        )}
      </div>
    </button>
  );
};

const modeToBgColor = {
  main: 'bg-light',
  error: 'bg-light',
  transparent: 'bg-transaprent',
  blurry: 'backdrop-blur-lg bg-light bg-opacity-30',
};

const modeToborderColor = {
  main: 'border border-purpleInfo',
  error: 'border border-redInfo',
};

const modeToIconFillColor = {
  main: 'text-fill-purpleInfo text-purpleInfo',
  error: 'text-fill-redInfo text-redInfo',
  transparent: 'text-fill-light',
  blurry: 'text-fill-light',
};


DocIconButton.propTypes = {
  mode: PropTypes.string,
  active: PropTypes.boolean,
  disabled: PropTypes.boolean,
  icon: PropTypes.string,
  extraColor: PropTypes.string,
  size: PropTypes.string,
  rounded: PropTypes.string,
  hoverEffects: PropTypes.string,
  showLabel: PropTypes.boolean,
  label: PropTypes.string,
  customWidth: PropTypes.string,
  customPadding: PropTypes.string,

  onClick: PropTypes.func,
};

DocIconButton.defaultProps = {
  mode: 'dark',
  active: false,
  hoverEffects: '',
  disabled: false,
  icon: '',
  extraColor: '',
  size: 'w-6 h-6',
  rounded: '',
  showLabel: false,
  label: '',
  customWidth: 'w-16',
  customPadding: '',

  onClick: undefined,
};
