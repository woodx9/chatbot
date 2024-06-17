import React, { useEffect, useState } from 'react'

import { Select, Form} from 'antd'

import styles from './index.module.less'
import { localize } from '../LocaleSettingBar/getDescription';

const { Option } = Select;

interface LanguageBar {
  localeLanguage: string;
}

const LanguageBar:React.FC<LanguageBar> = ({localeLanguage}) => {
    function handleChange(value: string) {
        language = value;
    }

    const [defaultValue, setDefaultValue] = useState(localize('English'));
    useEffect(() => {
      console.log('languageBar origin default:' + localize(language));
      console.log('languageBar localize default:' + localize(language));
      setDefaultValue(language);
    }, [localeLanguage]);

    return (
        <Form>
        <Form.Item
          label={localize('Target Language')}
          name="select"
        >
          <Select defaultValue={localize(defaultValue)} style={{ width: 120 }} onChange={handleChange}>
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
