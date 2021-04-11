import {
    generateScheme,
    ISchemeSetting,
    IRules,
    IColors,
} from '@meetio/scheme-generator';
import { darker, lighter, palenight, deepocean } from '@meetio/meetio-colors';

interface IScheme {
    name: string;
    author: string;
    variables: IColors;
    // folder: string;
    customRules: Array<IRules>;
}
[
    {
        name: 'Meetio Darker',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: darker,
        // folder: 'Dark',
        customRules: [],
    },
    {
        name: 'Meetio Lighter',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: lighter,
        // folder: 'Light',
        customRules: [],
    },
    {
        name: 'Meetio Palenight',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: palenight,
        // folder: 'Palenight',
        customRules: [],
    },
    {
        name: 'Meetio Deepocean',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: deepocean,
        // folder: 'Deepocean',
        customRules: [],
    },
].map((item: IScheme) => {
    const settings: ISchemeSetting = {
        colors: item.variables,
        rules: item.customRules,
    };
    generateScheme(item.name, item.author, item.name, settings/*, item.folder*/);
});
