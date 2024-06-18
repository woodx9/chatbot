import React, { useState } from'react';
import { Select } from'antd';
import { localize } from './getDescription';

const { Option } = Select;

const LanguageSelect = () => {

  const handleLanguageChange = (value: string) => {
    language = value;
    console.log(localize('Selected language: {0}', value));
  };

  return (
    <Select
      value={language}
      onChange={handleLanguageChange}>
      <Option value="cn">中文</Option>
      <Option value="en">English</Option>
    </Select>
  );
};

let language = 'cn'

export function getLocaleLanguage() {
  return language
}

export default LanguageSelect;
