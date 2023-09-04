import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

// Function to customize the snapshot location
const getMatchOptions = ({ context: { fileName } }) => {
    // Generates a custom path based on the file name and the custom directory.
    const snapshotPath = path.join(
        path.dirname(fileName),
        'your-custom-directory',
    );
    return { customSnapshotsDir: snapshotPath };
};

describe('Storyshots', () => {
    // initStoryshots({
    //     // your own configuration
    //     framework: 'react',
    //     configPath: path.join(__dirname, '../../../../config/storybook'),
    //     test: imageSnapshot({
    //         // storybookUrl: `./storybook-static`,
    //         storybookUrl: `http://localhost:6006`,
    //         // invoke the function above here
    //         getMatchOptions,
    //     }),
    // });

    test.skip('my only true test', () => {
        expect(1 + 1).toEqual(1);
    });
});
