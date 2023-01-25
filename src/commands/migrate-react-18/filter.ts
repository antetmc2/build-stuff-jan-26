import AbstractFilter from '../../class/abstract-filter';
import { PackageJson } from '../../class/package-json';
import { FilterResult } from '../../types';

export default class MigrateReact18Filter extends AbstractFilter {
  static examples = [
    '$ build-stuff-jan-26 migrate-react-18:filter ~/test-projects/example-02/package.json',
  ];
  // For running locally: ./bin/run migrate-react-18:filter ./test-projects/example-02/package.json

  static flags = {
    ...AbstractFilter.flags,
  };

  static args = [...AbstractFilter.args];

  async filter(packageJson: PackageJson): Promise<FilterResult> {
    if (!packageJson.hasDependency('react') || !packageJson.hasDependency('react-dom')) {
      return FilterResult.FALSE;
    }

    if (!packageJson.isDependencyOlder('react', '18.0.0') && !packageJson.isDependencyOlder('react-dom', '18.0.0')) {
      return FilterResult.FALSE;
    }

    return super.filter(packageJson);
  }
}
