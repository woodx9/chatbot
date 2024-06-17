import React from 'react'

import { Select, Form} from 'antd'

import styles from './index.module.less'

const { Option } = Select;

interface LocaleSettingBar {
  setLocaleLanguage: (state: string) => void; // 明确指定函数类型
}


const LocaleSettingBar: React.FC<LocaleSettingBar>  = ({setLocaleLanguage}) => {
    function handleChange(value: string) {
        setLocaleLanguage(value);
        locoleLanguage = value;
    }

    return (
        <Form className={styles.select}>
        <Form.Item
          label="System Language"
          labelCol={{ style: { color: 'white' } }}
          name="select"
        >
          <Select defaultValue="cn" onChange={handleChange}  > 
            <Option value="cn">中文</Option>
            <Option value="en">English</Option>
          </Select>
        </Form.Item>
        </Form>
      );
}

export let locoleLanguage = "cn";

export function getLocaleLanguage(): string{
    return locoleLanguage;
}


export default LocaleSettingBar;
