import AbstractFilter from '../../class/abstract-filter';
import { PackageJson } from '../../class/package-json';
import { FilterResult } from '../../types';

export default class UpgradeEslintFilter extends AbstractFilter {
  static examples = ['$ build-stuff-jan-26 upgrade-eslint:filter ~/test-projects/example-01/package.json'];
  // For running locally: ./bin/run upgrade-eslint:filter ./test-projects/example-01/package.json

  static flags = {
    ...AbstractFilter.flags,
  };

  static args = [...AbstractFilter.args];

  async filter(packageJson: PackageJson): Promise<FilterResult> {
    if (!packageJson.hasDependency('eslint')) {
      return FilterResult.FALSE;
    }

    return super.filter(packageJson);
  }
}
