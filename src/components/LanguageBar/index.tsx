import React, { useEffect, useState } from 'react'

import { Select, Form} from 'antd'

import styles from './index.module.less'
import { localize } from '../LocaleSettingBar/getDescription';

const { Option } = Select;


const LanguageBar = ({}) => {
    function handleChange(value: string) {
        language = value;
    }

    return (
        <Form>
        <Form.Item
          label={localize('Target Language')}
          name="select"
        >
          <Select defaultValue={'English'} style={{ width: 120 }} onChange={handleChange}>
            <Option value='English'>{localize('English')}</Option>
            <Option value='Chinese'>{localize('Chinese')}</Option>
            <Option value='French'>{localize('French')}</Option>
          </Select>
        </Form.Item>
        </Form>
      );
}

let language = 'English';

export function getLanguage() {
    return language;
}

export default LanguageBar
