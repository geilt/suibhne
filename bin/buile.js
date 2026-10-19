#!/usr/bin/env node

/**
 * buile — the feral installer
 * 
 * From the Irish "buile" meaning frenzy, madness, divine fury.
 * Named for Suibhne Geilt, the wild king who fled into the trees
 * and found wisdom in exile.
 * 
 * This tool gathers skills from the wilderness.
 */

import { createCli } from '../src/index.js';

const cli = createCli();
cli.parse(process.argv);
