import { FaVideo, FaVolumeUp, FaMobileAlt, FaFilm } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'
import { MdOutlineColorLens } from 'react-icons/md'

export const stats = [
  { num: '100+', label: 'Videos Edited' },
  { num: '10+', label: 'Happy Clients' },
  { num: '1M+', label: 'Views Generated' },
]

// target = number to count up to, suffix = what trails it ('+', 'M+')
export const statsBig = [
  { target: 100, suffix: '+', label: 'Videos Edited' },
  { target: 10, suffix: '+', label: 'Happy Clients' },
  { target: 1, suffix: 'M+', label: 'Views Generated' },
  { target: 1, suffix: '+', label: 'Year Experience' },
]

export const softwareBadges = [
  { name: 'Premiere Pro', letters: 'Pr', color: '#9a9dff' },
  { name: 'After Effects', letters: 'Ae', color: '#c39bff' },
]

export const aboutPoints = [
  'Story-first editing', 'Cinematic color grading',
  'Fast, reliable delivery', 'Clear communication',
]

export const marquee = [
  'Documentary', 'Music Videos', 'Brand Films', 'YouTube', 'Reels & Shorts', 'Commercials',
]

export const services = [
  {
    icon: FaVideo, title: 'Video Editing',
    desc: 'Narrative-first edits with tight pacing, seamless cuts, and rhythm that keeps viewers watching to the last frame.',
    tags: ['Premiere Pro', 'Storytelling', 'Pacing'],
  },
  {
    icon: HiOutlineSparkles, title: 'Motion Graphics',
    desc: 'Custom titles, kinetic typography, and animated overlays that add polish and personality to every frame.',
    tags: ['After Effects', 'Titles', 'Animation'],
  },
  {
    icon: MdOutlineColorLens, title: 'Color Grading',
    desc: 'Cinematic looks and consistent color science — from moody film grades to clean, punchy commercial tones.',
    tags: ['LUTs', 'Cinematic'],
  },
  {
    icon: FaVolumeUp, title: 'Sound Design',
    desc: 'Clean dialogue, balanced mixes, and immersive sound beds that make the picture feel alive.',
    tags: ['Mixing', 'SFX'],
  },
  {
    icon: FaMobileAlt, title: 'Short-form Content',
    desc: 'Scroll-stopping Reels, Shorts, and TikToks engineered with hooks, captions, and trend-aware pacing.',
    tags: ['Reels', 'Hooks', 'Captions'],
  },
  {
    icon: FaFilm, title: 'Full Post-Production',
    desc: 'End-to-end delivery — assembly, graphics, grade, sound, and export specs tuned for every platform.',
    tags: ['Delivery', 'Workflow', 'Multi-platform'],
  },
]

// YouTube-backed projects. `youtubeId` drives both the thumbnail and the inline embed.
export const projects = [
  { id: 1, title: 'Red Bull Event Edit', cat: 'Event Highlights', youtubeId: 'FPqIWrHjyS8', cover: 'images/RedBull.png' },
  { id: 2, title: 'Motion Graphics Showcase', cat: 'Motion Graphics', youtubeId: 'LY9iOphx9Ac' },
  { id: 3, title: 'Cafe Commercial', cat: 'Brand Commercial', youtubeId: '5AELGBE1jKI' },
  { id: 4, title: 'Food Commercial', cat: 'Food Commercial', youtubeId: 'r34nDRb6enI', cover: 'images/Coffe.png' },
]

export const software = [
  { name: 'Premiere Pro', short: 'Editing', letters: 'Pr', color: '#9999ff' },
  { name: 'After Effects', short: 'Motion', letters: 'Ae', color: '#c17bff' },
  { name: 'Photoshop', short: 'Design', letters: 'Ps', color: '#31a8ff' },
]

export const skillBars = [
  { name: 'Video Editing', level: 96 },
  { name: 'Color Grading', level: 90 },
  { name: 'Motion Graphics', level: 84 },
  { name: 'Sound Design', level: 78 },
  { name: 'Short-form / Social', level: 92 },
]

export const skillTags = [
  'Storytelling', 'Pacing & Rhythm', 'Cinematic Grading', 'Kinetic Typography',
  'Multicam', 'Beat Syncing', 'Captioning', 'Thumbnail Design', 'Proxy Workflow', 'Delivery Specs',
]

export const testimonials = [
  {
    quote: 'Working with Jenson was a wonderful experience. He beautifully captured the warmth, simplicity, and story behind our restaurant. The promotional videos perfectly reflected our farm-to-table concept and connected well with our audience. His creativity, attention to detail, and professionalism exceeded our expectations.',
    name: 'Padheyam',
    role: 'Restaurant & Organic Food Brand',
    handle: '_padheyam_',
    url: 'https://www.instagram.com/__padheyam__?igsh=MTB1b2pndjRraGdhNg==',
    image: 'images/Padheyam.png',
    initials: 'Pd',
  },
  {
    quote: 'Jenson has an incredible eye for storytelling. Every wedding highlight video he edited captured the emotions, energy, and beauty of the day perfectly. His edits consistently impressed both our team and our clients. We highly recommend him for anyone looking for high-quality cinematic editing.',
    name: 'Dazzle Creations Photography',
    role: 'Wedding Photography & Videography',
    handle: 'dazzle_creations_photography',
    url: 'https://www.instagram.com/dazzle_creations_photography',
    image: 'images/Dazzle.png',
    initials: 'Dc',
  },
  {
    quote: 'Jenson delivered outstanding promotional videos that truly showcased the quality of our catering services and hotel. His edits helped us present our brand in a modern and professional way while attracting more attention on social media. He understands exactly how to create engaging promotional content.',
    name: 'Jeffin Caterers',
    role: 'Catering Service & Hotel',
    handle: 'jeffin_caterers',
    url: 'https://www.instagram.com/jeffin_caterers',
    image: 'images/Jeffin.png',
    initials: 'Jc',
  },
]

export const process = [
  { n: '01', title: 'Discovery', desc: 'We align on goals, references, and the story you want the footage to tell.' },
  { n: '02', title: 'Assembly', desc: 'I build the structure — selects, pacing, and a rough cut for your review.' },
  { n: '03', title: 'Polish', desc: 'Motion graphics, color grade, and sound design bring it to a cinematic finish.' },
  { n: '04', title: 'Delivery', desc: 'Final exports tuned for every platform, with revisions until it’s perfect.' },
]

export const pricing = [
  {
    name: 'Starter', price: '$149', unit: '/ video', badge: '',
    features: ['Up to 3 min runtime', 'Basic color correction', 'Clean audio mix', '2 revisions', '48h delivery'],
    featured: false, cta: 'Choose Starter',
  },
  {
    name: 'Creator', price: '$349', unit: '/ video', badge: 'Most Popular',
    features: ['Up to 10 min runtime', 'Cinematic color grade', 'Motion graphics & titles', 'Sound design', '4 revisions', 'Priority delivery'],
    featured: true, cta: 'Choose Creator',
  },
  {
    name: 'Studio', price: 'Custom', unit: '/ project', badge: '',
    features: ['Long-form & series', 'Full post-production', 'Dedicated workflow', 'Unlimited revisions', 'Multi-platform delivery'],
    featured: false, cta: 'Let’s Talk',
  },
]
