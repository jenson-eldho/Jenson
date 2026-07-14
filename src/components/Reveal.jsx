import useReveal from '../hooks/useReveal'

// Wraps children with a scroll-reveal animation. `as` lets it render any tag.
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
