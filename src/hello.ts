import {join} from 'lodash';

export function hello() {
    console.log(join(["Hello", ", ", "world", "!"], ""));
}
