import * as escapHTML from "escape-html"

export function hello(name: string) {
    return escapHTML(`Hello: ${name}`);
}