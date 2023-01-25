import { exec, cd } from 'shelljs';

import AbstractMigration from '../../class/abstract-migration';

export default class MigrateReact18 extends AbstractMigration {
  static description = 'Migrates the projects to React 18.x by installing the dependencies';

  static examples = ['$ build-stuff-jan-26 migrate-react-18 ~/test-projects/example-02'];
  // For running locally: ./bin/run migrate-react-18 ./test-projects/example-02

  static flags = {
    ...AbstractMigration.flags,
  };

  static args = [...AbstractMigration.args];

  async migrate(): Promise<boolean> {
    const pathToProject = this.args.path;

    cd(pathToProject);

    await this.step('Updating "react" and "react-dom" to 17.x', () => {
      exec('npm install -P react@17.x');
      exec('npm install -P react-dom@17.x');
      exec('npm install -D @types/react@17.x');
      exec('npm install -D @types/react-dom@17.x');
    });

    return true;
  }
}
