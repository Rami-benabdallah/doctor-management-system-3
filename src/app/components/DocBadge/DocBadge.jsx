import React from 'react';

import PropTypes from 'prop-types';

export const DocBadge = ({ label, bg, badgeColor, size, border, borderColor, padding, rounded, icon: Icon, onClick }) => {
    return (
        <span className={`flex items-center justify-center gap-2 min-w-28 ${bg} ${border} ${padding} ${rounded} ${borderColor} ${badgeColor}`}>
            {label}
            {Icon && <Icon className={`${badgeColor} ${size} cursor-pointer`} onClick={onClick} />}
        </span>
    );
  };

  DocBadge.propTypes = {
    label: PropTypes.string,
    border: PropTypes.string,
    borderColor: PropTypes.string,
    bg: PropTypes.string,
    textColor: PropTypes.string,
    size: PropTypes.string,
    padding: PropTypes.string,
    rounded: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
};

DocBadge.defaultProps = {
    label: 'hello',
    border: 'border-gray-400',
    borderColor: '',
    bg: 'bg-red-500',
    badgeColor: 'text-light',
    size: 'w-4 h-4',
    padding: 'px-4 py-1',
    rounded: 'rounded-2xl',
    icon: '',
    onClick: '',
};