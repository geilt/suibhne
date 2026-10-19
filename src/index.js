/**
 * buile CLI — core module
 * 
 * "I am Suibhne, fugitive from the storm of spears,
 * now dwelling with the birds of the air."
 */

import { Command } from 'commander';
import chalk from 'chalk';
import { installCommand } from './commands/install.js';
import { listCommand } from './commands/list.js';

const BANNER = `
  ╔═══════════════════════════════════════════╗
  ║  ${chalk.green('buile')} — the feral installer              ║
  ║  ${chalk.dim('skills from the wilderness')}                 ║
  ╚═══════════════════════════════════════════╝
`;

export function createCli() {
  const program = new Command();

  program
    .name('buile')
    .description(
      chalk.italic('From the Irish "buile" — frenzy, divine madness.\n') +
      chalk.dim('Named for Suibhne Geilt, the wild king who found wisdom in exile.\n\n') +
      'A CLI for gathering and installing skills, scripts, and fragments of feral wisdom.'
    )
    .version('0.1.0', '-v, --version', 'reveal the current incarnation')
    .helpOption('-h, --help', 'seek guidance from the woods')
    .addHelpText('before', BANNER)
    .addHelpText('after', `
${chalk.dim('━'.repeat(45))}
${chalk.green('Examples:')}
  ${chalk.cyan('$')} buile list              ${chalk.dim('# see what dwells in the registry')}
  ${chalk.cyan('$')} buile install <skill>   ${chalk.dim('# summon a skill to your machine')}

${chalk.dim('The geilt speaks:')}
  ${chalk.italic('"Even in madness, there is method.\n   Even in exile, there is home."')}
`);

  // Register commands
  program.addCommand(installCommand());
  program.addCommand(listCommand());

  return program;
}

export default createCli;
