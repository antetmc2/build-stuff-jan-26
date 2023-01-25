import AbstractCommand from '../../class/abstract-command';

export default class SimpleExample extends AbstractCommand {
  static description = 'Simple example of building the migration job by using the abstract class';

  static examples = ['$ build-stuff-jan-26 simple-example'];
  // For running locally: ./bin/run simple-example

  static flags = {
    ...AbstractCommand.flags,
  };

  static args = [];

  async run(): Promise<boolean> {
    this.log('Hello Build Stuff!');

    return true;
  }
}
