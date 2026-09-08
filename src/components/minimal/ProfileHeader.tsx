import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';

const socials = [
  { href: profile.github, label: 'GitHub', Icon: Github },
  { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
];

export default function ProfileHeader() {
  return (
    <header>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[17px] font-semibold tracking-tight text-white">
            {profile.name}
          </h1>
          <p className="mt-0.5 text-[15px] text-neutral-400">{profile.role}</p>
        </div>
        <div className="flex items-center">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-2 text-neutral-400 transition-colors hover:text-white"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-neutral-300">
        <p>
          yo, I&apos;m Madhur, an AI engineer based in {profile.location.split(',')[0]},
          working across machine learning, computer vision, and mobile apps — obsessed
          with research, intelligent systems, and good design.
        </p>
        <p>
          So far, I&apos;ve built{' '}
          <a href="#projects" className="underline decoration-neutral-600 underline-offset-4 hover:text-white">
            5+ projects
          </a>{' '}
          across CV, GenAI, and mobile, conducted ML research at{' '}
          <a
            href={profile.iitIndore}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-600 underline-offset-4 hover:text-white"
          >
            IIT Indore
          </a>
          , and submitted a paper on AI-driven medical imaging to an international
          conference. I also share my work on{' '}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-600 underline-offset-4 hover:text-white"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5">
        <a
          href={`mailto:${profile.email}?subject=${encodeURIComponent('Intro call with Madhur')}`}
          className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-[13px] font-semibold text-black transition-colors hover:bg-neutral-200"
        >
          Book a call
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 px-4 py-2 text-[13px] font-semibold text-neutral-200 transition-colors hover:border-neutral-600"
        >
          <Linkedin size={14} />
          Message on LinkedIn
        </a>
      </div>
    </header>
  );
}
