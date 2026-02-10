import { input } from '@inquirer/prompts';

async function init() {
    const graphWidth = await input({ message: 'Graph data area width?' });
    const clusterCount = await input({ message: 'Number of clusters?' });
    const clusterWidth = await input({ message: 'Cluster width (px)?' });

    const columnCount = await input({ message: 'Number of columns in a cluster?' });

    let overallAdjustment = 1;

    if (columnCount > 1) {
        /*
         *  When a percentage width is applied to a column in Illustrator,
         *  the scale operation is performed from the centre of each column.
         *  This means the cluster widths become narrower than the size entered
         *  in Illustrator's Cluster Width field.
         *  This calculation compensates for that and outputs a cluster width value that will
         *  give us clusters that are clusterWidth wide when columns are columnWidth wide
         */
        const columnWidth = await input({ message: 'Column width (%)?' });
        const adjustment = (100/columnWidth) - 1;
        const adjustmentPerCol = adjustment/columnCount;
        overallAdjustment += adjustmentPerCol;
    }

    console.log((((clusterWidth/(graphWidth/clusterCount)) * 100) * overallAdjustment).toFixed(2));
}

init();