export function add(...props) {
    let total = 0;
    props.forEach(number => total += number)
    return total
}

export function subs(a, b) {
    return a - b;
}

export function mul(a, b) {
    return a * b;
}

export function div(...props) {
    return props[0] / props[1];
}