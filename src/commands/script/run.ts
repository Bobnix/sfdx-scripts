import { flags, SfdxCommand } from '@salesforce/command';
import { Messages } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';

Messages.importMessagesDirectory(__dirname);

const messages = Messages.loadMessages('sfdx-scripts', 'run');

export default class Run extends SfdxCommand {
    public static description = messages.getMessage('commandDescription');

    public static examples = [
    `$ sfdx script:run -u test@org.com -f sample.js
    The Output Of The Sample Script
    `
    ];

    protected static flagsConfig = {
        file: flags.string({char: 'f', description: messages.getMessage('fileFlagDescription')})
    };

    protected static requiresUsername = true;
    protected static supportsDevhubUsername = true;
    protected static requiresProject = false;

    public async run(): Promise<AnyJson> {

        const scriptFile = await require(process.cwd() + '/' + this.flags.file);

        return await scriptFile(this.org);
    }

}
