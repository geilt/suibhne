# buile

> *From the Irish "buile" — frenzy, divine madness*

A CLI for gathering and installing skills, scripts, and fragments of feral wisdom.

Named for **Suibhne Geilt**, the legendary wild king of Irish mythology who, cursed by a saint, fled into the wilderness and lived among the birds. In his exile, he found poetry and wisdom that he could never have discovered in the halls of power.

## Philosophy

Like the geilt wandering between the worlds of the tame and the wild, `buile` bridges the gap between scattered scripts and organized tooling. It gathers skills from the wilderness of repositories and installs them where they're needed.

## Installation

```bash
# Clone the repository
git clone https://github.com/geilt/suibhne.git
cd suibhne

# Install dependencies
npm install

# Link globally for development
npm link
```

## Usage

```bash
# Seek guidance
buile --help

# Reveal the current incarnation
buile --version

# See what dwells in the registry
buile list

# Summon a skill to your machine
buile install <skill>
```

## Commands

| Command | Description |
|---------|-------------|
| `buile list` | Reveal what skills dwell in the registry |
| `buile install <skill>` | Summon a skill from the registry |

## Roadmap

- [ ] Skill registry (local and remote)
- [ ] Skill scaffolding (`buile create`)
- [ ] Dependency resolution
- [ ] Update checking (`buile update`)
- [ ] Skill removal (`buile remove`)
- [ ] Configuration management

## The Geilt Speaks

> *"Even in madness, there is method.*  
> *Even in exile, there is home.*  
> *The birds taught me what the court could not —*  
> *that wisdom grows wild in the spaces between."*

## License

MIT — free as the wind through the hazel trees.
