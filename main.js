document.addEventListener('DOMContentLoaded', function() {
    const testButton = document.getElementById('testButton');
    testButton.addEventListener('mouseover', testNOR);

    function testNOR() {
        const inputA = document.getElementById('inputA').checked;
        const inputB = document.getElementById('inputB').checked;
        const result = document.getElementById('result');

        const norResult = !(inputA || inputB);

        result.textContent = 'Результат NOR: ' + (norResult ? '1 (істина)' : '0 (хибність)');
    }
});
