import * as fs from 'fs';

import { ui } from './variations/index';
import { rules } from './rules';

interface ITheme {
    extends: string;
    variables: any;
    rules: string[];
}

function build(name: string, scheme: string, variables: any, rules: any) {
    const theme: ITheme = {
        extends: 'Merge.sublime-theme',
        variables,
        rules,
    };

    ['File Mode', 'Commit Message', 'Diff', 'Widget'].forEach(
        (file: string) => {
            fs.writeFileSync(
                `theme/${file} - ${name}.sublime-settings`,
                JSON.stringify(
                    {
                        color_scheme: `${scheme}.sublime-color-scheme`,
                    },
                    null,
                    4
                )
            );
        }
    );
    fs.writeFileSync(
        `theme/${name}.sublime-theme`,
        JSON.stringify(theme, null, 4)
    );
}

Object.values(ui).map((key: any) => {
    build(key.name, key.scheme, key.variables, rules);
});
