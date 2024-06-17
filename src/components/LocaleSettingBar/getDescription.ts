import { getLocaleLanguage } from "."


interface LanguageStrings {
    [key: string]: string;
}

const languageMap: { [key: string]: LanguageStrings } = {
    'cn':  {
        'target language': '目标语言',
        'user': '用户',
        'assistant': '助手',
        'Shift + Enter for new line': '按下 Shift + Enter 键进行换行',
        'Please wait ...': '请稍等...',
        'Stop': '停止',
        'English': '英文',
        'Chinese': '中文',
        'French': '法语',
    }
}



export function localize(description: string): string{
    const langguage:string = getLocaleLanguage();
    if (langguage in languageMap && description in languageMap[langguage]) {
        return  languageMap[langguage][description];
    }
    return description
}


//codeverse++演示用例子, 到时候把localize去掉


