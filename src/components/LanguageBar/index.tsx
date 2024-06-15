import React from 'react'

import { Select, Form} from 'antd'

import styles from './index.module.less'
import { localize } from '../LocaleSettingBar/getDescription';

const { Option } = Select;


const LanguageBar = () => {
    function handleChange(value: string) {
        language = value;
    }

    return (
        <Form>
        <Form.Item
          label={localize('target language')}
          name="select"
        >
          <Select defaultValue={localize('English')} style={{ width: 120 }} onChange={handleChange}>
            <Option value={localize('English')}>{localize('English')}</Option>
            <Option value={localize('Chinese')}>{localize('Chinese')}</Option>
            <Option value={localize('French')}>{localize('French')}</Option>
          </Select>
        </Form.Item>
        </Form>
      );
}

let language = "英文";

export function getLanguage() {
    return language;
}

export default LanguageBar
