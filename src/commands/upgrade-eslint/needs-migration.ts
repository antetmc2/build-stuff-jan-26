import AbstractNeedsMigration from '../../class/abstract-needs-migration';
import AbstractMigration from '../../class/abstract-migration';
import { PackageJson } from '../../class/package-json';

export default class UpgradeEslintNeedsMigration extends AbstractNeedsMigration {
  static examples = ['$ build-stuff-jan-26 upgrade-eslint:needs-migration ~/test-projects/example-01'];
  // For running locally: ./bin/run upgrade-eslint:needs-migration ./test-projects/example-01

  static flags = {
    ...AbstractMigration.flags,
  };

  static args = [...AbstractMigration.args];

  async check(): Promise<boolean> {
    const path = this.args.path;
    const packageJson = new PackageJson(`${path}/package.json`);

    // "lint" check + ".eslintrc" existing check

    return !packageJson.hasCommand('lint:fix');
  }
}
