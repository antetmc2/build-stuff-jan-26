import AbstractNeedsMigration from '../../class/abstract-needs-migration';
import AbstractMigration from '../../class/abstract-migration';

export default class MigrateReact18NeedsMigration extends AbstractNeedsMigration {
  static examples = [
    '$ build-stuff-jan-26 migrate-react-18:needs-migrate ~/test-projects/example-02',
  ];
  // For running locally: ./bin/run migrate-react-18:needs-migration ./test-projects/example-02

  static flags = {
    ...AbstractMigration.flags,
  };

  static args = [...AbstractMigration.args];

  async check(): Promise<boolean> {
    return true;
  }
}
