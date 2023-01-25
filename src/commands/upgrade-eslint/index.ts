import editJsonFile from 'edit-json-file';

import AbstractMigration from '../../class/abstract-migration';

export default class UpgradeEslint extends AbstractMigration {
  static description = 'Adds the "lint:fix" command if missing in the projects';

  static examples = ['$ build-stuff-jan-26 upgrade-eslint ~/test-projects/example-01'];
  // For running locally: ./bin/run upgrade-eslint ./test-projects/example-01

  static flags = {
    ...AbstractMigration.flags,
  };

  static args = [...AbstractMigration.args];

  async migrate(): Promise<boolean> {
    const pathToProject = this.args.path;

    await this.step('Adding the "lint:fix" command', () => {
      const file = editJsonFile(`${pathToProject}/package.json`, {
        autosave: true,
      });

      const lintFixScript = file.get('scripts.lint:fix');

      if (!lintFixScript) {
        file.set('scripts.lint:fix', 'npm run lint -- --fix');
      }
    });

    return true;
  }
}
