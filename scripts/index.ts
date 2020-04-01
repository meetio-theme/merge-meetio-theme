// @ts-ignore
import * as path from 'path';
import * as fs from 'fs';

import { ui } from './variations/index';
import { rules } from './rules';

interface ITheme {
    extends: string;
    variables: any;
    rules: string[];
}

function build(name: string, variables: any, folder: string, rules: any) {
    const theme: ITheme = {
        extends: 'Merge.sublime-theme',
        variables,
        rules,
    };

    fs.mkdir(`${folder}`, { recursive: true }, err => {
        if (err) throw err;
        ['Commit Message', 'Diff', 'Widget'].forEach(
            (file: string) => {
                fs.writeFileSync(
                    `${folder}/${file} - ${name}.sublime-settings`,
                    JSON.stringify(
                        {
                            color_scheme: `${name}.sublime-color-scheme`,
                        },
                        null,
                        4
                    )
                );
            }
        );
        fs.writeFileSync(
            `${folder}/${name}.sublime-theme`,
            JSON.stringify(theme, null, 4)
        );
    });
}

Object.values(ui).map((key: any) => {
    build(key.name, key.variables, key.folder, rules);
});
