/**
 * buile list — reveal what dwells in the registry
 */

import { Command } from 'commander';
import chalk from 'chalk';

export function listCommand() {
  const cmd = new Command('list');

  cmd
    .description('reveal what skills dwell in the registry')
    .option('-a, --all', 'show all skills including experimental')
    .option('-i, --installed', 'show only installed skills')
    .option('--json', 'output as JSON for scripting')
    .action(async (options) => {
      console.log(chalk.green('\n🌲 buile list'));
      console.log(chalk.dim('━'.repeat(40)));

      if (options.json) {
        // Future: output structured JSON
        console.log(JSON.stringify({ skills: [], message: 'Registry not yet populated' }, null, 2));
        return;
      }

      if (options.installed) {
        console.log(chalk.white('Installed skills:'));
        console.log(chalk.dim('  (none yet)\n'));
      } else {
        console.log(chalk.white('Available skills:'));
        console.log(chalk.dim('  The registry grows slowly...\n'));
      }

      // TODO: Implement actual listing logic
      console.log(chalk.yellow('⚠ Not yet implemented.'));
      console.log(chalk.dim('The birds have not yet brought word of all the skills.\n'));
      console.log(chalk.italic(chalk.dim(
        '"In the wilderness, knowledge accumulates\n' +
        ' like moss on stone — slowly, but surely."'
      )));
      console.log();
    });

  return cmd;
}

export default listCommand;
