import { getLocaleLanguage } from "."

interface LanguageStrings {
    [key: string]: string;
}

const languageMap: { [key: string]: LanguageStrings } = {
    'cn':  {
        'Target Language': '目标语言',
        'User': '用户',
        'Assistant': '助手',
        'Shift + Enter for new line': '按下 Shift + Enter 键进行换行',
        'Please wait ...': '请稍等...',
        'Stop': '停止',
        'English': '英文',
        'Chinese': '中文',
        'French': '法语',
        'Hi, I\'m your AI translator, I can help you with translation tasks.': '嗨，我是你的AI翻译助手，我可以帮你完成翻译任务。',
        'New message from user: {0}': '用户的新消息: {0}',
        'Current system prompt: {0}': '当前系统提示此: {0}',
        'Get streaming response: {0}': '获取当前流式消息: {0}',
        'The OpenAI API has encountered an error with a status code of {0} and message {1}': 'OpenAI API 遇到了一个状态码为 {0} 且消息为 {1} 的错误。',
    }
}

function _format(message: string, args: (string | number | boolean | undefined | null)[]): string {
    let result: string;

    if (args.length === 0) {
        result = message;
    } else {
        result = message.replace(/\{(\d+)\}/g, (match, rest) => {
            const index = rest[0];
            const arg = args[index];
            let result = match;
            if (typeof arg === 'string') {
                result = arg;
            } else if (typeof arg === 'number' || typeof arg === 'boolean' || arg === void 0 || arg === null) {
                result = String(arg);
            }
            return result;
        });
    }

    return result;
}

export function localize(message: string, ...args: (string | number | boolean | undefined | null)[]): string {
    return _format(_localize(message), args);
}

export function _localize(description: string): string{
    const langguage:string = getLocaleLanguage();
    if (langguage in languageMap && description in languageMap[langguage]) {
        return  languageMap[langguage][description];
    }
    
    return description
}