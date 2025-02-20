import React from 'react';
import { Icon } from '@iconify/react';
import rustIcon from '@iconify/icons-simple-icons/rust';
import npmIcon from '@iconify/icons-logos/npm-icon';
import pythonIcon from '@iconify/icons-logos/python';
import archlinuxIcon from '@iconify/icons-logos/archlinux';
import anacondaIcon from '@iconify/icons-simple-icons/anaconda';
import debianIcon from '@iconify/icons-logos/debian';

export default [
  {
    id: 'rust-cratesio',
    icon: <Icon height="4rem" icon={rustIcon} />,
  },
  {
    id: 'npm',
    icon: <Icon height="4rem" icon={npmIcon} />,
  },
  {
    id: 'pypi',
    icon: <Icon height="4rem" icon={pythonIcon} />,
  },
  {
    id: 'debian',
    icon: <Icon height="4rem" icon={debianIcon} />,
  },
  {
    id: 'archlinux',
    icon: <Icon height="4rem" icon={archlinuxIcon} />,
  },
  {
    id: 'anaconda',
    icon: <Icon height="4rem" icon={anacondaIcon} color="#3BA740" />,
  },
];
