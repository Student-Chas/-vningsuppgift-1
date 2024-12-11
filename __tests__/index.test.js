import { spawnSync } from 'child_process';

test("Skriver ut 'Hej, världen!'", () => {
    const result = spawnSync('node', ['./excercises/hello.js'], {encoding: 'utf8'});
    expect(result.stdout.trim()).toBe("Hej, världen!");
});

test("Skriver ut namnet", () => {
    const result = spawnSync('node', ['./excercises/name.js'], {encoding: 'utf8'});
    expect(result.stdout.trim()).toMatch(/^Ditt namn är .+/);
});