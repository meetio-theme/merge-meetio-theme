import {
    generateScheme,
    ISchemeSetting,
    IRules,
    IColors,
} from '@meetio/scheme-generator';
import { dark, light } from '@meetio/meetio-colors';

interface IScheme {
    name: string;
    author: string;
    variables: IColors;
    folder: string;
    customRules: Array<IRules>;
}

[
    {
        name: 'Meetio-Theme-Dark',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: dark,
        folder: 'Dark',
        customRules: [],
    },
    {
        name: 'Meetio-Theme-Light',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: light,
        folder: 'Light',
        customRules: [],
    },
].map((item: IScheme) => {
    const settings: ISchemeSetting = {
        colors: item.variables,
        rules: item.customRules,
    };
    generateScheme(item.name, item.author, item.name, settings, item.folder);
});
