import { expect, test } from '@salesforce/command/lib/test';

describe('script:run', () => {
  test
    .withOrg({ username: 'test@org.com' }, true)
    .stdout()
    .command(['script:run', '-u', 'test@org.com', '-f', 'test/commands/script/sample.js', '--json'])
    .it('runs script:run -u test@org.com -f sample.js', ctx => {
      expect(ctx.stdout).to.contain('test success');
    });
});
