/**
 * buile install — summon skills from the wilderness
 */

import { Command } from 'commander';
import chalk from 'chalk';

export function installCommand() {
  const cmd = new Command('install');

  cmd
    .description('summon a skill from the registry to your machine')
    .argument('<skill>', 'the name of the skill to install')
    .option('-f, --force', 'overwrite existing installation without asking')
    .option('-g, --global', 'install to the global skills directory')
    .option('--dry-run', 'show what would be done without doing it')
    .action(async (skill, options) => {
      console.log(chalk.green('\n🌿 buile install'));
      console.log(chalk.dim('━'.repeat(40)));
      
      if (options.dryRun) {
        console.log(chalk.yellow('⚡ Dry run — no changes will be made\n'));
      }

      console.log(chalk.white(`Seeking skill: ${chalk.cyan(skill)}`));
      
      if (options.force) {
        console.log(chalk.dim('  → Force mode enabled'));
      }
      if (options.global) {
        console.log(chalk.dim('  → Installing globally'));
      }

      // TODO: Implement actual installation logic
      console.log(chalk.yellow(`\n⚠ Not yet implemented.`));
      console.log(chalk.dim('The skill registry is still forming in the mists.\n'));
      console.log(chalk.italic(chalk.dim(
        '"Patience. The hazel nuts fall\n' +
        ' when they are ready."'
      )));
      console.log();
    });

  return cmd;
}

export default installCommand;
