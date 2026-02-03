import { input } from '@inquirer/prompts';

async function init() {
    const graphWidth = await input({ message: 'Graph data area width?' });
    const columnWidth = await input({ message: 'Column width?' });
    const columnCount = await input({ message: 'Column count?' });

    console.log(((columnWidth/(graphWidth/columnCount)) * 100).toFixed(2));
}

init();