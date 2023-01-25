import { FilterResult } from '../types';

import AbstractCommand from './abstract-command';
import { PackageJson } from './package-json';

export default class AbstractFilter extends AbstractCommand {
  static description = 'Check files in project';

  static flags = {
    ...AbstractCommand.flags,
  };

  static args = [
    {
      name: 'packageJsonPath',
      required: true,
      description: 'Path to the "package.json" file',
      default: './package.json',
    },
  ];

  async run(): Promise<any> {
    const file = new PackageJson(this.args.packageJsonPath);
    const result = await this.filter(file);

    this.log(`${result}`);
  }

  async filter(packageJson: PackageJson): Promise<FilterResult> {
    if (this.isArchivedProject(packageJson)) {
      return FilterResult.FALSE;
    }

    return FilterResult.TRUE;
  }

  protected isArchivedProject(packageJson: PackageJson): boolean {
    return packageJson.testName(/archive/);
  }
}
