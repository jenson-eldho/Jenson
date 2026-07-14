// Placeholder media via Lorem Picsum. Swap `img()` URLs for real stills/thumbnails,
// and drop real video links into the `video` fields when available.
const img = (seed, w = 800, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const stats = [
  { num: '100+', label: 'Videos Edited' },
  { num: '20+', label: 'Happy Clients' },
  { num: '10M+', label: 'Views Generated' },
]

export const statsBig = [
  { num: '100+', label: 'Videos Edited' },
  { num: '20+', label: 'Happy Clients' },
  { num: '10M+', label: 'Views Generated' },
  { num: '5+', label: 'Years Experience' },
]

export const softwareBadges = [
  { name: 'Premiere Pro', letters: 'Pr', color: '#9a9dff' },
  { name: 'After Effects', letters: 'Ae', color: '#c39bff' },
  { name: 'DaVinci Resolve', letters: 'DR', color: '#ff9d3d' },
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
    icon: '🎬', title: 'Video Editing',
    desc: 'Narrative-first edits with tight pacing, seamless cuts, and rhythm that keeps viewers watching to the last frame.',
    tags: ['Premiere Pro', 'Storytelling', 'Pacing'],
  },
  {
    icon: '✨', title: 'Motion Graphics',
    desc: 'Custom titles, kinetic typography, and animated overlays that add polish and personality to every frame.',
    tags: ['After Effects', 'Titles', 'Animation'],
  },
  {
    icon: '🎨', title: 'Color Grading',
    desc: 'Cinematic looks and consistent color science — from moody film grades to clean, punchy commercial tones.',
    tags: ['DaVinci Resolve', 'LUTs', 'Cinematic'],
  },
  {
    icon: '🔊', title: 'Sound Design',
    desc: 'Clean dialogue, balanced mixes, and immersive sound beds that make the picture feel alive.',
    tags: ['Audition', 'Mixing', 'SFX'],
  },
  {
    icon: '📱', title: 'Short-form Content',
    desc: 'Scroll-stopping Reels, Shorts, and TikToks engineered with hooks, captions, and trend-aware pacing.',
    tags: ['Reels', 'Hooks', 'Captions'],
  },
  {
    icon: '🚀', title: 'Full Post-Production',
    desc: 'End-to-end delivery — assembly, graphics, grade, sound, and export specs tuned for every platform.',
    tags: ['Delivery', 'Workflow', 'Multi-platform'],
  },
]

export const projects = [
  { id: 1, title: 'Northlight — Doc Trailer', cat: 'Documentary', views: '2.4M views', src: img('proj-north', 900, 620), video: '' },
  { id: 2, title: 'Undertow — Music Video', cat: 'Music Video', views: '5.1M views', src: img('proj-under', 900, 620), video: '' },
  { id: 3, title: 'Meridian — Brand Film', cat: 'Brand Film', views: '880K views', src: img('proj-merid', 900, 620), video: '' },
  { id: 4, title: 'Sprout — 30s Reel', cat: 'Short-form', views: '1.9M views', src: img('proj-sprout', 900, 620), video: '' },
  { id: 5, title: 'Apex — Product Spot', cat: 'Commercial', views: '640K views', src: img('proj-apex', 900, 620), video: '' },
  { id: 6, title: 'Wander — Travel Cut', cat: 'YouTube', views: '3.3M views', src: img('proj-wander', 900, 620), video: '' },
]

export const software = [
  { name: 'Premiere Pro', short: 'Editing', letters: 'Pr', color: '#9999ff' },
  { name: 'After Effects', short: 'Motion', letters: 'Ae', color: '#c17bff' },
  { name: 'DaVinci Resolve', short: 'Color', letters: 'DR', color: '#ff7a00' },
  { name: 'Photoshop', short: 'Design', letters: 'Ps', color: '#31a8ff' },
  { name: 'Audition', short: 'Audio', letters: 'Au', color: '#66ff99' },
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
    quote: 'Jenson turned 40 hours of raw footage into a trailer that got us funded. His sense of pacing is unreal.',
    name: 'Ava Mitchell', role: 'Director, Northlight Films', avatar: img('t-ava', 120, 120),
  },
  {
    quote: 'Our Reels went from flat to 1.9M views. The hooks, the cuts, the captions — everything just works.',
    name: 'Daniel Cho', role: 'Founder, Sprout', avatar: img('t-dan', 120, 120),
  },
  {
    quote: 'The color grade gave our brand film a look that felt like a feature film. Fast, reliable, and creative.',
    name: 'Priya Nair', role: 'Marketing Lead, Meridian', avatar: img('t-priya', 120, 120),
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
